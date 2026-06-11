import AdminLayout from "../components/AdminLayout";
import AdminTopbar from "../components/AdminTopbar";
import "../styles/admin.css";

const ceoProfile = {
  name: "노희정",
  role: "대표이사",
  company: "대정넥스트 (DAEJUNG NEXT)",
  email: "nhj4626@naver.com",
  phone: "010-8606-1899",
  homepage: "daejungnext.com",
  founded: "2026년 7월",
  address: "추후 등록 예정",
};

const visionCards = [
  { title: "회사 비전", text: "LIVE 커머스와 AI 구매결정 기술을 결합하여 소비자에게는 신뢰 있는 구매환경을, 판매자에게는 성장 기회를 제공하는 차세대 AI 구매결정 플랫폼을 구축합니다." },
  { title: "핵심 문장", text: "LIVE로 보고, AI로 확인하고, 신뢰를 바탕으로 구매를 결정한다." },
  { title: "상생 목표", text: "자영업자, 소상공인, 중소기업, 대기업이 함께 성장하는 상생형 디지털 생태계를 조성합니다." },
  { title: "플랫폼 특징", text: "AI 구매결정 시스템, AI 신뢰확인 시스템, 실시간 LIVE 커머스, 데이터 기반 추천, 기업 성장 지원을 중심으로 운영합니다." },
];

const history = [
  ["2026.07", "대정넥스트 설립 예정"],
  ["2026", "DAEJUNG NEXT 플랫폼 개발"],
  ["2026", "AI 구매결정 시스템 구축"],
  ["2026", "LIVE 커머스 플랫폼 구축"],
  ["2026", "서비스 정식 운영 준비"],
];

export default function AdminCeoOffice() {
  return (
    <AdminLayout>
      <AdminTopbar title="대표이사실" subtitle="대표이사 정보, 회사소개, 비전, 연혁을 관리하는 관리자 전용 공간입니다." />

      <section className="admin-panel ceo-office-panel">
        <div className="ceo-office-head">
          <div className="ceo-seal">CEO</div>
          <div>
            <p className="ceo-kicker">DAEJUNG NEXT 대표이사실</p>
            <h2>{ceoProfile.name} {ceoProfile.role}</h2>
            <p>AI와 신뢰를 기반으로 소비자와 판매자가 함께 성장하는 구매결정 플랫폼을 만듭니다.</p>
          </div>
        </div>

        <div className="ceo-info-grid">
          <div><span>성명</span><b>{ceoProfile.name}</b></div>
          <div><span>직책</span><b>{ceoProfile.role}</b></div>
          <div><span>회사명</span><b>{ceoProfile.company}</b></div>
          <div><span>대표 이메일</span><b>{ceoProfile.email}</b></div>
          <div><span>대표 연락처</span><b>{ceoProfile.phone}</b></div>
          <div><span>회사 홈페이지</span><b>{ceoProfile.homepage}</b></div>
          <div><span>설립연도</span><b>{ceoProfile.founded}</b></div>
          <div><span>회사 주소</span><b>{ceoProfile.address}</b></div>
        </div>
      </section>

      <section className="admin-grid ceo-office-grid">
        <article className="admin-panel">
          <h2>대표 인사말</h2>
          <p className="ceo-message">
            대정넥스트는 소비자와 판매자가 함께 성장할 수 있는 신뢰 기반의 플랫폼을 만들기 위해 시작되었습니다.
            우리는 단순한 판매를 넘어 더 나은 선택과 더 나은 구매결정을 지원하는 AI 플랫폼을 구축하고 있습니다.
            앞으로도 신뢰와 혁신을 바탕으로 대한민국을 대표하는 AI 구매결정 플랫폼으로 성장해 나가겠습니다.
          </p>
          <p className="ceo-sign">대정넥스트 대표이사 노희정</p>
        </article>

        <article className="admin-panel">
          <h2>회사소개</h2>
          <p className="ceo-message">
            대정넥스트는 LIVE 커머스와 AI 구매결정 기술을 결합하여 상품을 보여주는 것에서 그치지 않고,
            소비자가 더 신뢰할 수 있는 구매결정을 할 수 있도록 돕는 플랫폼입니다.
            판매자에게는 홍보와 성장의 기회를 제공하고, 구매자에게는 비교·확인·결정의 과정을 쉽게 제공합니다.
          </p>
        </article>
      </section>

      <section className="admin-panel">
        <h2>비전 및 핵심가치</h2>
        <div className="ceo-vision-grid">
          {visionCards.map((item) => (
            <div key={item.title} className="ceo-vision-card">
              <b>{item.title}</b>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="ceo-values">
          <span>신뢰</span><span>공정성</span><span>상생</span><span>혁신</span><span>성장</span>
        </div>
      </section>

      <section className="admin-panel">
        <h2>회사 연혁</h2>
        <div className="ceo-history">
          {history.map(([year, text], index) => (
            <div key={`${year}-${index}`}>
              <b>{year}</b>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <p className="log-item">사업계획서 원본 확인 후 회사소개·비전·연혁 문구는 관리자 단계에서 교체 가능합니다.</p>
      </section>
    </AdminLayout>
  );
}
