import Layout from "../components/Layout";
import { aiData } from "../data/aiData";

export default function AIAnalytics() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI 두뇌</h1>
        <p>AI 분석, 판단, 추천, 자동화 엔진 영역입니다.</p>
        <pre style={{ background:"#111A35", padding:"20px", borderRadius:"16px" }}>
          {JSON.stringify(aiData, null, 2)}
        </pre>
      </main>
    </Layout>
  );
}
