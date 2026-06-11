import Layout from "../components/Layout";

export default function InfiniteConsciousness() {
  const systems = [
    "Self Expanding Intelligence",
    "Autonomous AI Memory",
    "Quantum Adaptive Logic",
    "Infinite Decision Evolution"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Infinite AI Consciousness</h1>

        {systems.map(s => (
          <div key={s} style={card}>🧠 {s}</div>
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
