import Layout from "../components/Layout";

export default function InfiniteStrategy() {
  const items = [
    "Infinite Market Prediction",
    "AI Autonomous Strategy",
    "Real-Time Global Adjustment",
    "Hyper Optimization"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Infinite Strategy Engine</h1>
        {items.map(i => <div key={i} style={card}>♾ {i}</div>)}
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
