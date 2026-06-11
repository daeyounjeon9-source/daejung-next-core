import Layout from "../components/Layout";
import { apiModules } from "../data/apiModules";

export default function APIIntegration() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>API 연동 준비</h1>

        {apiModules.map(a => (
          <div key={a} style={card}>{a}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"20px",
  marginTop:"14px",
  borderRadius:"16px"
};
