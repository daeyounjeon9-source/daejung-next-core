import Layout from "../components/Layout";

export default function EnterpriseDashboard() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>기업/기관 전용 대시보드</h1>

        <div style={card}>대량 회원 분석</div>
        <div style={card}>AI 추천 통계</div>
        <div style={card}>기관 전용 라이브</div>
        <div style={card}>기업 API 연동</div>
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"20px",
  marginTop:"14px",
  borderRadius:"16px"
};
