import { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { addItem } from "../services/localDb";

export default function AdminProductCreate() {
  const [form, setForm] = useState({ name:"", price:"", category:"AI", status:"판매준비", desc:"" });
  const [saved, setSaved] = useState("");
  const change = (key, value) => setForm({ ...form, [key]: value });

  const save = () => {
    addItem("dn_products", form);
    setSaved("상품이 저장되었습니다.");
    setForm({ name:"", price:"", category:"AI", status:"판매준비", desc:"" });
  };

  return (
    <AdminLayout>
      <section className="admin-top">
        <div><h1>상품 등록</h1><p>입력한 상품이 상품관리 화면에 표시됩니다.</p></div>
        <button className="admin-button" onClick={save}>상품 저장</button>
      </section>

      <div className="admin-panel">
        <div className="form-grid">
          <label><span className="form-label">상품명</span><input className="form-input" value={form.name} onChange={e=>change("name", e.target.value)} /></label>
          <label><span className="form-label">가격</span><input className="form-input" value={form.price} onChange={e=>change("price", e.target.value)} /></label>
          <label><span className="form-label">카테고리</span><select className="form-select" value={form.category} onChange={e=>change("category", e.target.value)}><option>AI</option><option>LIVE</option><option>MEMBERSHIP</option></select></label>
          <label><span className="form-label">상태</span><select className="form-select" value={form.status} onChange={e=>change("status", e.target.value)}><option>판매준비</option><option>판매중</option><option>품절</option></select></label>
          <label className="form-full"><span className="form-label">상품 설명</span><textarea className="form-textarea" value={form.desc} onChange={e=>change("desc", e.target.value)}></textarea></label>
        </div>
        {saved && <div className="log-item">{saved}</div>}
        <div className="preview-box clean-preview">
          <b>입력 확인</b>
          <span>상품명: {form.name || "미입력"}</span>
          <span>가격: {form.price || "미입력"}</span>
          <span>카테고리: {form.category}</span>
          <span>상태: {form.status}</span>
        </div>
      </div>
    </AdminLayout>
  );
}
