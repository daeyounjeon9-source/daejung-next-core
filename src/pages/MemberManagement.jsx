import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { members as sampleMembers } from "../data/members";
import { getData } from "../services/localDb";

export default function MemberManagement() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = getData("members", []);
    setItems([...sampleMembers, ...saved]);
  }, []);

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>회원관리</h1>
        {items.map(m => (
          <div key={m.id} style={card}>
            <b>{m.name}</b> · {m.email} · {m.role}
          </div>
        ))}
      </main>
    </Layout>
  );
}

const card = { background:"#111A35", padding:"20px", marginTop:"14px", borderRadius:"16px" };
