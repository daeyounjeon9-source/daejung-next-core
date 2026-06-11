import Layout from "../components/Layout";

export default function NeuralCoreExpansion() {
  const modules = [
    "판단 기억 축적",
    "성과 기반 재학습",
    "AI 우선순위 제어",
    "실시간 전략 조정",
    "자율 운영 구조"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Neural Core 2차 확장</h1>

        {modules.map(m => (
          <div key={m} style={card}>🧬 {m}</div>
        ))}
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
