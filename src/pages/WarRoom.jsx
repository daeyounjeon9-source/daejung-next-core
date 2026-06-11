import Layout from "../components/Layout";

export default function WarRoom() {
  const systems = [
    "시장 점유율 분석",
    "경쟁 플랫폼 분석",
    "AI 전략 변경",
    "실시간 글로벌 데이터",
    "리스크 대응 전략"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>플랫폼 전쟁 상황실</h1>
        {systems.map(s => <div key={s} style={card}>⚔ {s}</div>)}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#182B5A)",
  padding:"24px",
  marginTop:"14px",
  borderRadius:"18px"
};
