import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { getList } from "../services/localDb";

export default function AdminNotices() {
  const defaults = [
    { title:"대정넥스트 MVP 준비중", type:"공지", content:"플랫폼 구조가 확장되고 있습니다." },
    { title:"AI 추천 엔진 정상 작동", type:"알림", content:"AI 추천 상태 정상" }
  ];

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([...getList("dn_notices", []), ...defaults]);
  }, []);

  return (
    <AdminLayout>
      <section className="admin-top">
        <div><h1>공지/알림</h1><p>저장된 공지가 이곳에 표시됩니다.</p></div>
      </section>

      <div className="admin-panel">
        {items.map((n, i) => (
          <div className="log-item" key={n.id || i}>[{n.type}] {n.title} - {n.content}</div>
        ))}
      </div>
    </AdminLayout>
  );
}
