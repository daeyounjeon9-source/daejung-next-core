import Layout from "../components/Layout";

export default function OmniStrategy() {
  const strategies = [
    "Global Strategy Sync",
    "AI Predictive Matrix",
    "Infinite Market Control",
    "Quantum Optimization"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Omni Strategy Matrix</h1>

        {strategies.map(s => (
          <div key={s} style={card}>♾ {s}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"28px",
  marginTop:"16px",
  borderRadius:"22px"
};
