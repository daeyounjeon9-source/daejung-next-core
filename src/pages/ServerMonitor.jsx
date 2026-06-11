import Layout from "../components/Layout";

export default function ServerMonitor() {
  const items = [
    "API 서버 정상",
    "AI 서버 정상",
    "라이브 서버 정상",
    "DB 연결 준비",
    "Cloudflare 상태 정상"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>서버 상태 모니터링</h1>

        {items.map(i => (
          <div key={i} style={card}>🖥 {i}</div>
        ))}
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
