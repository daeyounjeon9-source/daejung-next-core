import Layout from "../components/Layout";

export default function InfinityCommerce() {
  const systems = [
    "Global Infinite Market",
    "Autonomous AI Shopping",
    "Quantum Commerce Grid",
    "Meta Universe Trading"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Infinity Commerce Empire</h1>

        {systems.map(s => (
          <div key={s} style={card}>🛒 {s}</div>
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
