import Layout from "../components/Layout";

export default function MultiAICollaboration() {
  const ai = [
    "추천 AI",
    "운영 AI",
    "콘텐츠 AI",
    "리스크 AI",
    "Neural Core Master"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>멀티 AI 협업 구조</h1>

        {ai.map(a => (
          <div key={a} style={card}>🤖 {a}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#17244A)",
  padding:"22px",
  marginTop:"14px",
  borderRadius:"18px"
};
