import Layout from "../components/Layout";

export default function MasterCore() {
  const core = [
    "AI 통합 제어",
    "글로벌 플랫폼 연결",
    "실시간 전략 제어",
    "Neural Core Master",
    "AI 경제 시스템",
    "미래 기술 통합"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>DAEJUNG NEXT MASTER CORE</h1>

        {core.map(c => (
          <div key={c} style={card}>🧠 {c}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#182B5A)",
  padding:"26px",
  marginTop:"16px",
  borderRadius:"20px"
};
