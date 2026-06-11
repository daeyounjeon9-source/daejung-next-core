import Layout from "../components/Layout";

export default function NoticeBoard() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>공지사항</h1>
        <div style={card}>대정 넥스트 플랫폼 준비 중</div>
        <div style={card}>AI · 쇼핑 · 라이브 · 관리자 구조 확장 완료</div>
      </main>
    </Layout>
  );
}

const card = { background:"#111A35", padding:"20px", marginTop:"14px", borderRadius:"16px" };
