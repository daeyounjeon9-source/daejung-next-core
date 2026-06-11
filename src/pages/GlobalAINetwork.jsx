import Layout from "../components/Layout";

export default function GlobalAINetwork() {
  const nodes = [
    "KOREA NODE",
    "USA NODE",
    "JAPAN NODE",
    "EU NODE",
    "SEA NODE"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>글로벌 AI 네트워크</h1>
        {nodes.map(n => <div key={n} style={card}>🌐 {n}</div>)}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"22px",
  marginTop:"14px",
  borderRadius:"18px"
};
