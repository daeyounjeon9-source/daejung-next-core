import Layout from "../components/Layout";

export default function AICivilization() {
  const systems = [
    "AI 경제 순환",
    "AI 도시 운영",
    "AI 데이터 흐름",
    "AI 사회 시스템"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI Civilization Engine</h1>
        {systems.map(s => <div key={s} style={card}>🌐 {s}</div>)}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"24px",
  marginTop:"14px",
  borderRadius:"18px"
};
