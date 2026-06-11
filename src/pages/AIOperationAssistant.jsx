import Layout from "../components/Layout";

export default function AIOperationAssistant() {
  const tasks = [
    "주문 이상 감지",
    "VIP 고객 자동 응답",
    "환불 위험 감지",
    "실시간 라이브 추천",
    "매출 급등 상품 감시"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI 자동 운영 비서</h1>

        {tasks.map(t => (
          <div key={t} style={card}>🤖 {t}</div>
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
