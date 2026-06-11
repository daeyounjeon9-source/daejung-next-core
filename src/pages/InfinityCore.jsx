import Layout from "../components/Layout";

export default function InfinityCore() {
  const core = [
    "Universal Neural Intelligence",
    "Infinite Commerce Grid",
    "Autonomous Civilization Engine",
    "Quantum Decision Matrix",
    "Meta Planetary Economy",
    "Galaxy Intelligence Web",
    "Infinity Creator Universe"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>DAEJUNG NEXT INFINITY CORE</h1>

        {core.map(c => (
          <div key={c} style={card}>🌌 {c}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#182B5A)",
  padding:"32px",
  marginTop:"18px",
  borderRadius:"24px"
};
