import Layout from "../components/Layout";

export default function EducationPlatform() {
  const items = [
    "AI 교육 플랫폼",
    "라이브 강의",
    "맞춤 추천 학습",
    "AI 튜터"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>교육 플랫폼 구조</h1>
        {items.map(i => <div key={i} style={card}>📚 {i}</div>)}
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
