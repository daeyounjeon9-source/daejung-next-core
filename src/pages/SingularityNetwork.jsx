import Layout from "../components/Layout";

export default function SingularityNetwork() {
  const nodes = [
    "Infinite AI Synchronization",
    "Quantum Neural Expansion",
    "Global Autonomous Decisions",
    "Omni Intelligence Layer"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Singularity AI Network</h1>

        {nodes.map(n => (
          <div key={n} style={card}>🧠 {n}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"30px",
  marginTop:"16px",
  borderRadius:"24px"
};
