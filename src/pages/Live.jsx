import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mainHome.css";
import { generatedProducts } from "../data/generatedProductCatalog";

const rooms = [
  { title: "생활가전 LIVE", seller: "NEXT HOME", status: "방송준비", trust: 94, viewers: 1280 },
  { title: "디지털 특가 LIVE", seller: "DIGITAL LIVE", status: "송출대기", trust: 96, viewers: 2140 },
  { title: "지역상품 홍보 LIVE", seller: "LOCAL PRIME", status: "문의중심", trust: 89, viewers: 640 },
];

function won(v = 0) { return `${Number(v || 0).toLocaleString("ko-KR")}원`; }

export default function Live(){
  const navigate = useNavigate();
  const [active, setActive] = useState(rooms[0]);
  const liveProducts = useMemo(() => generatedProducts.slice(0, 6), []);
  const selected = liveProducts[0];

  const goDecision = (p = selected) => {
    localStorage.setItem("dn_selected_product", JSON.stringify(p));
    localStorage.setItem("dn_compare_products", JSON.stringify(liveProducts.filter((x) => x.id !== p.id).slice(0, 5)));
    navigate("/decision-room");
  };

  return <main className="home-room live-operation-v7">
    <section className="section neural-border live-hero-v7">
      <div className="section-title">
        <span>LIVE 운영센터</span>
        <h2>실제 송출 전 운영 흐름을 점검합니다</h2>
        <p>도면 기준: LIVE는 GOD 6 셀렉션 노출, 특별관 홍보, 전체상품관 상품, 구매결정 쇼룸 연결으로 연결됩니다.</p>
      </div>
      <div className="live-stage-v7">
        <div className="live-screen-v7">
          <b>LIVE ON AIR</b>
          <h3>{active.title}</h3>
          <p>{active.seller} · {active.status}</p>
          <span>시청 {active.viewers.toLocaleString("ko-KR")}명 · 신뢰 {active.trust}점</span>
        </div>
        <div className="live-control-v7">
          <h3>방송 운영 체크</h3>
          <article><b>송출</b><span>RTMP/WebRTC 연결 준비</span></article>
          <article><b>상품</b><span>방송상품 → 전체상품관 상품 연결</span></article>
          <article><b>구매</b><span>선택상품 → 구매결정 쇼룸 구매결정</span></article>
          <article><b>신뢰</b><span>판매자 인증 상태 노출</span></article>
          <button type="button" onClick={() => goDecision()}>방송상품 구매결정</button>
        </div>
      </div>
    </section>

    <section className="section neural-border">
      <div className="section-title row-title"><div><span>방송방 선택</span><h2>LIVE 방 상태</h2></div><p>실제 운영 연결 전 테스트 대기열</p></div>
      <div className="live-room-grid-v7">
        {rooms.map((r) => <button key={r.title} className={active.title === r.title ? "on" : ""} onClick={() => setActive(r)}>
          <b>{r.title}</b><span>{r.seller}</span><strong>{r.status}</strong><em>신뢰 {r.trust} · {r.viewers.toLocaleString("ko-KR")}명</em>
        </button>)}
      </div>
    </section>

    <section className="section neural-border">
      <div className="section-title row-title"><div><span>방송상품</span><h2>LIVE 상품 → 구매결정 연결</h2></div><p>누르면 구매결정 쇼룸으로 전달</p></div>
      <div className="live-product-grid-v7">
        {liveProducts.map((p) => <article key={p.id} onClick={() => goDecision(p)}>
          <img src={p.img} alt={p.name}/><b>{p.company}</b><span>{p.name}</span><strong>{won(p.price)}</strong><em>구매결정으로 이동</em>
        </article>)}
      </div>
    </section>
  </main>;
}
