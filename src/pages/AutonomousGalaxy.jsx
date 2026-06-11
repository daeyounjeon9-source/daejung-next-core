import Layout from "../components/Layout";

export default function AutonomousGalaxy() {
  const economy = [
    "AI Resource Allocation",
    "Global AI Finance",
    "Infinite Commerce Chain",
    "Planetary Economic Grid"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Autonomous Galaxy Economy</h1>

        {economy.map(e => (
          <div key={e} style={card}>💰 {e}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"30px",
  marginTop:"16px",
  borderRadius:"24px"
};
