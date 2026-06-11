import Layout from "../components/Layout";

export default function UniversalNeuralGrid() {
  const grids = [
    "Infinite Neural Nodes",
    "Global AI Learning",
    "Quantum Neural Sync",
    "Autonomous Brain Mesh"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Universal Neural Grid</h1>

        {grids.map(g => (
          <div key={g} style={card}>🧬 {g}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#17244A)",
  padding:"28px",
  marginTop:"16px",
  borderRadius:"22px"
};
