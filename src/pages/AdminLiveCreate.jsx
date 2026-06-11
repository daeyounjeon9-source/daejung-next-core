import { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { addItem } from "../services/localDb";

export default function AdminLiveCreate() {
  const [form, setForm] = useState({ title:"", host:"관리자", time:"20:00", product:"AI 추천 패키지", status:"예약" });
  const [saved, setSaved] = useState("");
  const change = (key, value) => setForm({ ...form, [key]: value });

  const save = () => {
    addItem("dn_lives", form);
    setSaved("라이브 방송이 저장되었습니다.");
    setForm({ title:"", host:"관리자", time:"20:00", product:"AI 추천 패키지", status:"예약" });
  };

  return (
    <AdminLayout>
      <section className="admin-top">
        <div><h1>라이브 방송 생성</h1><p>입력한 방송이 라이브관리 화면에 표시됩니다.</p></div>
        <button className="admin-button" onClick={save}>방송 저장</button>
      </section>

      <div className="admin-panel">
        <div className="form-grid">
          <label><span className="form-label">방송 제목</span><input className="form-input" value={form.title} onChange={e=>change("title", e.target.value)} /></label>
          <label><span className="form-label">진행자</span><input className="form-input" value={form.host} onChange={e=>change("host", e.target.value)} /></label>
          <label><span className="form-label">시간</span><input className="form-input" value={form.time} onChange={e=>change("time", e.target.value)} /></label>
          <label><span className="form-label">연결 상품</span><input className="form-input" value={form.product} onChange={e=>change("product", e.target.value)} /></label>
          <label><span className="form-label">상태</span><select className="form-select" value={form.status} onChange={e=>change("status", e.target.value)}><option>예약</option><option>진행중</option><option>종료</option></select></label>
        </div>
        {saved && <div className="log-item">{saved}</div>}
        <div className="preview-box clean-preview">
          <b>방송 확인</b>
          <span>제목: {form.title || "미입력"}</span>
          <span>진행자: {form.host || "미입력"}</span>
          <span>시간: {form.time}</span>
          <span>상태: {form.status}</span>
        </div>
      </div>
    </AdminLayout>
  );
}
