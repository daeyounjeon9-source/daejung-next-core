import { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { addItem } from "../services/localDb";

export default function AdminMemberCreate() {
  const [form, setForm] = useState({ name:"", email:"", role:"member", level:"normal" });
  const [saved, setSaved] = useState("");
  const change = (key, value) => setForm({ ...form, [key]: value });

  const save = () => {
    addItem("dn_members", form);
    setSaved("회원이 저장되었습니다.");
    setForm({ name:"", email:"", role:"member", level:"normal" });
  };

  return (
    <AdminLayout>
      <section className="admin-top">
        <div><h1>회원 추가</h1><p>입력한 회원이 회원관리 화면에 표시됩니다.</p></div>
        <button className="admin-button" onClick={save}>회원 저장</button>
      </section>

      <div className="admin-panel">
        <div className="form-grid">
          <label><span className="form-label">이름</span><input className="form-input" value={form.name} onChange={e=>change("name", e.target.value)} /></label>
          <label><span className="form-label">이메일</span><input className="form-input" value={form.email} onChange={e=>change("email", e.target.value)} /></label>
          <label><span className="form-label">권한</span><select className="form-select" value={form.role} onChange={e=>change("role", e.target.value)}><option>member</option><option>operator</option><option>admin</option></select></label>
          <label><span className="form-label">등급</span><select className="form-select" value={form.level} onChange={e=>change("level", e.target.value)}><option>normal</option><option>vip</option><option>platinum</option></select></label>
        </div>
        {saved && <div className="log-item">{saved}</div>}
        <div className="preview-box clean-preview">
          <b>입력 확인</b>
          <span>이름: {form.name || "미입력"}</span>
          <span>이메일: {form.email || "미입력"}</span>
          <span>구분: {form.role}</span>
          <span>등급: {form.level}</span>
        </div>
      </div>
    </AdminLayout>
  );
}
