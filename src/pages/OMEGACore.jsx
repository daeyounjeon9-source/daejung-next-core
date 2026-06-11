import Layout from "../components/Layout";

export default function OMEGACore() {
  const systems = [
    "Infinite Neural Network",
    "Global AI Brain",
    "Autonomous Economy",
    "Meta Commerce Grid",
    "Universal Data Stream",
    "Future Civilization Engine"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>DAEJUNG NEXT OMEGA CORE</h1>

        {systems.map(s => (
          <div key={s} style={card}>♾ {s}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#182B5A)",
  padding:"28px",
  marginTop:"16px",
  borderRadius:"20px"
};
