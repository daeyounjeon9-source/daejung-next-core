import Layout from "../components/Layout";

export default function StrategyEngine() {
  const strategies = [
    "실시간 가격 전략",
    "광고 전략",
    "라이브 전략",
    "AI 추천 전략",
    "글로벌 확장 전략"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>실시간 전략 엔진</h1>
        {strategies.map(s => <div key={s} style={card}>📡 {s}</div>)}
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
