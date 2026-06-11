import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LiveScheduleFlow.css";

export default function LiveQuickOrder(){
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
        <span>LIVE QUICK ORDER</span>
        <h1>바로주문 센터</h1>
        <p>방송중 상품을 장바구니 없이 빠르게 주문 흐름으로 연결합니다.</p>
      </section>
      <section className="quick-order-box">
        <div className="quick-live-screen">
          <b>🔴 방송중</b>
          <h2>AI 생활 패키지</h2>
          <p>LIVE 방송 전용 혜택 · AI 신뢰도 96</p>
        </div>
        <aside className="quick-order-panel">
          <span>방송가</span>
          <strong>39,000원</strong>
          <button onClick={() => navigate('/checkout')}>⚡ 바로주문 진행</button>
          <button onClick={() => alert('장바구니에 담겼습니다')}>장바구니 담기</button>
        </aside>
      </section>
    </main>
  );
}
