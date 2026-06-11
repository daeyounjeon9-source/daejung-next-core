import Layout from "../components/Layout";

export default function CosmicCommerce() {
  const items = [
    "Universal Market Exchange",
    "Meta Galaxy Shopping",
    "Infinite Creator Revenue",
    "AI Autonomous Trade"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Cosmic Commerce System</h1>

        {items.map(i => (
          <div key={i} style={card}>🌌 {i}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#182B5A)",
  padding:"30px",
  marginTop:"16px",
  borderRadius:"24px"
};
