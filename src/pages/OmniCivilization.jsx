import Layout from "../components/Layout";

export default function OmniCivilization() {
  const systems = [
    "AI Global Governance",
    "Infinite Resource Allocation",
    "Autonomous Civilization Layers",
    "Quantum Society Grid"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Omni Civilization Engine</h1>

        {systems.map(s => (
          <div key={s} style={card}>🌍 {s}</div>
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
