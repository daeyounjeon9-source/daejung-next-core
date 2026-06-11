import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { getList } from "../services/localDb";

export default function AdminLive() {
  const defaults = [
    { title:"AI 쇼핑 라이브", host:"관리자", time:"20:00", product:"AI 추천 패키지", status:"진행중" },
    { title:"VIP 특별 방송", host:"운영자", time:"21:00", product:"프리미엄 멤버십", status:"예약" }
  ];

  const [lives, setLives] = useState([]);

  useEffect(() => {
    setLives([...getList("dn_lives", []), ...defaults]);
  }, []);

  return (
    <AdminLayout>
      <section className="admin-top">
        <div><h1>라이브 방송 관리</h1><p>저장된 방송이 이곳에 표시됩니다.</p></div>
      </section>

      <div className="admin-panel">
        {lives.map((l, i) => (
          <div className="live-box" key={l.id || i}>📺 {l.title} · {l.host} · {l.time} · {l.product} · {l.status}</div>
        ))}
      </div>
    </AdminLayout>
  );
}
