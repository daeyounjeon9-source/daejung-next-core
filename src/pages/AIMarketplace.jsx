import Layout from "../components/Layout";

export default function AIMarketplace() {
  const items = [
    "AI 추천 모델",
    "AI 운영 모듈",
    "AI 콘텐츠 생성기",
    "AI 전략 엔진",
    "AI Neural Package"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI 마켓플레이스</h1>
        {items.map(i => <div key={i} style={card}>🛒 {i}</div>)}
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
