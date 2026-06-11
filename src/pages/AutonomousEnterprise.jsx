import Layout from "../components/Layout";

export default function AutonomousEnterprise() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Autonomous Enterprise</h1>

        <div style={card}>AI 경영 자동화</div>
        <div style={card}>AI 전략 의사결정</div>
        <div style={card}>AI 리스크 제어</div>
        <div style={card}>AI 글로벌 운영</div>
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
