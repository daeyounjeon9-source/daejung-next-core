import Layout from "../components/Layout";

export default function TrafficMonitor() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>실시간 트래픽 모니터링</h1>

        <div style={card}>현재 접속자: 4,281명</div>
        <div style={card}>실시간 방송 접속: 1,022명</div>
        <div style={card}>AI 요청 수: 28,441</div>
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
