import Layout from "../components/Layout";

export default function CreatorEconomy() {
  const creators = [
    "라이브 방송 수익",
    "AI 콘텐츠 수익",
    "광고 공유 수익",
    "VIP Creator 시스템"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Creator Economy</h1>
        {creators.map(c => <div key={c} style={card}>🎬 {c}</div>)}
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
