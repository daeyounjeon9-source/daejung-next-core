import Layout from "../components/Layout";
import { coinLedger } from "../data/coinLedger";

export default function CoinSystem() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>코인/포인트 시스템</h1>
        {coinLedger.map(c => (
          <div key={c.id} style={card}>
            {c.user} · {c.type} · {c.amount.toLocaleString()}P · {c.reason}
          </div>
        ))}
      </main>
    </Layout>
  );
}

const card = { background:"#111A35", padding:"20px", marginTop:"14px", borderRadius:"16px" };
