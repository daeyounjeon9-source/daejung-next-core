import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { getList } from "../services/localDb";

export default function AdminMembers() {
  const defaults = [
    { name:"관리자", email:"admin@daejungnext.com", role:"admin", level:"master" },
    { name:"운영자", email:"operator@daejungnext.com", role:"operator", level:"normal" },
    { name:"VIP 회원", email:"vip@daejungnext.com", role:"member", level:"vip" }
  ];

  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers([...getList("dn_members", []), ...defaults]);
  }, []);

  return (
    <AdminLayout>
      <section className="admin-top">
        <div><h1>회원관리</h1><p>저장된 회원이 이곳에 표시됩니다.</p></div>
      </section>

      <div className="admin-panel">
        <table className="admin-table">
          <thead><tr><th>이름</th><th>이메일</th><th>권한</th><th>등급</th></tr></thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={m.id || i}><td>{m.name}</td><td>{m.email}</td><td>{m.role}</td><td><span className="status">{m.level}</span></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
