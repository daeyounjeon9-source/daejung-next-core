import Layout from "../components/Layout";
import { notifications } from "../data/notifications";

export default function NotificationCenter() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>실시간 알림센터</h1>

        {notifications.map(n => (
          <div key={n.id} style={card}>
            <strong>{n.type.toUpperCase()}</strong>
            <p>{n.message}</p>
          </div>
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
