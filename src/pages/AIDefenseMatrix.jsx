import Layout from "../components/Layout";

export default function AIDefenseMatrix() {
  const items = [
    "AI Cyber Shield",
    "Autonomous Threat Detection",
    "Quantum Security Layer",
    "Global Risk Lock"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI Defense Matrix</h1>
        {items.map(i => <div key={i} style={card}>🛡 {i}</div>)}
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
