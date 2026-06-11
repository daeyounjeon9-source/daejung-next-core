import Layout from "../components/Layout";

export default function Cart() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>장바구니</h1>
        <div style={card}>AI 추천 패키지 · 39,000원</div>
        <div style={card}>프리미엄 멤버십 · 99,000원</div>
        <button style={btn}>주문하기</button>
      </main>
    </Layout>
  );
}

const card = { background:"#111A35", padding:"20px", marginTop:"14px", borderRadius:"16px" };
const btn = { marginTop:"24px", padding:"18px 28px", borderRadius:"14px", cursor:"pointer" };
