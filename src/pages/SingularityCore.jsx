import Layout from "../components/Layout";

export default function SingularityCore() {
  const systems = [
    "Infinite Intelligence Stream",
    "Universal AI Brain",
    "Quantum Civilization Matrix",
    "Autonomous Creator Economy",
    "Omni Neural Expansion",
    "Galaxy Commerce Grid",
    "Titan Command Sphere"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>DAEJUNG NEXT SINGULARITY CORE</h1>

        {systems.map(s => (
          <div key={s} style={card}>🌠 {s}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#182B5A)",
  padding:"34px",
  marginTop:"18px",
  borderRadius:"26px"
};
