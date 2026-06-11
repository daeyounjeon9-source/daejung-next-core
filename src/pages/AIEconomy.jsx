import Layout from "../components/Layout";

export default function AIEconomy() {
  const economy = [
    "AI 코인",
    "포인트 생태계",
    "광고 수익 공유",
    "AI 추천 보상",
    "Creator 수익 분배"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI 경제 시스템</h1>
        {economy.map(e => <div key={e} style={card}>💰 {e}</div>)}
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
