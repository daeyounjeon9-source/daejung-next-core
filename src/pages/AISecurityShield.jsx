import Layout from "../components/Layout";

export default function AISecurityShield() {
  const items = [
    "AI 침입 감지",
    "AI 보안 분석",
    "실시간 위험 차단",
    "AI 인증 구조"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI Security Shield</h1>
        {items.map(i => <div key={i} style={card}>🛡 {i}</div>)}
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
