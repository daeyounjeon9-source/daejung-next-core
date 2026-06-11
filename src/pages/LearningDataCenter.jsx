import Layout from "../components/Layout";

export default function LearningDataCenter() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI 학습 데이터 센터</h1>

        <div style={card}>고객 행동 데이터</div>
        <div style={card}>라이브 시청 데이터</div>
        <div style={card}>AI 추천 성능 데이터</div>
        <div style={card}>운영 판단 데이터</div>
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
