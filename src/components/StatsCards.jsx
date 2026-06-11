export default function StatsCards() {
  const card = {
    background:"linear-gradient(135deg,#111A35,#17244A)",
    border:"1px solid #263761",
    borderRadius:"20px",
    padding:"24px",
    color:"white",
    boxShadow:"0 0 24px rgba(64,120,255,0.18)"
  };

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
      gap:"20px"
    }}>
      <div style={card}>👥 회원 수<br/><h2>1,280</h2></div>
      <div style={card}>🛒 주문 수<br/><h2>532</h2></div>
      <div style={card}>💳 결제 금액<br/><h2>₩12.8M</h2></div>
      <div style={card}>🤖 AI 요청<br/><h2>9,431</h2></div>
    </div>
  );
}
