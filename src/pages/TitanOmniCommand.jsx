import Layout from "../components/Layout";

export default function TitanOmniCommand() {
  const systems = [
    "Universal AI Coordination",
    "Infinite Neural Governance",
    "Quantum Strategic Control",
    "Autonomous Global Intelligence"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Titan Omni Command</h1>

        {systems.map(s => (
          <div key={s} style={card}>🛰 {s}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#182B5A)",
  padding:"34px",
  marginTop:"16px",
  borderRadius:"26px"
};
