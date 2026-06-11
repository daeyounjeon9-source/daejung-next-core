import Layout from "../components/Layout";

export default function NationSimulation() {
  const nations = [
    "국가 단위 AI 플랫폼",
    "AI 경제 생태계",
    "AI 물류 네트워크",
    "AI 공공 서비스"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>국가 단위 확장 시뮬레이션</h1>
        {nations.map(n => <div key={n} style={card}>🏛 {n}</div>)}
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
