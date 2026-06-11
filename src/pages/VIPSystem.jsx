import Layout from "../components/Layout";
import { vipMembers } from "../data/vipMembers";

export default function VIPSystem() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>VIP 회원 시스템</h1>

        {vipMembers.map(v => (
          <div key={v.id} style={card}>
            <h2>{v.name}</h2>
            <p>{v.level}</p>
            <p>{v.benefits}</p>
          </div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#17244A)",
  padding:"24px",
  marginTop:"16px",
  borderRadius:"18px"
};
