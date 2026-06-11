import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LiveScheduleFlow.css";

const weeklySchedule = [
  { day: "월", time: "20:00", title: "삼성 TV 특가 LIVE", product: "AI 생활 패키지", benefit: "방송 전 예약가" },
  { day: "화", time: "21:00", title: "냉장고·김치냉장고 특집", product: "프리미엄 냉장고", benefit: "무료배송 쿠폰" },
  { day: "수", time: "20:00", title: "세탁기 LIVE", product: "AI 세탁 패키지", benefit: "설치비 지원" },
  { day: "목", time: "19:30", title: "지역특산물 상생 LIVE", product: "지역특산 꾸러미", benefit: "묶음 할인" },
  { day: "금", time: "20:30", title: "라이브특가", product: "오늘의 결정가", benefit: "방송중 바로혜택" },
  { day: "토", time: "21:00", title: "공동구매 LIVE", product: "공동구매 패키지", benefit: "수량 달성 할인" },
  { day: "일", time: "20:00", title: "브랜드관 LIVE", product: "브랜드 대표상품", benefit: "주말 전용 혜택" },
];

export default function LiveScheduleAlerts(){
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
        <span>DAEJUNG NEXT LIVE</span>
        <h1>방송시간 알림센터</h1>
        <p>기존 휴대폰 알림 기능을 유지하면서 방송 1일 전, 1시간 전, 10분 전, 시작 알림을 예약합니다.</p>
      </section>
      <section className="live-flow-grid">
        {weeklySchedule.map((item) => (
          <article key={item.day} className="live-flow-card">
            <b>{item.day}</b>
            <strong>{item.time} · {item.title}</strong>
            <p>{item.product}</p>
            <small>{item.benefit}</small>
            <div className="live-flow-actions">
              <button onClick={() => alert(`${item.day} ${item.time} 방송 알림 신청 완료`)}>🔔 알림신청</button>
              <button onClick={() => navigate('/preorder-center')}>미리주문</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
