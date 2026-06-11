import Layout from "../components/Layout";

export default function ProductDetail() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>상품 상세</h1>
        <div style={box}>
          <h2>AI 추천 패키지</h2>
          <p>AI가 고객 행동을 분석하여 상품 추천과 판매 전환을 돕는 패키지입니다.</p>
          <button style={btn}>장바구니 담기</button>
          <button style={btn}>바로 주문</button>
        </div>
      </main>
    </Layout>
  );
}

const box = { background:"#111A35", padding:"30px", borderRadius:"22px", maxWidth:"700px" };
const btn = { padding:"16px 22px", borderRadius:"14px", marginRight:"12px", cursor:"pointer" };
