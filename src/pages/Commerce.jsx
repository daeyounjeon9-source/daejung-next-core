import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mainHome.css";
import { generatedProducts } from "../data/generatedProductCatalog";

const priceBands = [
  ["전체금액", 0, Infinity],
  ["3만원 이하", 0, 30000],
  ["3만~10만", 30000, 100000],
  ["10만~50만", 100000, 500000],
  ["50만~100만", 500000, 1000000],
  ["100만원 이상", 1000000, Infinity],
];

function won(v = 0) {
  return `${Number(v || 0).toLocaleString("ko-KR")}원`;
}

function score(p) {
  return (p.trust || 0) * 2 + (p.rating || 0) * 18 + (p.sale || 0) + Math.min(p.reviews || 0, 800) / 20;
}

function pickCompare(base, pool) {
  return pool
    .filter((p) => p.id !== base.id && (p.group === base.group || p.category === base.category))
    .sort((a, b) => Math.abs(a.price - base.price) - Math.abs(b.price - base.price))
    .slice(0, 5);
}

export default function Commerce() {
  const navigate = useNavigate();
  const categories = ["전체", ...Array.from(new Set(generatedProducts.map((p) => p.group || p.category))).slice(0, 30)];
  const [category, setCategory] = useState("전체");
  const [band, setBand] = useState("전체금액");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const rule = priceBands.find(([name]) => name === band) || priceBands[0];
    return generatedProducts
      .filter((p) => category === "전체" || p.group === category || p.category === category)
      .filter((p) => p.price >= rule[1] && p.price <= rule[2])
      .filter((p) => !q || `${p.company} ${p.name} ${p.group} ${p.category} ${p.spec}`.toLowerCase().includes(q))
      .sort((a, b) => score(b) - score(a))
      .slice(0, 60);
  }, [category, band, query]);

  const main = selected || filtered[0] || generatedProducts[0];
  const compare = main ? pickCompare(main, generatedProducts) : [];

  const sendDecision = (product = main) => {
    if (!product) return;
    localStorage.setItem("dn_selected_product", JSON.stringify(product));
    localStorage.setItem("dn_compare_products", JSON.stringify(pickCompare(product, generatedProducts)));
    navigate("/decision-room");
  };

  return (
    <main className="home-room commerce-room-v3">
      <section className="section neural-border commerce-hero-v3">
        <div className="section-title">
          <span>전체상품관 · ALL PRODUCTS</span>
          <h2>모든 상품을 여기서 고르고 비교합니다</h2>
          <p>도면 기준: 전체상품관은 전체상품관 본관입니다. 상품 선택·검색·가격대·회사·비교상품 연결을 담당합니다.</p>
        </div>
        <div className="commerce-search-row">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="상품명·회사명·카테고리 검색" />
          <button type="button" onClick={() => setQuery("")}>초기화</button>
          <button type="button" onClick={() => sendDecision(main)}>선택상품 구매결정 쇼룸으로</button>
          <button type="button" onClick={() => navigate("/seller-center")}>판매자 검증센터</button>
        </div>
        <div className="commerce-filter-v3">
          <div>{categories.map((c) => <button key={c} type="button" className={category === c ? "active" : ""} onClick={() => { setCategory(c); setSelected(null); }}>{c}</button>)}</div>
          <div>{priceBands.map(([name]) => <button key={name} type="button" className={band === name ? "active" : ""} onClick={() => setBand(name)}>{name}</button>)}</div>
        </div>
      </section>

      {main && (
        <section className="section neural-border commerce-main-v3">
          <div className="commerce-main-image"><img src={main.img} alt={main.name} /></div>
          <div className="commerce-main-info">
            <span>현재 선택 상품</span>
            <h2>{main.company} {main.name}</h2>
            <p>{main.spec}</p>
            <div className="commerce-facts-v3">
              <b>{won(main.price)}</b><em>{main.sale || main.discountRate || 0}% 할인</em><em>신뢰 {main.trust || 0}점</em><em>리뷰 {main.reviews || 0}</em>
            </div>
            <div className="commerce-trust-v3">
              <strong>AI 신뢰검토</strong>
              <p>판매자 인증, 본품/부속품 혼동, 구성품 누락, 이미지/상세설명 불일치 위험을 구매 전 확인합니다.</p>
              <small>{main.riskNote || "관리자 최종 확인 필요"}</small>
            </div>
            <button className="decision-send-btn" onClick={() => sendDecision(main)}>구매결정 쇼룸 구매결정 쇼룸으로 이동</button>
          </div>
        </section>
      )}

      <section className="section neural-border">
        <div className="section-title row-title"><div><span>비교상품 5개</span><h2>선택 즉시 비교 그룹 생성</h2></div><p>비슷한 가격·같은 상품군 기준</p></div>
        <div className="compare-grid-v3">
          {compare.map((p) => <button key={p.id} onClick={() => setSelected(p)}>
            <img src={p.img} alt={p.name} />
            <b>{p.company}</b><span>{p.name}</span><strong>{won(p.price)}</strong><em>신뢰 {p.trust || 0} · 별점 {p.rating || 0}</em>
          </button>)}
        </div>
      </section>

      <section className="section neural-border">
        <div className="section-title row-title"><div><span>전체상품</span><h2>검색 결과 {filtered.length}개</h2></div><p>클릭하면 메인 선택이 바뀝니다</p></div>
        <div className="catalog-grid-v3">
          {filtered.map((p) => <article key={p.id} className={main?.id === p.id ? "selected" : ""} onClick={() => setSelected(p)}>
            <img src={p.img} alt={p.name} />
            <div><em>{p.group}</em><h3>{p.company} {p.name}</h3><p>{p.spec}</p><strong>{won(p.price)}</strong><button onClick={(e) => { e.stopPropagation(); sendDecision(p); }}>구매결정</button></div>
          </article>)}
        </div>
      </section>
    </main>
  );
}
