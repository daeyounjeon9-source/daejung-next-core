import { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { addItem } from "../services/localDb";

export default function AdminNoticeCreate() {
  const [form, setForm] = useState({ title:"", type:"공지", content:"" });
  const [saved, setSaved] = useState("");
  const change = (key, value) => setForm({ ...form, [key]: value });

  const save = () => {
    addItem("dn_notices", form);
    setSaved("공지/알림이 저장되었습니다.");
    setForm({ title:"", type:"공지", content:"" });
  };

  return (
    <AdminLayout>
      <section className="admin-top">
        <div><h1>공지 작성</h1><p>입력한 공지가 공지/알림 화면에 표시됩니다.</p></div>
        <button className="admin-button" onClick={save}>공지 저장</button>
      </section>

      <div className="admin-panel">
        <div className="form-grid">
          <label><span className="form-label">제목</span><input className="form-input" value={form.title} onChange={e=>change("title", e.target.value)} /></label>
          <label><span className="form-label">유형</span><select className="form-select" value={form.type} onChange={e=>change("type", e.target.value)}><option>공지</option><option>이벤트</option><option>긴급</option></select></label>
          <label className="form-full"><span className="form-label">내용</span><textarea className="form-textarea" value={form.content} onChange={e=>change("content", e.target.value)}></textarea></label>
        </div>
        {saved && <div className="log-item">{saved}</div>}
        <div className="preview-box clean-preview">
          <b>공지 확인</b>
          <span>제목: {form.title || "미입력"}</span>
          <span>유형: {form.type}</span>
          <span>내용: {form.content ? "입력 완료" : "미입력"}</span>
        </div>
      </div>
    </AdminLayout>
  );
}
