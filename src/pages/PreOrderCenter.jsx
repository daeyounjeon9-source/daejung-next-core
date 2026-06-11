import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LiveScheduleFlow.css";

const preorderItems = [
  { time: "월 20:00", title: "삼성 TV 특가 LIVE", price: "예약가 399,000원", benefit: "방송 전 예약 혜택" },
  { time: "화 21:00", title: "냉장고 특집", price: "예약가 899,000원", benefit: "설치비 지원" },
  { time: "목 19:30", title: "지역특산물 상생 LIVE", price: "예약가 39,000원", benefit: "묶음 할인" },
];

export default function PreOrderCenter(){
  const navigate = useNavigate();
  const goShowcase = () => navigate("/", { replace: true });

  useEffect(() => {
    const handleBack = () => navigate("/", { replace: true });
    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  }, [navigate]);

  return (
    <main className="live-flow-page">
      <button type="button" className="showcase-return" onClick={goShowcase}>← GOD 6 셀렉션으로</button>
      <section className="live-flow-hero">
        <span>PRE ORDER</span>
        <h1>미리주문 센터</h1>
        <p>편성표의 예약 방송 상품을 방송 전 미리 담고, 방송 시작 시 바로 구매 흐름으로 이어집니다.</p>
      </section>
      <section className="preorder-list">
        {preorderItems.map((item) => (
          <article key={item.title} className="preorder-card">
            <div><b>{item.time}</b><h3>{item.title}</h3><p>{item.benefit}</p></div>
            <strong>{item.price}</strong>
            <button onClick={() => alert(`${item.title} 미리주문 준비 완료`)}>🔔 미리주문</button>
          </article>
        ))}
      </section>
    </main>
  );
}
