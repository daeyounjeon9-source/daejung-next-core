import Layout from "../components/Layout";

export default function UniversalBrain() {
  const systems = [
    "Global AI Memory",
    "Infinite Neural Learning",
    "Autonomous Decision Network",
    "Quantum Reasoning"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Universal AI Brain</h1>
        {systems.map(s => <div key={s} style={card}>🧠 {s}</div>)}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#182B5A)",
  padding:"26px",
  marginTop:"14px",
  borderRadius:"20px"
};
