import Layout from "../components/Layout";

export default function TitanCommand() {
  const commands = [
    "Neural Command Layer",
    "Global AI Coordination",
    "Planetary Resource Grid",
    "Hyper Decision Network"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Titan Neural Command</h1>

        {commands.map(c => (
          <div key={c} style={card}>🛰 {c}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#17244A)",
  padding:"28px",
  marginTop:"16px",
  borderRadius:"22px"
};
