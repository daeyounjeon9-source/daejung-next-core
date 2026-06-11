import Layout from "../components/Layout";
import { streams } from "../data/streams";

export default function LiveCommerce() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>스트리밍</h1>
        <p>라이브커머스, 방송, 영상 판매 연결 영역입니다.</p>
        <pre style={{ background:"#111A35", padding:"20px", borderRadius:"16px" }}>
          {JSON.stringify(streams, null, 2)}
        </pre>
      </main>
    </Layout>
  );
}
