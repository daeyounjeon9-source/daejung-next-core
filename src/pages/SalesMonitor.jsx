import Layout from "../components/Layout";

export default function SalesMonitor() {
  const stats = [
    ["실시간 매출", "₩4,280,000"],
    ["실시간 주문", "132건"],
    ["AI 추천 전환율", "38%"],
    ["라이브 방송 매출", "₩1,820,000"]
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>실시간 매출 모니터링</h1>

        <div style={grid}>
          {stats.map(([label, value]) => (
            <div key={label} style={card}>
              <h2>{label}</h2>
              <h1>{value}</h1>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

const grid = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
  gap:"20px",
  marginTop:"24px"
};

const card = {
  background:"linear-gradient(135deg,#111A35,#182B5A)",
  padding:"26px",
  borderRadius:"20px"
};
