import Layout from "../components/Layout";

export default function GlobalCommand() {
  const items = [
    "KOREA HQ",
    "USA HQ",
    "EU HQ",
    "ASIA NETWORK",
    "GLOBAL AI NODE"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Global Command Network</h1>
        {items.map(i => <div key={i} style={card}>🛰 {i}</div>)}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"24px",
  marginTop:"14px",
  borderRadius:"18px"
};
