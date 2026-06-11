import Layout from "../components/Layout";
import { products } from "../data/products";

export default function Dashboard() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>상업</h1>
        <p>상품, 주문, 매출, 결제, 운영 현황 영역입니다.</p>
        <pre style={{ background:"#111A35", padding:"20px", borderRadius:"16px" }}>
          {JSON.stringify(products, null, 2)}
        </pre>
      </main>
    </Layout>
  );
}
