import Layout from "../components/Layout";

export default function AIRiskCenter() {
  const risks = [
    "비정상 결제 탐지",
    "반복 환불 사용자 탐지",
    "라이브 악성 행위 감시",
    "정부지원 리스크 감시",
    "세무 이상 패턴 탐지"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI 리스크 감시 센터</h1>

        {risks.map(r => (
          <div key={r} style={card}>⚠ {r}</div>
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
