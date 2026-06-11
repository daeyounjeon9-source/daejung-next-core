import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, validateEmail, validatePhone, validatePassword } from "../context/AuthContext";
import "../styles/mainHome.css";

export default function SellerSignup() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({
    sellerType: "일반 판매자",
    owner: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    businessName: "",
    businessNumber: "",
    commerceNumber: "",
    businessAddress: "",
    businessCategory: "",
    csPhone: "",
    bankName: "",
    accountNumber: "",
    accountHolder: "",
    returnAddress: "",
    documentName: "",
  });
  const [agree, setAgree] = useState({ terms: false, privacy: false, operation: false, settlement: false, aiTrust: false });
  const [notice, setNotice] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passwordReady = validatePassword(form.password);
  const passwordMatch = form.passwordConfirm && form.password === form.passwordConfirm;
  const change = (k, v) => setForm((old) => ({ ...old, [k]: v }));
  const check = (k, v) => setAgree((old) => ({ ...old, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const required = [
      form.sellerType,
      form.owner,
      form.email,
      form.password,
      form.passwordConfirm,
      form.phone,
      form.businessName,
      form.businessNumber,
      form.csPhone,
      form.bankName,
      form.accountNumber,
      form.accountHolder,
    ];
    if (required.some((v) => !String(v || "").trim())) {
      setNotice("판매자 회원가입 필수 입력란을 모두 작성해야 합니다.");
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
    if (!agree.terms || !agree.privacy || !agree.operation || !agree.settlement || !agree.aiTrust) {
      setNotice("필수 동의 5가지를 모두 체크해야 신청할 수 있습니다.");
      return;
    }
    try {
      register({
        email: form.email,
        password: form.password,
        role: "seller",
        name: form.owner.trim(),
        phone: form.phone.trim(),
        sellerType: form.sellerType,
        businessName: form.businessName.trim(),
        businessNumber: form.businessNumber.trim(),
        commerceNumber: form.commerceNumber.trim(),
        businessAddress: form.businessAddress.trim(),
        businessCategory: form.businessCategory.trim(),
        bankName: form.bankName.trim(),
        accountNumber: form.accountNumber.trim(),
        accountHolder: form.accountHolder.trim(),
        returnAddress: form.returnAddress.trim(),
        documentName: form.documentName.trim(),
      });
      navigate("/seller-center", { replace: true });
    } catch (error) {
      setNotice(error.message || "판매자 신청에 실패했습니다.");
    }
  };

  return (
    <main className="dn-auth-page" aria-label="대정넥스트 판매자 회원가입">
      <section className="dn-auth-card dn-auth-wide">
        <button className="dn-auth-back" type="button" onClick={() => navigate("/")}>← 대정넥스트 첫 화면</button>
        <div className="dn-auth-logo">대정넥스트 판매자센터</div>
        <p className="dn-auth-sub">상품 판매 · 라이브 방송 · 브랜드 홍보 · 정산 준비</p>
        <h1>판매자 회원가입</h1>
        <div className="dn-auth-guide dn-glass-policy">
          일반 판매자, 농수산물 생산자, 소상공인, 중소기업, 기업·브랜드 판매자를 위한 가입 공간입니다. 관리자 검수 후 판매 등록센터를 이용할 수 있습니다.
        </div>
        <form className="dn-auth-form dn-auth-grid" onSubmit={submit}>
          <label>판매자 유형
            <select value={form.sellerType} onChange={(e)=>change("sellerType", e.target.value)}>
              <option>일반 판매자</option>
              <option>농수산물 생산자</option>
              <option>소상공인</option>
              <option>중소기업</option>
              <option>기업/브랜드</option>
            </select>
          </label>
          <label>대표자/담당자명<input value={form.owner} onChange={(e)=>change("owner", e.target.value)} placeholder="대표자 또는 담당자" /></label>
          <label>이메일<input value={form.email} onChange={(e)=>change("email", e.target.value)} placeholder="로그인 이메일" /></label>
          <label>휴대폰/연락처<input value={form.phone} onChange={(e)=>change("phone", e.target.value)} placeholder="010-0000-0000" /></label>
          <label>비밀번호<div className="dn-password-row"><input value={form.password} onChange={(e)=>change("password", e.target.value)} type={showPassword ? "text" : "password"} placeholder="영문·숫자·특수문자 포함 8자 이상" /><button type="button" onClick={() => setShowPassword((v) => !v)}>{showPassword ? "숨김" : "보기"}</button></div></label>
          <label>비밀번호 확인<input value={form.passwordConfirm} onChange={(e)=>change("passwordConfirm", e.target.value)} type={showPassword ? "text" : "password"} placeholder="비밀번호 확인" /></label>
          <p className={passwordReady ? "dn-auth-help dn-auth-ok dn-auth-full" : "dn-auth-help dn-auth-full"}>비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요.</p>
          {form.passwordConfirm && <p className={passwordMatch ? "dn-auth-help dn-auth-ok dn-auth-full" : "dn-auth-notice dn-auth-full"}>{passwordMatch ? "비밀번호가 일치합니다." : "비밀번호가 일치하지 않습니다."}</p>}
          <label>상호명/브랜드명<input value={form.businessName} onChange={(e)=>change("businessName", e.target.value)} placeholder="상호명 또는 브랜드명" /></label>
          <label>사업자등록번호<input value={form.businessNumber} onChange={(e)=>change("businessNumber", e.target.value)} placeholder="000-00-00000" /></label>
          <label>통신판매업 신고번호(해당 시)<input value={form.commerceNumber} onChange={(e)=>change("commerceNumber", e.target.value)} placeholder="없으면 비워두세요" /></label>
          <label>사업장 주소<input value={form.businessAddress} onChange={(e)=>change("businessAddress", e.target.value)} placeholder="사업장 소재지" /></label>
          <label>업종/업태<input value={form.businessCategory} onChange={(e)=>change("businessCategory", e.target.value)} placeholder="예: 농수산물, 식품, 생활가전" /></label>
          <label>고객센터 연락처<input value={form.csPhone} onChange={(e)=>change("csPhone", e.target.value)} placeholder="고객센터 전화번호" /></label>
          <label>은행명<input value={form.bankName} onChange={(e)=>change("bankName", e.target.value)} placeholder="은행명" /></label>
          <label>계좌번호<input value={form.accountNumber} onChange={(e)=>change("accountNumber", e.target.value)} placeholder="계좌번호" /></label>
          <label>예금주<input value={form.accountHolder} onChange={(e)=>change("accountHolder", e.target.value)} placeholder="예금주" /></label>
          <label>교환·반품 주소<input value={form.returnAddress} onChange={(e)=>change("returnAddress", e.target.value)} placeholder="교환·반품 수령 주소" /></label>
          <label className="dn-auth-full">사업자등록증 업로드
            <input type="file" accept="image/*,.pdf" onChange={(e)=>change("documentName", e.target.files?.[0]?.name || "")} />
            <span className="dn-auth-help">사진 또는 PDF 파일을 첨부하세요. 현재 테스트에서는 첨부 정보만 저장됩니다.</span>
          </label>
          <div className="dn-auth-agree dn-auth-full">
            <label><input type="checkbox" checked={agree.terms} onChange={(e)=>check("terms", e.target.checked)} /> 서비스 이용약관 동의 (필수)</label>
            <label><input type="checkbox" checked={agree.privacy} onChange={(e)=>check("privacy", e.target.checked)} /> 개인정보 수집 및 이용 동의 (필수)</label>
            <label><input type="checkbox" checked={agree.operation} onChange={(e)=>check("operation", e.target.checked)} /> 상품 판매·홍보 운영원칙 및 오인판매 금지 동의 (필수)</label>
            <label><input type="checkbox" checked={agree.settlement} onChange={(e)=>check("settlement", e.target.checked)} /> 정산·반품·분쟁 처리 기준 동의 (필수)</label>
            <label><input type="checkbox" checked={agree.aiTrust} onChange={(e)=>check("aiTrust", e.target.checked)} /> AI 상품검토·신뢰검증 처리 동의 (필수)</label>
          </div>
          {notice && <p className="dn-auth-notice dn-auth-full">{notice}</p>}
          <button className="dn-auth-primary dn-auth-full" type="submit">판매자 회원가입</button>
        </form>
        <div className="dn-auth-links"><button type="button" onClick={() => navigate("/seller-login")}>판매자 로그인</button><button type="button" onClick={() => navigate("/login")}>일반 로그인</button></div>
      </section>
    </main>
  );
}
