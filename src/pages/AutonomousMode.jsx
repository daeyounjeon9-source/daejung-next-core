import Layout from "../components/Layout";

export default function AutonomousMode() {
  const items = [
    "AI 자율 상품 운영",
    "자동 리스크 대응",
    "실시간 가격 최적화",
    "AI 고객 응답",
    "AI 라이브 자동 운영"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI 자율 운영 모드</h1>
        {items.map(i => <div key={i} style={card}>🤖 {i}</div>)}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"22px",
  marginTop:"14px",
  borderRadius:"18px"
};
