export default function SalesCards() {
  const card = {
    background:"#111A35",
    border:"1px solid #263761",
    borderRadius:"20px",
    padding:"24px",
    color:"white"
  };

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
      gap:"18px",
      marginTop:"24px"
    }}>
      <div style={card}>오늘 매출<h2>₩420,000</h2></div>
      <div style={card}>이번달 매출<h2>₩12,800,000</h2></div>
      <div style={card}>환불 대기<h2>3건</h2></div>
      <div style={card}>정산 예정<h2>₩8,200,000</h2></div>
    </div>
  );
}
