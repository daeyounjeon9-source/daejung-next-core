import Layout from "../components/Layout";
import { aiData } from "../data/aiData";

export default function AIStats() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI 통계</h1>
        {aiData.map(a => (
          <div key={a.id} style={{ background:"#111A35", padding:"20px", marginTop:"14px", borderRadius:"16px" }}>
            <b>{a.name}</b> · {a.status}
          </div>
        ))}
      </main>
    </Layout>
  );
}
