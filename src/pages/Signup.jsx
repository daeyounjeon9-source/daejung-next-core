import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, validateEmail, validatePhone, validatePassword } from "../context/AuthContext";
import "../styles/mainHome.css";

export default function Signup() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", passwordConfirm: "" });
  const [agreements, setAgreements] = useState({ terms: false, privacy: false, aiTrust: false, commerce: false });
  const [notice, setNotice] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passwordReady = validatePassword(form.password);
  const passwordMatch = form.passwordConfirm && form.password === form.passwordConfirm;

  const updateForm = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const updateAgreement = (key, value) => setAgreements((prev) => ({ ...prev, [key]: value }));

  const submitSignup = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.password.trim() || !form.passwordConfirm.trim()) {
      setNotice("필수 입력란을 모두 작성해야 합니다.");
      return;
    }
    if (!validateEmail(form.email)) {
      setNotice("이메일 형식이 올바르지 않습니다.");
      return;
    }
    if (!validatePhone(form.phone)) {
      setNotice("휴대폰번호 형식이 올바르지 않습니다. 예: 010-1234-5678");
      return;
    }
    if (!validatePassword(form.password)) {
      setNotice("비밀번호는 8자리 이상, 영문·숫자·특수문자를 포함해야 합니다.");
      return;
    }
    if (form.password !== form.passwordConfirm) {
      setNotice("비밀번호와 비밀번호 확인이 다릅니다.");
      return;
    }
    if (!agreements.terms || !agreements.privacy || !agreements.aiTrust || !agreements.commerce) {
      setNotice("필수 동의 4가지를 모두 체크해야 가입할 수 있습니다.");
      return;
    }
    try {
      register({ email: form.email, password: form.password, role: "member", name: form.name.trim(), phone: form.phone.trim() });
      navigate("/", { replace: true });
    } catch (error) {
      setNotice(error.message || "회원가입에 실패했습니다.");
    }
  };

  return (
    <main className="dn-auth-page" aria-label="대정넥스트 회원가입" translate="no">
      <section className="dn-auth-card">
        <button className="dn-auth-back" type="button" onClick={() => navigate("/")}>← 대정넥스트 첫 화면</button>
        <div className="dn-auth-logo">대정넥스트</div>
        <p className="dn-auth-sub">AI 라이브 · 상품비교 · 신뢰검증</p>
        <h1>회원가입</h1>
        <div className="dn-auth-guide">
          개인정보는 서비스 운영·보호 목적에 한정하며, 동의 없이 AI 학습·외부 판매·제3자 마케팅에 사용하지 않습니다.
        </div>
        <form className="dn-auth-form" onSubmit={submitSignup}>
          <label>이름<input value={form.name} onChange={(e) => updateForm("name", e.target.value)} placeholder="이름" autoComplete="name" /></label>
          <label>이메일<input value={form.email} onChange={(e) => updateForm("email", e.target.value)} placeholder="이메일" autoComplete="email" /></label>
          <label>휴대폰 번호<input value={form.phone} onChange={(e) => updateForm("phone", e.target.value)} placeholder="010-0000-0000" autoComplete="tel" /></label>
          <label><span translate="no">비밀번호</span><div className="dn-password-row"><input value={form.password} onChange={(e) => updateForm("password", e.target.value)} type={showPassword ? "text" : "password"} placeholder="영문·숫자·특수문자 포함 8자 이상" autoComplete="new-password" /><button type="button" onClick={() => setShowPassword((v) => !v)}>{showPassword ? "숨김" : "보기"}</button></div></label>
          <p className={passwordReady ? "dn-auth-help dn-auth-ok" : "dn-auth-help"}>비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요.</p>
          <label><span translate="no">비밀번호 확인</span><input value={form.passwordConfirm} onChange={(e) => updateForm("passwordConfirm", e.target.value)} type={showPassword ? "text" : "password"} placeholder="비밀번호 확인" autoComplete="new-password" /></label>
          {form.passwordConfirm && <p className={passwordMatch ? "dn-auth-help dn-auth-ok" : "dn-auth-notice"}>{passwordMatch ? "비밀번호가 일치합니다." : "비밀번호가 일치하지 않습니다."}</p>}
          <div className="dn-auth-agree">
            <label><input type="checkbox" checked={agreements.terms} onChange={(e) => updateAgreement("terms", e.target.checked)} /> 서비스 이용약관 필수 동의</label>
            <label><input type="checkbox" checked={agreements.privacy} onChange={(e) => updateAgreement("privacy", e.target.checked)} /> 개인정보 수집·이용 필수 동의</label>
            <label><input type="checkbox" checked={agreements.aiTrust} onChange={(e) => updateAgreement("aiTrust", e.target.checked)} /> AI 신뢰검토 및 부정거래 방지 처리 동의</label>
            <label><input type="checkbox" checked={agreements.commerce} onChange={(e) => updateAgreement("commerce", e.target.checked)} /> 주문·배송·반품·분쟁처리 고지 확인</label>
          </div>
          {notice && <p className="dn-auth-notice">{notice}</p>}
          <button className="dn-auth-primary" type="submit">회원가입</button>
        </form>
        <div className="dn-auth-links">
          <button type="button" onClick={() => navigate("/login")}>로그인</button>
        </div>
      </section>
    </main>
  );
}
