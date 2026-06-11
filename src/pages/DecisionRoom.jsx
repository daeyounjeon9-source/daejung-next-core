import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mainHome.css";
import { generatedProducts } from "../data/generatedProductCatalog";

function won(v = 0) { return `${Number(v || 0).toLocaleString("ko-KR")}원`; }
function fallbackCompare(base) {
  return generatedProducts.filter((p) => p.id !== base.id && (p.group === base.group || p.category === base.category)).slice(0, 5);
}

export default function DecisionRoom(){
  const navigate = useNavigate();
  const stored = (() => { try { return JSON.parse(localStorage.getItem("dn_selected_product") || "null"); } catch { return null; } })();
  const storedCompare = (() => { try { return JSON.parse(localStorage.getItem("dn_compare_products") || "[]"); } catch { return []; } })();
  const [main, setMain] = useState(stored || generatedProducts[0]);
  const compare = useMemo(() => fallbackCompare(main).filter((p) => p.id !== main.id).slice(0, 5), [main]);
  const accessories = ["기본 구성 확인", "배송/설치 옵션", "보증/AS 확인", "추가 구성품", "최종 가격 합산"];
  const steps = ["상품검토", "판매자인증", "비교완료", "최종결정"];

  const choose = (p) => {
    setMain(p);
    localStorage.setItem("dn_selected_product", JSON.stringify(p));
    localStorage.setItem("dn_compare_products", JSON.stringify(fallbackCompare(p)));
  };

  return <main className="home-room decision-showroom-v4">
    <section className="section neural-border decision-stage-v4">
      <div className="section-title">
        <span>구매결정 쇼룸 · PURCHASE DECISION SHOWROOM</span>
        <h2>선택 상품 1개를 최종 무대에 올립니다</h2>
        <p>도면 기준: 구매결정 쇼룸은 단일상품 집중, 비교 교체, 최종 구매결정만 담당합니다.</p>
      </div>
      <div className="decision-stage-grid-v4">
        <div className="decision-main-photo"><img src={main.img} alt={main.name} /><b>MAIN</b></div>
        <div className="decision-main-detail">
          <span>{main.group} · {main.status || "검증대기"}</span>
          <h1>{main.company} {main.name}</h1>
          <p>{main.spec}</p>
          <div className="decision-price-row"><strong>{won(main.price)}</strong><em>{main.sale || main.discountRate || 0}% 할인</em><em>신뢰 {main.trust || 0}점</em></div>
          <div className="decision-flow-v6">{steps.map((s, i) => <span key={s} className={i < 3 ? "done" : "ready"}>{i + 1}. {s}</span>)}</div>
          <div className="decision-checklist-v4">
            <article><b>AI 상품검토</b><p>제목·이미지·제원·구성품 교차검증</p></article>
            <article><b>판매자 인증</b><p>사업자·계좌·연락처 확인 구조</p></article>
            <article><b>구매 위험도</b><p>{main.riskNote || "관리자 최종 확인 필요"}</p></article>
          </div>
          <div className="decision-actions-v4"><button type="button" onClick={() => alert("장바구니 테스트: 최종 결제 전 합산 영역")}>장바구니</button><button type="button" onClick={() => navigate("/checkout")}>결제테스트</button><button type="button" onClick={() => navigate("/commerce")}>전체상품관으로</button><button type="button" onClick={() => navigate("/seller-center")}>판매자검증</button><button type="button" onClick={() => navigate("/live")}>LIVE운영</button></div>
        </div>
      </div>
    </section>

    <section className="section neural-border">
      <div className="section-title row-title"><div><span>비교 교체</span><h2>다른 상품을 누르면 메인 무대가 즉시 변경</h2></div><p>뒤로가기 없이 구매 후보 교체</p></div>
      <div className="compare-grid-v3">
        {compare.map((p) => <button key={p.id} type="button" onClick={() => choose(p)}><img src={p.img} alt={p.name}/><b>{p.company}</b><span>{p.name}</span><strong>{won(p.price)}</strong><em>신뢰 {p.trust || 0} · 별점 {p.rating || 0}</em></button>)}
      </div>
      <div className="decision-compare-table-v6">
        {[main, ...compare.slice(0, 3)].map((p) => <article key={p.id} className={p.id === main.id ? "main" : ""}><b>{p.id === main.id ? "현재 선택" : "비교 후보"}</b><span>{p.company} {p.name}</span><em>{won(p.price)}</em><small>신뢰 {p.trust || 0} · 리뷰 {p.reviews || 0}</small></article>)}
      </div>
    </section>

    <section className="section neural-border">
      <div className="section-title"><span>구성 확인</span><h2>최종 구매 전 확인 항목</h2></div>
      <div className="decision-support-grid-v4">{accessories.map((a) => <article key={a}><b>{a}</b><p>회원이 오인 없이 최종 확인할 수 있도록 전체상품관 정보와 연결됩니다.</p></article>)}</div>
    </section>
  </main>;
}
