import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/mainHome.css";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { authenticate } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

  const submit = (e) => {
    e.preventDefault();
    try {
      const adminUser = authenticate(email, password, "admin");
      navigate(adminUser?.adminGrade === "ceo" ? "/admin-ceo-office" : "/admin-dashboard", { replace: true });
    } catch (error) {
      setNotice(error.message || "이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <main className="dn-auth-page admin-auth" aria-label="대정넥스트 관리자 로그인">
      <section className="dn-auth-card">
        <button className="dn-auth-back" type="button" onClick={() => navigate("/")}>← 대정넥스트 첫 화면</button>
        <div className="dn-auth-logo">대정넥스트 관리자 운영센터</div>
        <p className="dn-auth-sub">대표이사 · 회장 · 사장 · 간부 · 직원 권한별 접근</p>
        <h1>관리자 로그인</h1>
        <form className="dn-auth-form" onSubmit={submit}>
          <label>관리자 이메일<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="관리자 이메일" autoComplete="email" /></label>
          <label>비밀번호<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="관리자 비밀번호" autoComplete="current-password" /></label>
          {notice && <p className="dn-auth-notice">{notice}</p>}
          <button className="dn-auth-primary" type="submit">관리자 로그인</button>
        </form>
        <div className="dn-auth-links dn-auth-links-minimal">
          <button type="button" onClick={() => navigate("/")}>GOD 6 셀렉션으로 돌아가기</button>
        </div>
        <p className="dn-auth-policy">관리자는 회원가입을 하지 않습니다. 대표이사, 회장 또는 사장 권한자가 운영센터에서 지정한 계정만 접근할 수 있습니다.</p>
        <div className="dn-admin-grade-guide" aria-label="관리자 권한 등급 안내">
          <b>관리자 권한 체계</b>
          <span>대표이사 / CEO · 최고 권한</span>
          <span>회장 / CHAIRMAN · 전체 권한</span>
          <span>사장 / PRESIDENT · 운영 총괄</span>
          <span>간부 / EXECUTIVE · 승인·검수</span>
          <span>직원 / STAFF · 조회·CS</span>
        </div>
      </section>
    </main>
  );
}
