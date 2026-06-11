import Layout from "../components/Layout";
import { dbStatus } from "../services/db";

export default function DBStatus() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>DB 연결 상태</h1>

        <pre style={{
          background:"#111A35",
          padding:"24px",
          borderRadius:"16px",
          border:"1px solid #263761"
        }}>
          {JSON.stringify(dbStatus, null, 2)}
        </pre>

        <p style={{ color:"#B7C4E8" }}>
          다음 단계에서 Firebase 또는 Supabase 실제 키를 연결합니다.
        </p>
      </main>
    </Layout>
  );
}
