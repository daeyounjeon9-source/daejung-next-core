import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

export default function AuthStatus() {
  const { user, isLoggedIn } = useAuth();

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>로그인 상태</h1>
        <pre style={{
          background:"#111A35",
          padding:"24px",
          borderRadius:"16px"
        }}>
          {JSON.stringify({ isLoggedIn, user }, null, 2)}
        </pre>
      </main>
    </Layout>
  );
}
