import { useNavigate } from "react-router-dom";
import promotions from "../data/promotions.json";
import smallBusiness from "../data/smallBusiness.json";
import localBusiness from "../data/localBusiness.json";
import companyPromotion from "../data/companyPromotion.json";
import eventPromotion from "../data/eventPromotion.json";
import "./PromotionHall.css";

const sections = [
  { key: "video", title: "홍보영상관", subtitle: "영상·스토리·브랜드 소개", items: promotions },
  { key: "small", title: "소상공인관", subtitle: "농산물·수산물·전통시장·지역상품", items: smallBusiness },
  { key: "local", title: "자영업자관 · 지역홍보관", subtitle: "카페·식당·베이커리·공방·로컬서비스", items: localBusiness },
  { key: "company", title: "중소기업관 · 기업홍보관", subtitle: "브랜드·기획전·기업홍보", items: companyPromotion },
  { key: "event", title: "이벤트관 · 특별관", subtitle: "오늘특가·반값·시즌·상생기획", items: eventPromotion },
];

const progress = [
  ["GOD 6 셀렉션", "대표 상품", "완료 유지"],
  ["특별관", "SPECIAL HALL", "구축중"],
  ["전체상품관", "전체상품관", "불변 본관"],
  ["구매결정 쇼룸", "구매결정 쇼룸", "상품 1개 무대"],
];


function openInquiry(title = "홍보관") {
  alert(`${title} 문의 접수 준비중입니다.\n현재는 홍보 확인 후 전체상품관에서 상품을 비교합니다.`);
}

function PromotionCard({ item, onProducts }) {
  return (
    <article className="promotion-card">
      <div className="promotion-thumb">
        <img src={item.image} alt={item.title} loading="lazy" />
        <span>{item.badge}</span>
      </div>
      <div className="promotion-body">
        <p className="promotion-region">{item.region}</p>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="promotion-meta">
          <b>{item.target}</b>
        </div>
        <div className="promotion-actions">
          <button type="button" onClick={() => openInquiry(item.title)}>문의하기</button>
          <button type="button" onClick={onProducts}>상품보기</button>
        </div>
      </div>
    </article>
  );
}

export default function PromotionHall() {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goProducts = () => navigate("/", { state: { target: "products" } });
  return (
    <main className="promotion-hall-page">
      <section className="promotion-hero">
        <div>
          <p className="eyebrow">DAEJUNG NEXT 특별관</p>
          <h1>특별관 · 홍보관</h1>
          <p>소상공인·자영업자·중소기업·기업·지역상품을 영상, 배너, 이벤트 중심으로 보여주는 몰입 공간입니다.</p>
        </div>
        <div className="hero-contact">
          <strong>구매는 전체상품관에서 안전하게</strong>
          <button type="button" onClick={() => openInquiry("입점/홍보")}>입점/홍보 문의하기</button>
        </div>
      </section>

      <section className="promotion-room-map" aria-label="설계도 진행 표시">
        {progress.map(([room, title, state]) => (
          <div key={room} className={room === "특별관" ? "active" : ""}>
            <strong>{room}</strong>
            <span>{title}</span>
            <em>{state}</em>
          </div>
        ))}
      </section>

      <div className="promotion-ticker">
        <span>◆ 특별관은 홍보·몰입 공간</span>
        <span>◆ 상품 비교와 구매는 전체상품관·구매결정 쇼룸에서 진행</span>
        <span>◆ 소상공인 · 자영업자 · 중소기업 · 기업홍보 동시 수용</span>
        <span>◆ 장바구니와 방향키는 항상 유지</span>
      </div>

      <section className="promotion-feature-row">
        <button type="button" onClick={() => document.getElementById("section-video")?.scrollIntoView({ behavior: "smooth" })}>홍보영상</button>
        <button type="button" onClick={() => document.getElementById("section-small")?.scrollIntoView({ behavior: "smooth" })}>소상공인</button>
        <button type="button" onClick={() => document.getElementById("section-local")?.scrollIntoView({ behavior: "smooth" })}>자영업자</button>
        <button type="button" onClick={() => document.getElementById("section-company")?.scrollIntoView({ behavior: "smooth" })}>기업홍보</button>
        <button type="button" onClick={() => document.getElementById("section-event")?.scrollIntoView({ behavior: "smooth" })}>특별관</button>
      </section>

      {sections.map((section) => (
        <section className="promotion-section" id={`section-${section.key}`} key={section.key}>
          <div className="section-head">
            <div>
              <h2>{section.title}</h2>
              <p>{section.subtitle}</p>
            </div>
            <button type="button" onClick={goProducts}>전체상품관 상품보기</button>
          </div>
          <div className="promotion-grid">
            {section.items.map((item) => (
              <PromotionCard key={item.id} item={item} onProducts={goProducts} />
            ))}
          </div>
        </section>
      ))}

      <section className="promotion-inquiry-panel">
        <div>
          <h2>문의하기</h2>
          <p>특별관은 바로구매가 아니라 홍보와 문의 중심입니다. 실제 구매·비교·검증은 전체상품관 · ALL PRODUCTS에서 진행합니다.</p>
        </div>
        <button type="button" onClick={() => openInquiry("특별관")}>홍보 문의</button>
      </section>

      <nav className="promotion-fixed-nav" aria-label="특별관 고정 이동키">
        <button type="button" onClick={goHome}>◀ GOD 6 셀렉션</button>
        <button type="button" onClick={goHome}>홈</button>
        <button type="button" onClick={goProducts}>전체상품관 ▶</button>
      </nav>
      <button className="promotion-cart" type="button" onClick={() => alert("장바구니 확인 준비중")}>🛒 장바구니</button>
    </main>
  );
}
