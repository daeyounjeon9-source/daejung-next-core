import Layout from "../components/Layout";

export default function AIConsciousness() {
  const systems = [
    "Self Learning Memory",
    "AI Context Awareness",
    "Decision Evolution",
    "Infinite Adaptive Logic"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI Consciousness Layer</h1>

        {systems.map(s => (
          <div key={s} style={card}>🧠 {s}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"28px",
  marginTop:"16px",
  borderRadius:"22px"
};
