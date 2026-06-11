import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/mainHome.css";

const gradeSteps = [
  { key: "basic", label: "일반회원", need: "가입 완료", benefit: "기본 구매, 장바구니, AI 상품비교 이용" },
  { key: "special", label: "특별회원", need: "누적 구매 3회 또는 구매금액 30만원 이상", benefit: "특별관 우선 알림, 행사 쿠폰, 신뢰상품 추천" },
  { key: "vip", label: "VIP", need: "누적 구매 10회 또는 구매금액 100만원 이상", benefit: "VIP 전용 혜택, 우선 상담, 프리미엄 추천" },
];

function getMemberGrade(user) {
  const orderCount = Number(user?.orderCount || 0);
  const totalPurchase = Number(user?.totalPurchase || 0);
  if (orderCount >= 10 || totalPurchase >= 1000000 || user?.memberGrade === "vip") return "vip";
  if (orderCount >= 3 || totalPurchase >= 300000 || user?.memberGrade === "special") return "special";
  return "basic";
}

function money(value) {
  return `${Number(value || 0).toLocaleString("ko-KR")}원`;
}

export default function MyPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [openSection, setOpenSection] = useState("orders");
  const sectionRefs = {
    orders: useRef(null),
    shopping: useRef(null),
    ai: useRef(null),
    grade: useRef(null),
    account: useRef(null),
  };

  const gradeKey = getMemberGrade(user);
  const currentIndex = gradeSteps.findIndex((item) => item.key === gradeKey);
  const currentGrade = gradeSteps[currentIndex] || gradeSteps[0];
  const nextGrade = gradeSteps[currentIndex + 1];

  const orderCount = Number(user?.orderCount || 0);
  const totalPurchase = Number(user?.totalPurchase || 0);
  const points = Number(user?.points || 0);
  const couponCount = Number(user?.couponCount || 0);
  const cartCount = Number(user?.cartCount || 0);
  const wishCount = Number(user?.wishCount || 0);

  const progress = useMemo(() => {
    if (gradeKey === "vip") return 100;
    if (gradeKey === "special") {
      return Math.min(99, Math.max(Math.round((orderCount / 10) * 100), Math.round((totalPurchase / 1000000) * 100), 35));
    }
    return Math.min(99, Math.max(Math.round((orderCount / 3) * 100), Math.round((totalPurchase / 300000) * 100), 12));
  }, [gradeKey, orderCount, totalPurchase]);

  const toggle = (key) => setOpenSection((prev) => (prev === key ? "" : key));
  const jumpToSection = (key) => {
    setOpenSection(key);
    window.setTimeout(() => {
      sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };
  const goHome = () => navigate("/");

  const Section = ({ id, icon, title, summary, children }) => {
    const opened = openSection === id;
    return (
      <section ref={sectionRefs[id]} className={`dn-my-v2-section ${opened ? "is-open" : ""}`}>
        <button type="button" className="dn-my-v2-section-head" onClick={() => toggle(id)} aria-expanded={opened}>
          <span className="dn-my-v2-section-icon" aria-hidden="true">{icon}</span>
          <span className="dn-my-v2-section-text">
            <b>{title}</b>
            <small>{summary}</small>
          </span>
          <em>{opened ? "▲" : "▼"}</em>
        </button>
        {opened && <div className="dn-my-v2-section-body">{children}</div>}
      </section>
    );
  };

  const MenuButton = ({ label, value, danger, onClick }) => (
    <button type="button" className={danger ? "danger-menu" : ""} onClick={onClick || (() => alert(`${label} 기능은 다음 DB 연결 단계에서 실데이터로 표시됩니다.`))}>
      <span>{label}</span>
      {value !== undefined && <strong>{value}</strong>}
    </button>
  );

  return (
    <main className="dn-mypage dn-mypage-v2" aria-label="대정넥스트 마이페이지" translate="no">
      <section className="dn-my-v2-hero">
        <button className="dn-auth-back" type="button" onClick={goHome}>← 첫 화면</button>
        <div>
          <p className="dn-mypage-kicker">DAEJUNG NEXT MY</p>
          <h1>마이페이지</h1>
          <p>내 등급, 주문, 혜택, AI 구매결정 기록을 한눈에 확인합니다.</p>
        </div>
      </section>

      <section className="dn-my-v2-profile">
        <div className="dn-my-v2-userline">
          <div className="dn-my-v2-avatar">👤</div>
          <div>
            <b>{user?.name || "회원"}</b>
            <span>{user?.email || "로그인 회원"}</span>
          </div>
        </div>
        <div className="dn-my-v2-phone">휴대폰 {user?.phone || "-"}</div>
      </section>

      <section className="dn-my-v2-row-grid" aria-label="회원등급 요약">
        <button type="button" className="is-active" onClick={() => jumpToSection("grade")}><small>현재등급</small><b>{currentGrade.label}</b></button>
        <button type="button" onClick={() => jumpToSection("grade")}><small>{nextGrade ? `${nextGrade.label}까지` : "최고등급"}</small><b>{progress}%</b></button>
        <button type="button" onClick={() => jumpToSection("grade")}><small>목표등급</small><b>VIP</b></button>
      </section>

      <section className="dn-my-v2-row-grid" aria-label="혜택 요약">
        <button type="button" onClick={() => jumpToSection("grade")}><small>포인트</small><b>{points.toLocaleString("ko-KR")}P</b></button>
        <button type="button" onClick={() => jumpToSection("account")}><small>쿠폰</small><b>{couponCount}장</b></button>
        <button type="button" onClick={() => jumpToSection("shopping")}><small>장바구니</small><b>{cartCount}개</b></button>
      </section>

      <section className="dn-my-v2-row-grid" aria-label="쇼핑활동 요약">
        <button type="button" onClick={() => jumpToSection("orders")}><small>구매내역</small><b>{orderCount}건</b></button>
        <button type="button" onClick={() => jumpToSection("orders")}><small>배송조회</small><b>0건</b></button>
        <button type="button" onClick={() => jumpToSection("shopping")}><small>찜상품</small><b>{wishCount}개</b></button>
      </section>

      <section className="dn-my-v2-status" aria-label="주문 배송 현황">
        <h2>주문 · 배송 현황</h2>
        <div className="dn-my-v2-delivery">
          <span><b>0</b><small>주문접수</small></span>
          <span><b>0</b><small>결제완료</small></span>
          <span><b>0</b><small>배송중</small></span>
          <span><b>0</b><small>배송완료</small></span>
        </div>
      </section>

      <div className="dn-my-v2-sections">
        <Section id="orders" icon="📦" title="주문 · 배송" summary="구매내역, 배송조회, 교환/반품">
          <div className="dn-my-v2-menu-list">
            <MenuButton label="구매내역" value={`${orderCount}건`} />
            <MenuButton label="배송조회" value="준비중" />
            <MenuButton label="교환 / 반품 / 취소" value="0건" />
            <MenuButton label="배송지 관리" />
          </div>
        </Section>

        <Section id="shopping" icon="🛒" title="쇼핑활동" summary="장바구니, 찜상품, 문의, 리뷰">
          <div className="dn-my-v2-menu-list">
            <MenuButton label="장바구니" value={`${cartCount}개`} onClick={goHome} />
            <MenuButton label="찜한상품" value={`${wishCount}개`} />
            <MenuButton label="상품문의" value="0건" />
            <MenuButton label="리뷰관리" value="0건" />
            <MenuButton label="쇼핑 계속하기" onClick={goHome} />
          </div>
        </Section>

        <Section id="ai" icon="🤖" title="AI 구매결정센터" summary="대정넥스트 전용 비교·결정 기록">
          <div className="dn-my-v2-ai-note">LIVE로 보고, AI로 확인하고, 구매결정한 기록을 모으는 대정넥스트 전용 공간입니다.</div>
          <div className="dn-my-v2-menu-list">
            <MenuButton label="AI 비교내역" value="0건" />
            <MenuButton label="구매결정 이력" value="0건" />
            <MenuButton label="신뢰확인 이력" value="0건" />
            <MenuButton label="추천상품 기록" value="0건" />
          </div>
        </Section>

        <Section id="grade" icon="🏆" title="회원등급" summary={`${currentGrade.label} · 다음 등급 진행률 ${progress}%`}>
          <div className="dn-current-grade">현재 등급: <strong>{currentGrade.label}</strong></div>
          <div className="dn-progress"><span style={{ width: `${progress}%` }} /></div>
          <p>{nextGrade ? `다음 등급 ${nextGrade.label} 조건을 향해 진행 중입니다.` : "VIP 최고 등급입니다."}</p>
          <div className="dn-grade-steps dn-grade-steps-mobile">
            {gradeSteps.map((step, index) => (
              <div key={step.key} className={index <= currentIndex ? "active" : ""}>
                <b>{step.label}</b>
                <span>{step.need}</span>
                <small>{step.benefit}</small>
              </div>
            ))}
          </div>
          <p className="dn-my-v2-small">누적 구매금액: {money(totalPurchase)}</p>
        </Section>

        <Section id="account" icon="⚙" title="회원관리" summary="정보수정, 알림설정, 탈퇴, 로그아웃">
          <div className="dn-my-v2-menu-list">
            <MenuButton label="회원정보 수정" />
            <MenuButton label="비밀번호 변경" />
            <MenuButton label="포인트 내역" value={`${points.toLocaleString("ko-KR")}P`} />
            <MenuButton label="쿠폰함" value={`${couponCount}장`} />
            <MenuButton label="알림 설정" />
            <MenuButton label="회원탈퇴" danger onClick={() => alert("회원탈퇴는 운영정책 확인 후 안전하게 연결됩니다.")} />
            <MenuButton label="로그아웃" onClick={() => { logout(); navigate("/"); }} />
          </div>
        </Section>
      </div>
    </main>
  );
}
