import Layout from "../components/Layout";

export default function HyperNetwork() {
  const items = [
    "Global AI Nodes",
    "Quantum Data Transfer",
    "Autonomous Network Sync",
    "Infinite Cloud Grid"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Hyper Network</h1>
        {items.map(i => <div key={i} style={card}>📡 {i}</div>)}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"26px",
  marginTop:"14px",
  borderRadius:"20px"
};
