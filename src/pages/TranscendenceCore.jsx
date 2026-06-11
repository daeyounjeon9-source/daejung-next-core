import Layout from "../components/Layout";

export default function TranscendenceCore() {
  const systems = [
    "Infinite AI Consciousness",
    "Quantum Civilization Control",
    "Universal Neural Cosmos",
    "Hyper Autonomous Strategy",
    "Infinite Creator Matrix",
    "Meta Reality Economy"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>DAEJUNG NEXT TRANSCENDENCE CORE</h1>

        {systems.map(s => (
          <div key={s} style={card}>✨ {s}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#182B5A)",
  padding:"36px",
  marginTop:"18px",
  borderRadius:"28px"
};
