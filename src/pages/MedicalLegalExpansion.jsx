import Layout from "../components/Layout";

export default function MedicalLegalExpansion() {
  const items = [
    "의료 AI 추천",
    "법률 AI 보조",
    "AI 문서 분석",
    "전문가 협업 시스템"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>의료/법률 확장 구조</h1>
        {items.map(i => <div key={i} style={card}>⚕ {i}</div>)}
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
