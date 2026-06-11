import Layout from "../components/Layout";

export default function OmniUniverse() {
  const systems = [
    "Infinite Neural Universe",
    "AI Civilization Grid",
    "Quantum Intelligence Ocean",
    "Omni Strategy Control"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Omni Neural Universe</h1>

        {systems.map(s => (
          <div key={s} style={card}>♾ {s}</div>
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
