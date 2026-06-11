import Layout from "../components/Layout";
import { orders } from "../data/orders";

export default function OrderManagement() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>주문관리</h1>
        {orders.map(o => (
          <div key={o.id} style={{ background:"#111A35", padding:"20px", marginTop:"14px", borderRadius:"16px" }}>
            <b>주문번호 {o.id}</b> · {o.product} · {o.amount.toLocaleString()}원 · {o.status}
          </div>
        ))}
      </main>
    </Layout>
  );
}
