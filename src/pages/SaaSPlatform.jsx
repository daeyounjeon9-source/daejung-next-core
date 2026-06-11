import Layout from "../components/Layout";

export default function SaaSPlatform() {
  const saas = [
    "기업 AI 추천 SaaS",
    "기업 라이브 SaaS",
    "운영 AI SaaS",
    "CRM SaaS"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>기업용 SaaS 구조</h1>
        {saas.map(s => <div key={s} style={card}>🏢 {s}</div>)}
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
