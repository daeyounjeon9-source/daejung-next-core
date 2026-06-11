import Layout from "../components/Layout";

export default function AIEmpireEconomy() {
  const economy = [
    "AI Autonomous Currency",
    "Global Creator Revenue",
    "Quantum Financial Grid",
    "Infinite Reward Engine"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI Empire Economy</h1>

        {economy.map(e => (
          <div key={e} style={card}>💰 {e}</div>
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
