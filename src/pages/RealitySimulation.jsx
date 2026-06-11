import Layout from "../components/Layout";

export default function RealitySimulation() {
  const systems = [
    "AI Civilization Simulation",
    "Quantum Economic Forecast",
    "Infinite Scenario Engine",
    "Meta Reality Testing"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI Reality Simulation</h1>

        {systems.map(s => (
          <div key={s} style={card}>🛰 {s}</div>
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
