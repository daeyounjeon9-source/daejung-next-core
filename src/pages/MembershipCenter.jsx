import Layout from "../components/Layout";
import { subscriptions } from "../data/subscriptions";

export default function MembershipCenter() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>멤버십/구독</h1>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
          gap:"20px",
          marginTop:"24px"
        }}>
          {subscriptions.map(s => (
            <div key={s.id} style={card}>
              <h2>{s.name}</h2>
              <h3>{s.price.toLocaleString()}원</h3>
              {s.features.map(f => <p key={f}>✓ {f}</p>)}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"24px",
  borderRadius:"18px",
  border:"1px solid #263761"
};
