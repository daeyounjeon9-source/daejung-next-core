import Layout from "../components/Layout";

export default function HyperDimensional() {
  const systems = [
    "Quantum Neural Routing",
    "Infinite Network Expansion",
    "Universal Sync Layer",
    "Hyper Cosmos Transmission"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Hyper Dimensional Network</h1>

        {systems.map(s => (
          <div key={s} style={card}>📡 {s}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#17244A)",
  padding:"34px",
  marginTop:"16px",
  borderRadius:"26px"
};
