import Layout from "../components/Layout";

export default function DataHub() {
  const hubs = [
    "고객 데이터",
    "AI 판단 데이터",
    "라이브 데이터",
    "글로벌 데이터",
    "행동 패턴 데이터"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>초대형 데이터 허브</h1>
        {hubs.map(h => <div key={h} style={card}>🗄 {h}</div>)}
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
