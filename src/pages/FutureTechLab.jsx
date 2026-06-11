import Layout from "../components/Layout";

export default function FutureTechLab() {
  const tech = [
    "초개인화 AI",
    "AI 자율 운영",
    "디지털 휴먼 방송",
    "실시간 감정 분석",
    "AI 경제 생태계"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>미래 기술 연구소</h1>

        {tech.map(t => (
          <div key={t} style={card}>🔬 {t}</div>
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
