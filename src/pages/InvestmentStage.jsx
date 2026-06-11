import Layout from "../components/Layout";

export default function InvestmentStage() {
  const stages = [
    "엔젤 투자",
    "시드 투자",
    "Series A",
    "Series B",
    "전략적 투자"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>투자 단계 관리</h1>

        {stages.map(s => (
          <div key={s} style={card}>💼 {s}</div>
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
