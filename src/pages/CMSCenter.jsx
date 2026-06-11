import Layout from "../components/Layout";

export default function CMSCenter() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>CMS 콘텐츠 관리</h1>

        <div style={card}>메인 배너 관리</div>
        <div style={card}>라이브 콘텐츠 관리</div>
        <div style={card}>공지/이벤트 관리</div>
        <div style={card}>AI 추천 콘텐츠 관리</div>
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
