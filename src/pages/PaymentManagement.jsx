import Layout from "../components/Layout";
import { payments } from "../data/payments";

export default function PaymentManagement() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>결제관리</h1>
        {payments.map(p => (
          <div key={p.id} style={{ background:"#111A35", padding:"20px", marginTop:"14px", borderRadius:"16px" }}>
            <b>{p.method}</b> · {p.amount.toLocaleString()}원 · {p.status}
          </div>
        ))}
      </main>
    </Layout>
  );
}
