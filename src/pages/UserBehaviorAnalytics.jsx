import Layout from "../components/Layout";

export default function UserBehaviorAnalytics() {
  const items = [
    "클릭 패턴 분석",
    "구매 전환 분석",
    "라이브 참여 분석",
    "VIP 행동 분석",
    "이탈 사용자 분석"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>사용자 행동 분석</h1>

        {items.map(i => (
          <div key={i} style={card}>📊 {i}</div>
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
