import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/mainHome.css";

export default function SellerLogin() {
  const navigate = useNavigate();
  const { authenticate } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const submit = (e) => {
    e.preventDefault();
    try {
      authenticate(email, password, "seller");
      navigate("/seller-center", { replace: true });
    } catch (error) {
      setNotice(error.message || "이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <main className="dn-auth-page seller-auth" aria-label="대정넥스트 판매자 로그인">
      <section className="dn-auth-card">
        <button className="dn-auth-back" type="button" onClick={() => navigate("/")}>← 대정넥스트 첫 화면</button>
        <div className="dn-auth-logo">대정넥스트 판매자센터</div>
        <p className="dn-auth-sub">상품등록 · 홍보등록 · 주문관리 · 정산관리</p>
        <h1>판매자 로그인</h1>
        <form className="dn-auth-form" onSubmit={submit}>
          <label>이메일<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="가입한 판매자 이메일" autoComplete="email" /></label>
          <label>비밀번호<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="비밀번호" autoComplete="current-password" /></label>
          {notice && <p className="dn-auth-notice">{notice}</p>}
          <button className="dn-auth-primary" type="submit">판매자 로그인</button>
        </form>
        <div className="dn-auth-links">
          <button type="button" onClick={() => navigate("/seller-signup")}>판매자 회원가입</button>
          <button type="button" onClick={() => navigate("/login")}>로그인</button>
        </div>
        <div className="dn-auth-policy-grid">
          <article><b>판매·홍보 운영원칙</b><span>허위상품·오인판매는 노출 제한 대상입니다.</span></article>
          <article><b>정산 안내</b><span>주문·배송·반품 확인 후 정산 기준을 적용합니다.</span></article>
        </div>
      </section>
    </main>
  );
}
