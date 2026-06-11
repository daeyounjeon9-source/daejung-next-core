import Layout from "../components/Layout";

export default function EternalCommerce() {
  const items = [
    "Infinite Global Trade",
    "AI Autonomous Revenue",
    "Meta Planetary Commerce",
    "Creator Universe Economy"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Eternal Commerce Matrix</h1>

        {items.map(i => (
          <div key={i} style={card}>💰 {i}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"34px",
  marginTop:"16px",
  borderRadius:"26px"
};
