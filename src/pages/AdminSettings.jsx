import Layout from "../components/Layout";

export default function AdminSettings() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>관리자 설정</h1>

        <div style={{
          display:"grid",
          gap:"20px",
          marginTop:"24px",
          maxWidth:"700px"
        }}>
          <div style={card}>🌙 다크모드 설정</div>
          <div style={card}>🔐 보안 설정</div>
          <div style={card}>☁ Cloudflare 설정</div>
          <div style={card}>🔥 Firebase 연결 준비</div>
          <div style={card}>🤖 AI 엔진 설정</div>
        </div>
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#17244A)",
  padding:"24px",
  borderRadius:"18px",
  border:"1px solid #263761"
};
