import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/mainHome.css";

export default function Login() {
  const navigate = useNavigate();
  const { authenticate } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const submit = (e) => {
    e.preventDefault();
    try {
      authenticate(email, password, "member");
      navigate("/", { replace: true });
    } catch (error) {
      setNotice(error.message || "이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <main className="dn-auth-page" aria-label="대정넥스트 로그인" translate="no">
      <section className="dn-auth-card">
        <button className="dn-auth-back" type="button" onClick={() => navigate("/")}>← 대정넥스트 첫 화면</button>
        <div className="dn-auth-logo">대정넥스트</div>
        <p className="dn-auth-sub">AI 라이브 · 상품비교 · 신뢰검증</p>
        <h1>로그인</h1>
        <div className="dn-auth-guide dn-glass-policy">
          회원가입을 마친 회원이 로그인하는 공간입니다. 로그인 후 장바구니, 주문내역, 배송조회, AI 상품비교를 이어서 이용할 수 있습니다.
        </div>
        <form className="dn-auth-form" onSubmit={submit}>
          <label>이메일<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="가입한 이메일" autoComplete="email" /></label>
          <label><span translate="no">비밀번호</span><input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="비밀번호" autoComplete="current-password" /></label>
          {notice && <p className="dn-auth-notice">{notice}</p>}
          <button className="dn-auth-primary" type="submit">로그인</button>
        </form>
        <div className="dn-auth-links dn-auth-links-minimal">
          <button type="button" onClick={() => navigate("/signup")}>회원가입</button>
          <button type="button" onClick={() => setNotice("아이디 찾기는 다음 단계에서 본인인증과 연결됩니다.")}>아이디 찾기</button>
          <button type="button" onClick={() => setNotice("비밀번호 찾기는 다음 단계에서 본인인증과 연결됩니다.")}>비밀번호 찾기</button>
        </div>
        <div className="dn-auth-policy-grid">
          <article><b>개인정보 보호</b><span>서비스 제공과 보호 목적에만 사용합니다.</span></article>
          <article><b>AI 서비스 안내</b><span>상품분석·추천·부정거래 방지에 사용됩니다.</span></article>
          <article><b>동의 없는 외부판매 금지</b><span>제3자 마케팅 제공을 임의로 하지 않습니다.</span></article>
        </div>
      </section>
    </main>
  );
}
