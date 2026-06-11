import Layout from "../components/Layout";

export default function GalaxyCommerce() {
  const items = [
    "행성 단위 상거래",
    "글로벌 AI 쇼핑망",
    "메타 상점 연결",
    "실시간 초거대 거래"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Galaxy Commerce Grid</h1>
        {items.map(i => <div key={i} style={card}>🌌 {i}</div>)}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"26px",
  marginTop:"14px",
  borderRadius:"20px"
};
