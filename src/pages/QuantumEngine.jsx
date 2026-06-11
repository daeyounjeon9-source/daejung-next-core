import Layout from "../components/Layout";

export default function QuantumEngine() {
  const engines = [
    "Quantum Simulation",
    "Hyper-Speed Decision",
    "Infinite Strategy Loop",
    "AI Autonomous Optimization"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Infinite Quantum Engine</h1>

        {engines.map(e => (
          <div key={e} style={card}>⚛ {e}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#182B5A)",
  padding:"28px",
  marginTop:"16px",
  borderRadius:"22px"
};
