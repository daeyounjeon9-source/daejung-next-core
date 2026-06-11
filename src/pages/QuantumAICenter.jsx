import Layout from "../components/Layout";

export default function QuantumAICenter() {
  const items = [
    "초고속 AI 연산",
    "실시간 전략 계산",
    "초대형 데이터 추론",
    "멀티 AI 동기화"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Quantum AI Center</h1>
        {items.map(i => <div key={i} style={card}>⚛ {i}</div>)}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"24px",
  marginTop:"14px",
  borderRadius:"18px"
};
