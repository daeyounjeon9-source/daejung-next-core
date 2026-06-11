import Layout from "../components/Layout";

export default function HyperCivilization() {
  const systems = [
    "AI Civilization Layer",
    "Autonomous Nation Grid",
    "Meta Society Network",
    "Global AI Governance"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Hyper Civilization Network</h1>

        {systems.map(s => (
          <div key={s} style={card}>🌍 {s}</div>
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
