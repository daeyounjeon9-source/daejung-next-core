import Layout from "../components/Layout";

export default function RecommendationEngine() {
  const engines = [
    "행동 분석 추천",
    "실시간 구매 예측",
    "라이브 상품 추천",
    "VIP 맞춤 추천",
    "AI 감정 기반 추천"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI 자동 추천 엔진</h1>

        {engines.map(e => (
          <div key={e} style={card}>{e}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"20px",
  marginTop:"14px",
  borderRadius:"16px"
};
