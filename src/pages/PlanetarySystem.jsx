import Layout from "../components/Layout";

export default function PlanetarySystem() {
  const systems = [
    "Planetary AI Economy",
    "Global Logistics AI",
    "AI Resource Allocation",
    "Autonomous Civilization Control"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Autonomous Planetary System</h1>

        {systems.map(s => (
          <div key={s} style={card}>🪐 {s}</div>
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
