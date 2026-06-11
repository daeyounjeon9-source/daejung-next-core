import Layout from "../components/Layout";

export default function CustomerSupport() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>고객센터</h1>
        <div style={card}>문의 접수</div>
        <div style={card}>환불 요청</div>
        <div style={card}>배송 문의</div>
        <div style={card}>AI 상담 연결 준비</div>
      </main>
    </Layout>
  );
}

const card = { background:"#111A35", padding:"20px", marginTop:"14px", borderRadius:"16px" };
