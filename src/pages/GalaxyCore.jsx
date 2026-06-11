import Layout from "../components/Layout";

export default function GalaxyCore() {
  const systems = [
    "Universal AI Brain",
    "Infinite Neural Matrix",
    "Global Autonomous Economy",
    "Meta Civilization",
    "Quantum AI Grid",
    "Titan Command Network"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>DAEJUNG NEXT GALAXY CORE</h1>

        {systems.map(s => (
          <div key={s} style={card}>🌌 {s}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#182B5A)",
  padding:"30px",
  marginTop:"16px",
  borderRadius:"22px"
};
