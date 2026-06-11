import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/mainHome.css";
import { generatedProducts as allProducts } from "../data/generatedProductCatalog";

const sidebar = [
  { id: "top", label: "홈", icon: "DN" },
  { id: "live", label: "LIVE", icon: "▶" },
  { id: "products", label: "상품검색", icon: "🛒" },
  { id: "buyer", label: "카테고리", icon: "BUY" },
  { id: "rooms", label: "방구조", icon: "4" },
  { id: "decision", label: "구매결정", icon: "決" },
  { id: "policy", label: "운영센터", icon: "☰" },
  { id: "seller", label: "판매자", icon: "+" },
  { id: "trust", label: "신뢰확인", icon: "✓" },
];

const tickers = [
  "상품 등록 즉시 AI가 제품군 자동 분류 · 이미지/영상/가격/제원 교차검증",
  "본품/부속품 혼동 위험 차단 · 판매자 실명·사업자·계좌 확인 중",
  "LIVE 구매전환 예측 91% · 오늘특가·타임딜·묶음할인 자동 편성",
  "회사명·금액·할인율·제원 통합검색 가능 · 검증 실패 상품 노출 보류",
];


const scheduledLivePrograms = [
  // 지난 1주일: 방송 후 상품도 다시보기/구매 흐름으로 연결
  { section: "지난 1주일", weekday: "월", channel: "쿠팡 LIVE", time: "20:00", title: "로켓 생활가전 마감방송", price: "129,000원", status: "방송후", action: "바로주문" },
  { section: "지난 1주일", weekday: "화", channel: "홈앤쇼핑", time: "21:00", title: "중소기업 주방세트", price: "59,900원", status: "방송후", action: "바로주문" },
  { section: "지난 1주일", weekday: "수", channel: "현대홈쇼핑", time: "19:30", title: "프리미엄 냉장고 특가", price: "899,000원", status: "방송후", action: "바로주문" },
  { section: "지난 1주일", weekday: "목", channel: "신세계 LIVE", time: "20:40", title: "백화점 뷰티 브랜드전", price: "39,000원", status: "방송후", action: "바로주문" },
  { section: "지난 1주일", weekday: "금", channel: "롯데홈쇼핑", time: "22:00", title: "패션 시즌 특가", price: "49,900원", status: "방송후", action: "바로주문" },
  { section: "지난 1주일", weekday: "토", channel: "CJ온스타일", time: "18:00", title: "건강식품 구성전", price: "69,000원", status: "방송후", action: "바로주문" },
  { section: "지난 1주일", weekday: "일", channel: "GS SHOP", time: "21:30", title: "생활필수품 묶음전", price: "29,900원", status: "방송후", action: "바로주문" },

  // 오늘: 사용자가 바로 행동할 수 있는 방송
  { section: "오늘", weekday: "현재", channel: "DAEJUNG LIVE", time: "방송중", title: "AI 생활 패키지", price: "39,000원", status: "방송중", action: "바로주문" },
  { section: "오늘", weekday: "다음", channel: "쿠팡 LIVE", time: "19:30", title: "삼성TV 특가 LIVE", price: "1,090,000원", status: "예정", action: "바로주문" },
  { section: "오늘", weekday: "밤", channel: "현대홈쇼핑", time: "21:00", title: "생활필수품 묶음전", price: "29,900원", status: "예정", action: "바로주문" },

  // 다음 1주일: 요일별 예약/알림/바로주문
  { section: "다음 1주일", weekday: "월", channel: "쿠팡 LIVE", time: "20:00", title: "삼성TV 특가 LIVE", price: "1,090,000원", status: "예정", action: "바로주문" },
  { section: "다음 1주일", weekday: "화", channel: "홈앤쇼핑", time: "21:00", title: "AI 생활패키지 방송", price: "39,000원", status: "예정", action: "바로주문" },
  { section: "다음 1주일", weekday: "수", channel: "현대홈쇼핑", time: "19:30", title: "세탁기 반값특가", price: "599,000원", status: "예정", action: "바로주문" },
  { section: "다음 1주일", weekday: "목", channel: "신세계 LIVE", time: "20:40", title: "주방 조리세트", price: "67,000원", status: "예정", action: "바로주문" },
  { section: "다음 1주일", weekday: "금", channel: "롯데홈쇼핑", time: "22:00", title: "건강식품 구성전", price: "69,000원", status: "예정", action: "바로주문" },
  { section: "다음 1주일", weekday: "토", channel: "CJ온스타일", time: "18:00", title: "키즈/육아 패키지", price: "45,000원", status: "예정", action: "바로주문" },
  { section: "다음 1주일", weekday: "일", channel: "GS SHOP", time: "21:30", title: "디지털 소형가전", price: "89,000원", status: "예정", action: "바로주문" },
];

const dealZones = [
  { title: "일상 베스트", company: "DAEJUNG AI", price: "39,000원", sub: "생활 필수 구성 검증", value: "12%", group: "생활/가전", budget: "3만~5만원", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" },
  { title: "LIVE 한정", company: "NEXT HOME", price: "59,000원", sub: "방송 중 전용 혜택", value: "28%", group: "디지털", budget: "5만원 이상", img: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=900&q=80" },
  { title: "오늘의 결정가", company: "AI PICK", price: "39,000원", sub: "가격·리뷰 동시 분석", value: "34%", group: "생활/가전", budget: "3만~5만원", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80" },
  { title: "AI 강력추천", company: "LOCAL PRIME", price: "42,000원", sub: "구매확률 상위 상품", value: "91점", group: "지역상품", budget: "3만~5만원", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80" },
  { title: "타임 세이브", company: "SMART BUY", price: "27,900원", sub: "30분 집중 혜택", value: "00:29", group: "오늘특가", budget: "3만원 이하", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80" },
  { title: "패키지 플러스", company: "KITCHEN LIVE", price: "24,900원", sub: "2개 이상 추가 혜택", value: "+쿠폰", group: "주방/생활", budget: "3만원 이하", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80" },
  { title: "첫 구매 큐레이션", company: "WELCOME NEXT", price: "18,900원", sub: "신규 고객 전용", value: "첫구매", group: "생활/가전", budget: "3만원 이하", img: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80" },
  { title: "멤버십 셀렉트", company: "VIP CORE", price: "49,000원", sub: "재방문 고객 혜택", value: "VIP", group: "검증완료", budget: "3만~5만원", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80" },
  { title: "검증 완료", company: "TRUST LAB", price: "36,000원", sub: "오인판매 차단 상품", value: "PASS", group: "검증완료", budget: "3만~5만원", img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80" },
  { title: "가격 비교 우위", company: "COMPARE AI", price: "33,000원", sub: "동급 상품 대비 우위", value: "비교", group: "디지털", budget: "3만~5만원", img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=900&q=80" },
  { title: "재고 시그널", company: "STOCK NEXT", price: "29,000원", sub: "남은 수량 감소", value: "18개", group: "주방/생활", budget: "3만원 이하", img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=900&q=80" },
  { title: "다음 LIVE 예고", company: "LIVE STUDIO", price: "예약가", sub: "방송 편성 대기", value: "예약", group: "디지털", budget: "전체금액", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80" },
];

const roomCategoryLabels = [
  "생활가전", "디지털", "주방", "뷰티", "패션", "식품", "건강식품", "키즈/육아", "반려동물", "스포츠",
  "자동차용품", "홈데코", "가구", "캠핑/레저", "여행", "취미/DIY", "문구/사무용품", "도서/교육", "공구/산업용품", "계절가전",
  "침구/수면", "생활용품", "주류제외 음료", "지역특산물", "중소기업관", "전통시장관", "브랜드관", "공동구매관", "라이브특가관", "AI추천관",
];

const categoryPages = [
  roomCategoryLabels.slice(0, 10).map((label) => ({ label, group: label })),
  roomCategoryLabels.slice(10, 20).map((label) => ({ label, group: label })),
  roomCategoryLabels.slice(20, 30).map((label) => ({ label, group: label })),
];

const productGroups = ["전체", ...roomCategoryLabels];


const instantSearchSeed = [
  "세탁기", "삼성세탁기", "LG세탁기", "엘지세탁기", "드럼세탁기", "통돌이세탁기", "세탁건조기", "세제", "섬유유연제",
  "TV", "삼성TV", "LG TV", "OLED TV", "QLED TV", "75인치 TV", "냉장고", "김치냉장고", "에어컨", "청소기", "로봇청소기",
  "노트북", "삼성노트북", "LG그램", "스마트폰", "갤럭시", "아이폰", "밥솥", "프라이팬", "건강식품", "홍삼", "안마의자"
];

function getInstantSearchSuggestions(raw = "", products = []) {
  const q = normalizeSearchText(raw);
  if (!q) return [];
  const fromSeed = instantSearchSeed.filter((word) => {
    const n = normalizeSearchText(word);
    return n.includes(q) || q.includes(n);
  });
  const fromProducts = products
    .flatMap((p) => [p.name, p.company && p.name ? `${p.company}${p.name}` : "", p.category, p.group])
    .filter(Boolean)
    .filter((word) => {
      const n = normalizeSearchText(word);
      return n.includes(q) || q.includes(n);
    });
  return Array.from(new Set([...fromSeed, ...fromProducts])).slice(0, 8);
}

const roomFlow = [
  ["GOD 6", "GOD 6 셀렉션", "최고 등급 6개 대표상품 · 다이아/금/은 자동회전"],
  ["특별관", "SPECIAL HALL", "중소기업 · 자영업자 · 기업/지역 홍보"],
  ["전체상품관", "ALL PRODUCTS", "검색 · 가격대 · 회사별 · 모든 상품 수용"],
  ["구매결정", "PURCHASE DECISION SHOWROOM", "선택 상품 1개를 최종 구매 중심으로 확인"]
];


const specialRoomItems = [
  ["중소기업 홍보관", "동네 가게·자영업자·중소기업·신규 판매자가 상품과 이야기를 알리는 공간"],
  ["지역상품관", "지역특산·전통시장·장인 상품을 LIVE/기획전으로 연결"],
  ["기업 홍보관", "성장기업·중소기업 제품을 검증 후 특별 노출"],
  ["무료 홍보 슬롯", "초기 입점자에게 테스트용 노출 공간 제공"],
];

const operationItems = [
  ["회원가입", "읽었음 체크와 최종 동의 저장 구조로 연결"],
  ["회원탈퇴", "원클릭 탈퇴 + 재가입 제한 정책 고지"],
  ["고객센터", "문의·반품·분쟁처리 흐름 확인"],
  ["FAQ", "회원/판매자 자주 묻는 질문"],
  ["판매자센터", "상품등록·검증대기·LIVE 신청"],
  ["정책센터", "이용약관·개인정보·전자상거래 고지"],
  ["개인정보처리방침", "AI 학습/외부판매/제3자 마케팅 무단 사용 금지"],
  ["이용약관", "구매·판매·정산·분쟁 기준"],
  ["신뢰확인 UI", "사업자·계좌·반품률·신고·배송신뢰도 공개"],
];


const faqItems = [
  ["배송", "상품별 배송일·출고 상태·LIVE 주문 배송 안내를 한 화면에서 확인합니다."],
  ["반품/환불", "상품 설명 불일치, 구성품 누락, 파손 등은 신뢰확인 기록과 함께 처리합니다."],
  ["회원가입", "서비스 운영과 보호 목적의 개인정보 활용에 동의한 뒤 가입합니다."],
  ["회원탈퇴", "탈퇴는 쉽게 진행하되 반복 탈퇴·악용 계정은 재가입 제한 정책을 안내합니다."],
  ["판매자", "실명·사업자·계좌·연락처 검증 후 상품 등록과 LIVE 신청이 가능합니다."],
  ["LIVE 구매", "방송상품을 선택하면 비교상품과 보조상품을 구성해 홍보관으로 이동합니다."],
];

const policyItems = [
  ["개인정보처리방침", "동의 없는 AI 학습, 외부 판매, 제3자 마케팅 사용 금지"],
  ["이용약관", "구매·판매·정산·반품·분쟁 기준"],
  ["판매자정책", "오인판매·허위과장·구성품 누락 반복 시 노출 제한/LIVE 제한/정산 보류"],
  ["전자상거래 고지", "사업자 정보, 고객센터, 통신판매, 분쟁처리 고지 영역"],
];

const trustCheckItems = [
  ["판매자 인증", "실명·사업자·계좌·연락처 확인"],
  ["AI 상품검토", "제목·옵션·이미지·상세설명·제원 교차검증"],
  ["반품률", "반품/설명 불일치 이력을 신뢰 정보로 표시"],
  ["신고 여부", "반복 신고·분쟁 상품은 노출 제한"],
  ["배송 신뢰도", "출고 지연·배송 문제를 구매 전 확인"],
  ["위험도", "본품/부속품 혼동 가능성을 AI가 경고"],
];

const decisionCards = [
  ["선택상품", "LIVE 상품 또는 카테고리 상품을 메인 선택으로 고정"],
  ["비교상품", "가격·리뷰·배송·사양 기준으로 5개까지 비교"],
  ["보조상품", "구성품/옵션/연관상품을 함께 추천"],
  ["AI 분석", "오인판매·가격위험·구매타이밍을 요약"],
  ["신뢰확인", "판매자 인증·반품률·신고여부를 모달로 확인"],
  ["구매결정", "장바구니 또는 바로구매로 최종 이동"],
];

function normalizeCategoryLabel(label) {
  return categoryPages.flat().find((c) => c.label === label)?.group || label;
}

function money(v) {
  return `${v.toLocaleString("ko-KR")}원`;
}

function productScore(p) {
  return (p.sale || p.discountRate || 0) * 10000 + (p.trust || 0) * 120 + (p.rating || 0) * 80 + Math.min(p.sold || 0, 50000) / 20;
}

function toDeal(product, rankLabel = "AI 선발") {
  return {
    title: product.name,
    company: product.company,
    price: money(product.price),
    sub: product.spec,
    value: product.sale ? `${product.sale}%` : rankLabel,
    group: product.group,
    budget: product.price <= 30000 ? "3만원 이하" : product.price <= 100000 ? "3만~10만원" : product.price <= 500000 ? "10만~50만원" : product.price <= 1000000 ? "50만~100만원" : "100만원 이상",
    img: product.img,
    product,
  };
}



function isMeaninglessSearch(raw = "") {
  const text = String(raw || "").trim().replace(/\s+/g, "");
  if (!text) return false;
  if (text.length < 2 && !/[가-힣a-zA-Z0-9]/.test(text)) return true;

  // ㅇㅇㅇㅇ, ㅐㅐㅐㅐ, ㅋㅋㅋㅋ처럼 상품 의도가 없는 한글 자모 반복
  if (/^[ㄱ-ㅎㅏ-ㅣ]+$/.test(text)) return true;

  // 같은 글자만 반복되는 입력
  if (/^(.)\1{2,}$/.test(text)) return true;

  // 문자/숫자 없이 특수문자만 있는 입력
  if (!/[0-9a-zA-Z가-힣]/.test(text)) return true;

  return false;
}

function normalizeSearchText(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/samsung/g, "삼성")
    .replace(/lg/g, "엘지")
    .replace(/텔레비전|테레비|티브이|티비|tv/g, "tv")
    .replace(/휴대폰|핸드폰|스마트폰|전화기|전화/g, "폰")
    .replace(/[^0-9a-z가-힣ㄱ-ㅎㅏ-ㅣ]/g, "")
    .trim();
}

const searchSynonyms = [
  { key: "삼성", words: ["삼성", "samsung"] },
  { key: "엘지", words: ["엘지", "lg"] },
  { key: "tv", words: ["tv", "티비", "티브이", "텔레비전", "테레비"] },
  { key: "폰", words: ["전화", "전화기", "휴대폰", "핸드폰", "스마트폰", "폰"] },
  { key: "냉장고", words: ["냉장고", "김치냉장고"] },
];

function parsePriceIntent(raw = "") {
  const text = String(raw).replace(/\s+/g, "");
  const manRange = text.match(/(\d+)만원대/);
  if (manRange) {
    const n = Number(manRange[1]) * 10000;
    const step = n >= 1000000 ? 1000000 : 100000;
    return { min: n, max: n + step - 1, label: `${manRange[1]}만원대` };
  }
  const below = text.match(/(\d+)만원(이하|미만|아래|밑)/);
  if (below) return { min: 0, max: Number(below[1]) * 10000, label: `${below[1]}만원 이하` };
  const above = text.match(/(\d+)만원(이상|부터|넘는|초과)/);
  if (above) return { min: Number(above[1]) * 10000, max: Infinity, label: `${above[1]}만원 이상` };
  return null;
}

function inferSearchCategory(raw = "") {
  const n = normalizeSearchText(raw);
  if (/강아지|반려|애견|고양이|사료|간식/.test(n)) return "반려동물";
  if (/tv|폰|노트북|컴퓨터|태블릿|모니터|카메라|이어폰/.test(n)) return "디지털";
  if (/냉장고|세탁기|청소기|에어컨|공기청정기|가습기/.test(n)) return "생활가전";
  if (/밥솥|프라이팬|냄비|주방/.test(n)) return "주방";
  if (/화장품|스킨|로션|뷰티/.test(n)) return "뷰티";
  if (/식품|과일|고기|쌀|김치/.test(n)) return "식품";
  return "전체";
}

function buildSearchIntent(raw = "", products = []) {
  const original = String(raw || "").trim();
  const normalized = normalizeSearchText(original);

  if (isMeaninglessSearch(original)) {
    return {
      active: true,
      invalidInput: true,
      original,
      normalized,
      price: null,
      priceLabel: "",
      category: "전체",
      brand: "",
      productTerm: "",
      count: 0,
      categoryCounts: [],
      companyCounts: [],
      suggestions: [],
      onlyPrice: false,
    };
  }

  const price = parsePriceIntent(original);
  const category = inferSearchCategory(original);
  const brand = /삼성|samsung/i.test(original) ? "삼성" : (/엘지|\blg\b/i.test(original) ? "엘지" : "");
  let productTerm = normalized
    .replace(/\d+만원대|\d+만원이하|\d+만원미만|\d+만원아래|\d+만원밑|\d+만원이상|\d+만원부터|\d+만원넘는|\d+만원초과/g, "")
    .replace(/삼성|엘지/g, "")
    .trim();

  const related = products.filter((p) => {
    const hay = normalizeSearchText(`${p.company} ${p.name} ${p.category} ${p.group} ${p.tag} ${p.spec}`);
    const priceOK = !price || (p.price >= price.min && p.price <= price.max);
    const brandOK = !brand || hay.includes(normalizeSearchText(brand));
    const categoryOK = category === "전체" || p.category === category || p.group === category || hay.includes(normalizeSearchText(category));
    const termOK = !productTerm || hay.includes(productTerm) || searchSynonyms.some((s) => normalized.includes(normalizeSearchText(s.key)) && s.words.some((w) => hay.includes(normalizeSearchText(w))));
    if (price && !productTerm && !brand) return priceOK;
    return priceOK && brandOK && (termOK || categoryOK);
  });

  const categoryCounts = Array.from(new Map(
    related.reduce((acc, p) => {
      const k = p.category || p.group || "기타";
      acc.set(k, (acc.get(k) || 0) + 1);
      return acc;
    }, new Map())
  )).sort((a,b)=>b[1]-a[1]).slice(0, 8);
  const companyCounts = Array.from(new Map(
    related.reduce((acc, p) => {
      const k = p.company || "기타회사";
      acc.set(k, (acc.get(k) || 0) + 1);
      return acc;
    }, new Map())
  )).sort((a,b)=>b[1]-a[1]).slice(0, 8);

  const suggestions = [];
  if (normalized.includes("강아지") || category === "반려동물") suggestions.push("생활상품", "강아지 간식", "반려동물");
  if (normalized.includes("tv")) suggestions.push("삼성TV", "LG TV", "TV 100만원대");
  if (normalized.includes("폰")) suggestions.push("전화 10만원대", "휴대폰", "디지털");
  if (normalized.includes("냉장고")) suggestions.push("냉장고 20만원대", "삼성 냉장고", "생활가전");
  if (normalized.includes("세")) suggestions.push("세탁기", "전기세탁기", "드럼세탁기", "세탁건조기", "세제", "섬유유연제");
  if (price && !productTerm && !brand) suggestions.push(`${price.label} 생활가전`, `${price.label} 디지털`, `${price.label} 식품`);

  return {
    active: true,
    original,
    normalized,
    price,
    priceLabel: price?.label || "",
    category,
    brand,
    productTerm,
    count: related.length,
    categoryCounts,
    companyCounts,
    suggestions: [...new Set(suggestions)].slice(0, 8),
    onlyPrice: Boolean(price && !productTerm && !brand),
  };
}

function detectGroup(text) {
  const t = text.toLowerCase();
  if (t.includes("가전") || t.includes("스마트") || t.includes("전자")) return "디지털";
  if (t.includes("주방") || t.includes("생활")) return "주방/생활";
  if (t.includes("식품") || t.includes("건강")) return "식품/건강";
  if (t.includes("뷰티") || t.includes("패션")) return "뷰티/패션";
  if (t.includes("지역") || t.includes("산지")) return "지역상품";
  return "검증대기";
}

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isLoggedIn, logout } = useAuth();
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("전체");
  const [categoryPage, setCategoryPage] = useState(0);
  const [roomIndex, setRoomIndex] = useState(0);
  const [discountIndex, setDiscountIndex] = useState(0);
  const [showcaseSlide, setShowcaseSlide] = useState(0);
  const [promoSlide, setPromoSlide] = useState(0);
  const [buyerStep, setBuyerStep] = useState({ category: "전체", budget: "전체금액", company: "전체회사" });
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [toast, setToast] = useState("DAEJUNG NEXT · GOD 6 셀렉션 준비 완료");
  const [sellerOpen, setSellerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveExpanded, setLiveExpanded] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [activeScheduleTab, setActiveScheduleTab] = useState("오늘");
  const [cartCount, setCartCount] = useState(0);
  const [form, setForm] = useState({ company: "", name: "", price: "", discount: "", spec: "", component1: "", component2: "", component3: "", requestedGroup: "", consent: false });
  const [trustModal, setTrustModal] = useState(null);
  const [activeOperation, setActiveOperation] = useState("고객센터");
  const [preview, setPreview] = useState({ image: "", video: "" });
  const [currentRoom, setCurrentRoom] = useState(1);
  const handleScheduleOrder = (item) => {
    setCartCount((v) => v + 1);
    setToast(`${item.channel} · ${item.title} 바로주문 선택 · 구매결정 쇼룸 · PURCHASE DECISION SHOWROOM으로 이동`);
    navigate("/decision-room");
  };
  const handleScheduleBell = (item) => {
    setToast(`🔔 ${item.weekday} ${item.time} · ${item.title} 방송시간 알림 설정`);
  };
  const scheduleTabs = ["지난 1주일", "오늘", "다음 1주일"];
  const visibleSchedulePrograms = scheduledLivePrograms.filter((item) => item.section === activeScheduleTab);
  const [searchOpen, setSearchOpen] = useState(false);
  const [advancedSearch, setAdvancedSearch] = useState({ product: "", brand: "", broadcast: "", category: "전체", priceBand: "전체금액" });
  const [searchIntent, setSearchIntent] = useState({ active: false, invalidInput: false, original: "", count: 0, categoryCounts: [], companyCounts: [], suggestions: [] });

  const homeHistoryRef = useRef([]);
  const currentSnapshotRef = useRef(null);

  const resetHomeView = () => {
    setQuery("");
    setActiveGroup("전체");
    setCategoryPage(0);
    setRoomIndex(0);
    setBuyerStep({ category: "전체", budget: "전체금액", company: "전체회사" });
    setSelectedDeal(null);
    setSellerOpen(false);
    setMobileMenuOpen(false);
    setLiveExpanded(false);
    setScheduleOpen(false);
    setActiveScheduleTab("오늘");
    setTrustModal(null);
    setActiveOperation("고객센터");
    setCurrentRoom(1);
    setSearchOpen(false);
    setSearchIntent({ active: false, invalidInput: false, original: "", count: 0, categoryCounts: [], companyCounts: [], suggestions: [] });
    setToast("GOD 6 셀렉션으로 돌아왔습니다");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const restoreHomeSnapshot = (snapshot) => {
    if (!snapshot) {
      resetHomeView();
      return;
    }
    setQuery(snapshot.query ?? "");
    setActiveGroup(snapshot.activeGroup ?? "전체");
    setCategoryPage(snapshot.categoryPage ?? 0);
    setRoomIndex(snapshot.roomIndex ?? 0);
    setBuyerStep(snapshot.buyerStep ?? { category: "전체", budget: "전체금액", company: "전체회사" });
    setSelectedDeal(snapshot.selectedDeal ?? null);
    setSellerOpen(Boolean(snapshot.sellerOpen));
    setMobileMenuOpen(Boolean(snapshot.mobileMenuOpen));
    setLiveExpanded(Boolean(snapshot.liveExpanded));
    setTrustModal(snapshot.trustModal ?? null);
    setActiveOperation(snapshot.activeOperation ?? "고객센터");
    setCurrentRoom(snapshot.currentRoom ?? 1);
    setSearchOpen(Boolean(snapshot.searchOpen));
    setSearchIntent(snapshot.searchIntent ?? { active: false, invalidInput: false, original: "", count: 0, categoryCounts: [], companyCounts: [], suggestions: [] });
    setToast("이전 선택 화면으로 돌아왔습니다");
    window.setTimeout(() => window.scrollTo({ top: snapshot.scrollY ?? 0, left: 0, behavior: "smooth" }), 30);
  };

  useEffect(() => {
    currentSnapshotRef.current = {
      query,
      activeGroup,
      categoryPage,
      roomIndex,
      buyerStep,
      selectedDeal,
      sellerOpen,
      mobileMenuOpen,
      liveExpanded,
      trustModal,
      activeOperation,
      currentRoom,
      searchOpen,
      searchIntent,
      scrollY: window.scrollY || 0,
    };
  }, [query, activeGroup, categoryPage, roomIndex, buyerStep, selectedDeal, sellerOpen, mobileMenuOpen, liveExpanded, trustModal, activeOperation, currentRoom, searchOpen, searchIntent]);

  useEffect(() => {
    const rememberBeforeClick = (event) => {
      const target = event.target;
      if (!target?.closest) return;
      if (target.closest(".dn-nav-core")) return;
      if (!target.closest("button, a, [role='button'], input, select")) return;
      const snapshot = currentSnapshotRef.current;
      if (!snapshot) return;
      const last = homeHistoryRef.current[homeHistoryRef.current.length - 1];
      const next = { ...snapshot, scrollY: window.scrollY || 0 };
      if (JSON.stringify(last) !== JSON.stringify(next)) {
        homeHistoryRef.current = [...homeHistoryRef.current, next].slice(-60);
      }
    };

    const handleBack = (event) => {
      const previous = homeHistoryRef.current.pop();
      if (previous) {
        event.detail.handled = true;
        restoreHomeSnapshot(previous);
      } else {
        event.detail.handled = true;
        resetHomeView();
      }
    };

    const handleHome = () => {
      homeHistoryRef.current = [];
      resetHomeView();
    };

    document.addEventListener("click", rememberBeforeClick, true);
    window.addEventListener("dn:navigation-back", handleBack);
    window.addEventListener("dn:navigation-home", handleHome);
    return () => {
      document.removeEventListener("click", rememberBeforeClick, true);
      window.removeEventListener("dn:navigation-back", handleBack);
      window.removeEventListener("dn:navigation-home", handleHome);
    };
  }, []);

  // V3011: 인트로 완전 제거. 첫 진입/뒤로가기/방 이동에서 더 이상 인트로가 개입하지 않음.
  useEffect(() => {
    if (location.state?.target === "products") {
      setCurrentRoom(3);
      window.setTimeout(() => scrollTo("products"), 80);
      navigate(".", { replace: true, state: null });
    }
  }, [location.state, navigate]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setShowcaseSlide((old) => (old + 1) % 6);
      setPromoSlide((old) => (old + 1) % 4);
    }, 15000);
    return () => window.clearInterval(timer);
  }, []);

  const dailyShowcaseGroups = useMemo(() => {
    return roomCategoryLabels.map((category) => {
      const primary = allProducts
        .filter((p) => (p.category || p.group) === category || p.group === category || p.tag === category)
        .sort((a, b) => productScore(b) - productScore(a));
      const fallback = allProducts
        .filter((p) => !primary.some((x) => x.id === p.id))
        .sort((a, b) => productScore(b) - productScore(a));
      const items = [...primary, ...fallback].slice(0, 6);
      return { category, items };
    });
  }, []);

  const dailyDiscountGroups = useMemo(() => {
    return roomCategoryLabels.map((category) => {
      const primary = allProducts
        .filter((p) => (p.category || p.group) === category || p.group === category || p.tag === category)
        .sort((a, b) => (b.sale || 0) - (a.sale || 0) || productScore(b) - productScore(a));
      const discountItems = primary.filter((p) => (p.sale || 0) >= 15 || p.tag === "오늘특가" || p.tag === "라이브특가");
      const fallback = primary.slice(0, Math.min(primary.length, 12));
      return {
        category,
        items: discountItems.length ? discountItems : fallback,
        source: discountItems.length ? "오늘 전체상품관 서치 결과" : "오늘 신규 할인 없음 · 전날 후보 대치",
      };
    });
  }, []);

  const showcase180 = useMemo(() => dailyShowcaseGroups.flatMap((g) => g.items), [dailyShowcaseGroups]);
  const showcaseRankLabels = ["💎 DIAMOND CLASS", "🥇 GOLD CLASS", "🥇 GOLD CLASS", "🥈 SILVER CLASS", "🥈 SILVER CLASS", "🥈 SILVER CLASS"];
  const promoRankLabels = ["특별할인", "반값할인", "라이브특가", "오늘의 할인"];
  const getShowcaseProduct = (room, idx) => {
    const items = room?.items?.length ? room.items : showcase180;
    return items[(showcaseSlide + idx) % Math.max(items.length, 1)];
  };
  const getPromoProduct = (room, idx) => {
    const items = room?.items?.length ? room.items : showcase180;
    return items[(promoSlide + idx) % Math.max(items.length, 1)];
  };
  const medalProducts = useMemo(() => [...showcase180].sort((a, b) => productScore(b) - productScore(a)).slice(0, 6), [showcase180]);
  const showcaseCategory = dailyShowcaseGroups[roomIndex]?.category || dailyShowcaseGroups[0]?.category || "GOD 6 셀렉션";
  const currentRoomProducts = dailyShowcaseGroups[roomIndex]?.items || dailyShowcaseGroups[0]?.items || [];
  const selectedRoomNo = roomIndex + 1;
  const discountCategory = dailyDiscountGroups[discountIndex]?.category || dailyDiscountGroups[0]?.category || "생활가전";
  const currentDiscountProducts = dailyDiscountGroups[discountIndex]?.items || [];
  const selectedDiscountNo = discountIndex + 1;

  const specialDealRooms = useMemo(() => {
    const rooms = [
      ["특별할인", (p) => (p.sale || 0) >= 30],
      ["반값할인", (p) => (p.sale || 0) >= 45],
      ["LIVE특가", (p) => p.tag === "오늘특가" || (p.sold || 0) > 25000],
      ["AI추천", (p) => (p.trust || 0) >= 96],
      ["급상승", (p) => (p.sold || 0) > 30000],
      ["신뢰검증", (p) => p.sellerVerified && (p.trust || 0) >= 94],
    ];
    return rooms.map(([title, fn]) => ({
      title,
      items: allProducts.filter(fn).sort((a, b) => productScore(b) - productScore(a)).slice(0, 12),
    }));
  }, []);

  const baseDetected = detectGroup(`${form.name} ${form.spec} ${form.component1} ${form.component2} ${form.component3} ${form.company} ${form.requestedGroup}`);
  const detected = form.requestedGroup.trim() && baseDetected === "검증대기" ? "신규 제품군 검토" : baseDetected;
  const sellerRisk = useMemo(() => {
    const text = `${form.name} ${form.spec} ${form.component1} ${form.component2} ${form.component3} ${form.requestedGroup}`.toLowerCase();
    if (!text.trim()) return "입력 대기";
    if (text.includes("필름") || text.includes("부속") || text.includes("케이스") || text.includes("호환")) return "본품/부속품 혼동 확인 필요";
    if (!form.price.trim()) return "금액 누락 확인 필요";
    return "AI 1차 검증 가능";
  }, [form]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProducts.filter((p) => {
      const groupOK = activeGroup === "전체" || p.category === activeGroup || p.group === activeGroup || p.tag === activeGroup || p.name.includes(activeGroup);
      const buyerCategoryOK = buyerStep.category === "전체" || p.category === buyerStep.category || p.group === buyerStep.category || p.tag === buyerStep.category;
      const buyerBudgetOK = buyerStep.budget === "전체금액" ||
        (buyerStep.budget === "3만원 이하" && p.price <= 30000) ||
        (buyerStep.budget === "3만~10만원" && p.price > 30000 && p.price <= 100000) ||
        (buyerStep.budget === "10만~50만원" && p.price > 100000 && p.price <= 500000) ||
        (buyerStep.budget === "50만~100만원" && p.price > 500000 && p.price <= 1000000) ||
        (buyerStep.budget === "100만원 이상" && p.price > 1000000);
      const buyerCompanyOK = buyerStep.company === "전체회사" || p.company === buyerStep.company;
      const hay = normalizeSearchText(`${p.company} ${p.name} ${p.category} ${p.group} ${p.price} ${p.sale} ${p.spec} ${p.tag}`);
      const intent = searchIntent?.active ? searchIntent : null;
      const priceOK = !intent?.price || (p.price >= intent.price.min && p.price <= intent.price.max);
      const brandOK = !intent?.brand || hay.includes(normalizeSearchText(intent.brand));
      const qOK = !q || hay.includes(normalizeSearchText(q)) || (intent?.productTerm && hay.includes(intent.productTerm)) || (intent?.category && intent.category !== "전체" && (p.category === intent.category || p.group === intent.category));
      return groupOK && buyerCategoryOK && buyerBudgetOK && buyerCompanyOK && priceOK && brandOK && qOK;
    });
  }, [query, activeGroup, buyerStep, searchIntent]);

  const displayedProducts = filtered.slice(0, 60);
  const noSearchResults = searchIntent.active && searchIntent.count === 0;
  const selectedGroup = selectedDeal?.group || displayedProducts[0]?.group || "전체";
  const comparisonProducts = allProducts
    .filter((p) => selectedGroup === "전체" || p.group === selectedGroup || p.tag === selectedGroup)
    .slice(0, 5);
  const supportProducts = allProducts
    .filter((p) => p.group !== selectedGroup)
    .slice(5, 9);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const gotoRoom = (room) => {
    setCurrentRoom(room);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const gotoRoomSection = (room, id) => {
    setCurrentRoom(room);
    window.setTimeout(() => scrollTo(id), 40);
  };
  const gotoProductsRoom = () => {
    setCurrentRoom(3);
    window.setTimeout(() => scrollTo("products"), 80);
  };

  const gotoPromotionRoom = () => {
    navigate("/promotion");
  };
  const selectProductForDecision = (p, source = "선택상품") => {
    const next = p.product || p;
    const selected = {
      title: next.name || p.title,
      company: next.company || p.company,
      price: typeof next.price === "number" ? money(next.price) : (p.price || "가격 확인"),
      sub: next.spec || p.sub || source,
      group: next.category || next.group || p.group || "선택상품",
      budget: source,
      product: next,
    };

    const compareGroup = next.category || next.group || p.group || "전체";
    const compareProducts = allProducts
      .filter((item) => item.id !== next.id && (item.category === compareGroup || item.group === compareGroup || item.tag === compareGroup))
      .slice(0, 5);

    setSelectedDeal(selected);
    setActiveGroup(compareGroup);
    setBuyerStep((old) => ({ ...old, category: compareGroup }));
    setToast(`${next.name || p.title} 선택 → 구매결정 쇼룸 · PURCHASE DECISION SHOWROOM 이동`);

    localStorage.setItem("dn_selected_product", JSON.stringify(next));
    localStorage.setItem("dn_compare_products", JSON.stringify(compareProducts));
    navigate("/decision-room");
  };
  const selectCategory = (item) => {
    const label = typeof item === "string" ? item : item.label;
    const group = typeof item === "string" ? normalizeCategoryLabel(item) : item.group;

    setActiveGroup(group || "전체");
    setBuyerStep((old) => ({ ...old, category: group || "전체" }));
    setSelectedDeal(null);

    const flatIndex = categoryPages.flat().findIndex((c) => c.label === label);
    if (flatIndex >= 0) {
      setCategoryPage(Math.floor(flatIndex / 10));
      setRoomIndex(flatIndex);
    }

    setSearchIntent((old) => ({ ...old, active: false }));
    setToast(`${label} 선택 → 전체상품관으로 이동`);
    gotoProductsRoom();
  };
  const moveCategoryPage = (dir) => {
    setCategoryPage((old) => {
      const next = (old + dir + categoryPages.length) % categoryPages.length;
      setToast(`카테고리 ${next + 1}페이지 표시 · 총 30개 확장 카테고리`);
      return next;
    });
  };
  const moveShowcaseRoom = (dir) => {
    setRoomIndex((old) => {
      const total = dailyShowcaseGroups.length || 30;
      const next = (old + dir + total) % total;
      const page = Math.floor(next / 10);
      setCategoryPage(page);
      setActiveGroup(dailyShowcaseGroups[next]?.category || "전체");
      setBuyerStep((prev) => ({ ...prev, category: dailyShowcaseGroups[next]?.category || "전체" }));
      setToast(`${dailyShowcaseGroups[next]?.category || "상품군"} 대표관 · 다이아몬드/금메달/은메달 표시`);
      return next;
    });
  };

  const moveDiscountRoom = (dir) => {
    setDiscountIndex((old) => {
      const total = dailyDiscountGroups.length || 30;
      const next = (old + dir + total) % total;
      setToast(`${dailyDiscountGroups[next]?.category || "상품군"} 할인관 · 하루 1회 교체 후보 표시`);
      return next;
    });
  };

  const runSearch = () => {
    const text = query.trim();
    if (!text) {
      setToast("검색어를 입력하면 연관검색어와 상품 결과가 바로 표시됩니다");
      setSearchOpen(true);
      return;
    }
    const intent = buildSearchIntent(text, allProducts);
    setSearchIntent(intent);
    if (intent.invalidInput || intent.count === 0) {
      setActiveGroup("전체");
      setBuyerStep({ category: "전체", budget: "전체금액", company: "전체회사" });
    } else if (intent.category && intent.category !== "전체") {
      setActiveGroup(intent.category);
      setBuyerStep((old) => ({ ...old, category: intent.category }));
    }
    if (!intent.invalidInput && intent.count > 0 && intent.price) {
      setBuyerStep((old) => ({ ...old, budget: intent.priceLabel || old.budget }));
    }
    setSelectedDeal(null);
    if (intent.invalidInput) {
      setToast(`검색어를 이해하지 못했습니다 · 제품 그룹에서 직접 선택하세요`);
    } else if (intent.count === 0) {
      setToast(`🚨 검색 결과 없음: ${text} · 추천어/관련 카테고리를 확인하세요`);
    } else if (intent.onlyPrice) {
      setToast(`${intent.priceLabel} 상품 ${intent.count}개 발견 · 어느 제품군인지 선택하세요`);
    } else if (intent.companyCounts.length > 1 && !intent.brand) {
      setToast(`${text} 검색 · 회사/제품군을 검색창 연관검색어에서 먼저 선택하세요`);
    } else {
      setToast(`${text} 검색 결과 ${intent.count}개 · 바로 아래에서 확인`);
    }
    gotoProductsRoom();
  };

  const runAdvancedSearch = () => {
    const words = [advancedSearch.product, advancedSearch.brand, advancedSearch.broadcast].filter(Boolean).join(" ").trim();
    setQuery(words);
    setBuyerStep((old) => ({
      ...old,
      category: advancedSearch.category || "전체",
      budget: advancedSearch.priceBand || "전체금액",
    }));
    setActiveGroup(advancedSearch.category && advancedSearch.category !== "전체" ? advancedSearch.category : "전체");
    const text = [words, advancedSearch.priceBand !== "전체금액" ? advancedSearch.priceBand : ""].filter(Boolean).join(" ").trim();
    setSearchIntent(buildSearchIntent(text || words || advancedSearch.category, allProducts));
    setSearchOpen(false);
    setSelectedDeal(null);
    setToast(`상세검색 적용: ${words || "전체"} · ${advancedSearch.category} · ${advancedSearch.priceBand}`);
    gotoProductsRoom();
  };

  const sidebarClick = (id) => {
    if (id === "seller") setSellerOpen(true);
    else scrollTo(id);
  };
  const selectDealZone = (z) => {
    const nextCategory = z.group || "전체";
    const nextBudget = z.budget || "전체금액";
    setSelectedDeal(z);
    setActiveGroup(nextCategory);
    setBuyerStep({ category: nextCategory, budget: nextBudget, company: "전체회사" });
    setQuery("");
    setToast(`${z.title} 선택 → 구매결정센터로 이동`);
    gotoRoom(4);
  };

  const handleFile = (type, file) => {
    if (!file) return;
    setPreview((old) => ({ ...old, [type]: URL.createObjectURL(file) }));
    setToast(`${type === "image" ? "상품 이미지" : "상품 영상"} 업로드 미리보기 준비 완료`);
  };
  const submit = (e) => {
    e.preventDefault();
    if (!form.consent) {
      setToast("판매자 등록 전 개인정보/상품검증 동의가 필요합니다");
      return;
    }
    setToast(`${form.company || "판매자"} / ${form.name || "신규 상품"} → ${detected} 검토 대기열 등록 · 관리자 승인 전까지 30개 상품군 구조에는 반영하지 않습니다 · ${sellerRisk}`);
    setSellerOpen(false);
    setActiveOperation("판매자센터");
    // V2 안전 구조: 판매자 신규 상품군은 activeGroup에 직접 넣지 않는다.
    // AI 검토 + 관리자 승인 뒤에만 정식 상품군으로 추가한다.
  };

  const instantSuggestions = getInstantSearchSuggestions(query, allProducts);
  const applyInstantSuggestion = (word) => {
    setQuery(word);
    const next = buildSearchIntent(word, allProducts);
    setSearchIntent(next);
    if (next.category && next.category !== "전체") {
      setActiveGroup(next.category);
      setBuyerStep((old) => ({ ...old, category: next.category }));
    }
    setSelectedDeal(null);
    setToast(`${word} 검색어 적용 · 전체상품관 결과 확인`);
    gotoProductsRoom();
  };

  return (
    <main className={`dn-home room-${currentRoom}${searchIntent.invalidInput ? " search-invalid-mode" : ""}`}>
      <div className="future-bg" />
      {/* 2026-06-08: 메인홈 왼쪽 고정 사이드바 제거. 메뉴는 상단/햄버거/전체상품관 필터만 사용합니다. */}

      <section className="main-shell" id="top">
        <header className="top-panel neural-border mobile-commerce-top">
          <div className="brand-mark dn-brand-lockup single-brand compact-brand-no-logo">
            <div><b>대정넥스트</b><span>AI LIVE · 상품비교 · 신뢰검증</span></div>
          </div>
          <div className="top-search-wrap search-control-box">
            <div className="search-inline-row">
              <div className="search-glass-shell">
                <span className="search-lux-icon" aria-hidden="true">⌕</span>
                <input className="main-search top-search" value={query} onChange={(e) => { setQuery(e.target.value); setSearchOpen(true); if (searchIntent.invalidInput) setSearchIntent({ active: false, invalidInput: false, original: "", count: 0, categoryCounts: [], companyCounts: [], suggestions: [] }); }} onKeyDown={(e) => { if (e.key === "Enter") runSearch(); }} placeholder="예) TV / 세탁기 / 냉장고 / 삼성TV / 10만원대 제품" aria-label="상품 검색어" />
              </div>
            </div>
            {instantSuggestions.length > 0 && (
              <div className="instant-search-card button-side-suggestions" aria-label="연관검색어">
                <b>연관검색어</b>
                <div>
                  {instantSuggestions.map((word) => (
                    <button key={word} type="button" onClick={() => applyInstantSuggestion(word)}>{word}</button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <nav className="desktop-nav"><button onClick={() => gotoRoomSection(1, "catalog")}>GOD 6 셀렉션</button><button onClick={gotoPromotionRoom}>특별관 · SPECIAL HALL</button><button onClick={() => gotoRoomSection(3, "products")}>전체상품관 · ALL PRODUCTS</button><button onClick={() => gotoRoomSection(4, "policy")}>구매결정 쇼룸 · PURCHASE</button><button onClick={() => gotoRoomSection(4, "policy")}>운영센터 · OPERATION</button></nav>
          <div className="account-area">
            {isLoggedIn ? (
              <button className="login-mini mypage-mini" type="button" onClick={() => navigate("/mypage")}>마이페이지</button>
            ) : (
              <button className="login-mini" type="button" onClick={() => navigate("/login")}>로그인</button>
            )}
            <button className="menu-dot" onClick={() => setMobileMenuOpen((v) => !v)} aria-label="전체 메뉴">☰</button>
            {mobileMenuOpen && (
              <div className="mobile-menu-panel neural-border">
                <button onClick={() => navigate("/notice")}>공지사항</button>
                {!isLoggedIn && <button type="button" onClick={() => navigate("/signup")}>회원가입</button>}
                <button onClick={() => navigate("/seller-signup")}>상품 판매 및 홍보 신청</button>
                <button onClick={() => navigate("/admin-login")}>관리자 로그인</button>
                {isLoggedIn && <button type="button" onClick={() => navigate("/mypage")}>마이페이지</button>}
                {isLoggedIn && <button type="button" onClick={() => { logout(); navigate("/"); }}>로그아웃</button>}
                <button className="danger-menu" onClick={() => { setActiveOperation("회원탈퇴"); scrollTo("policy"); }}>회원탈퇴</button>
              </div>
            )}
          </div>
        </header>

        <div className="category-zone neural-border" aria-label="GOD 6 셀렉션 상품군 이동">
          <div className="category-zone-head">
            <strong>GOD 6 셀렉션</strong>
            <span>{categoryPage + 1}/{categoryPages.length} · 10개씩 보기</span>
          </div>
          <div className="mobile-category-strip category-pager" aria-label="확장 카테고리">
            <button className="category-arrow" onClick={() => moveCategoryPage(-1)}>‹‹‹</button>
            {categoryPages[categoryPage].map((item) => (
              <button
                key={`${categoryPage}-${item.label}`}
                className={activeGroup === item.group ? "active" : ""}
                onClick={() => selectCategory(item)}
              >
                {item.label}
              </button>
            ))}
            <button className="category-arrow next-arrow" onClick={() => moveCategoryPage(1)}>{categoryPage === categoryPages.length - 1 ? "처음" : ">>>"}</button>
          </div>
        </div>

        {searchIntent.active && (
          <section className={searchIntent.count === 0 ? "search-result-panel neural-border no-result-alert" : "search-result-panel neural-border"} aria-live="polite">
            <div className="search-result-head">
              <span>{searchIntent.invalidInput ? "⚠️ 검색어 확인 필요" : searchIntent.count === 0 ? "🚨 검색 결과 없음" : "🔎 검색 결과 안내"}</span>
              <strong>{searchIntent.original}</strong>
              <em>{searchIntent.count}개 확인</em>
            </div>
            {searchIntent.invalidInput ? (
              <div className="search-empty-guide">
                <b>검색어를 이해하지 못했습니다.</b>
                <p>찾는 상품의 정확한 명칭을 입력하거나 아래 제품 그룹을 선택하세요.</p>
              </div>
            ) : searchIntent.count === 0 ? (
              <div className="search-empty-guide">
                <b>찾는 물건의 정확한 명칭을 입력하세요.</b>
                <p>아래 추천 상품군을 선택하세요. 원하는 품목이 없으면 검색창 연관검색어를 이용하세요.</p>
              </div>
            ) : searchIntent.onlyPrice ? (
              <div className="search-empty-guide price-guide">
                <b>{searchIntent.priceLabel} 상품을 찾았습니다.</b>
                <p>어느 제품군을 찾는지 먼저 선택하면 해당 가격대 상품만 보여줍니다.</p>
              </div>
            ) : (
              <div className="search-empty-guide">
                <b>검색 조건을 분석했습니다.</b>
                <p>{searchIntent.brand ? `${searchIntent.brand} · ` : ""}{searchIntent.category !== "전체" ? `${searchIntent.category} · ` : ""}{searchIntent.priceLabel || "전체금액"}</p>
              </div>
            )}
            <div className="search-choice-grid">
              {(searchIntent.invalidInput || (searchIntent.count === 0 && searchIntent.categoryCounts.length === 0)) && roomCategoryLabels.slice(0, 10).map((cat) => (
                <button key={`fallback-cat-${cat}`} type="button" onClick={() => selectCategory(cat)}>
                  <b>{cat}</b><span>상품군 선택</span>
                </button>
              ))}
              {searchIntent.categoryCounts.map(([cat, count]) => (
                <button key={`cat-${cat}`} type="button" onClick={() => { setActiveGroup(cat); setBuyerStep((old)=>({...old, category:cat})); setSelectedDeal(null); setToast(`${cat} 선택 · 전체상품관으로 이동`); gotoProductsRoom(); }}>
                  <b>{cat}</b><span>{count}개</span>
                </button>
              ))}
              {searchIntent.companyCounts.map(([company, count]) => (
                <button key={`company-${company}`} type="button" onClick={() => { setBuyerStep((old)=>({...old, company})); setSelectedDeal(null); setToast(`${company} 회사 선택 · 전체상품관으로 이동`); gotoProductsRoom(); }}>
                  <b>{company}</b><span>{count}개</span>
                </button>
              ))}
            </div>
            {searchIntent.suggestions.length > 0 && (
              <div className="suggestion-row">
                <span>추천 검색어</span>
                {searchIntent.suggestions.map((word) => (
                  <button key={word} type="button" onClick={() => { setQuery(word); const next = buildSearchIntent(word, allProducts); setSearchIntent(next); if (next.category && next.category !== "전체") { setActiveGroup(next.category); setBuyerStep((old)=>({...old, category:next.category})); } setSelectedDeal(null); setToast(`${word} 추천 검색 적용 · 전체상품관으로 이동`); gotoProductsRoom(); }}>
                    {word}
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        <div className="ticker neural-border"><div>{[...tickers, ...tickers].map((t, i) => <span key={i}>◆ {t}</span>)}</div></div>

        <section id="live" className={liveExpanded ? "hero-grid live-expanded" : "hero-grid"}>
          <article className="live-stage neural-border">
            <div className="corner lt"/><div className="corner rt"/><div className="corner lb"/><div className="corner rb"/>
            <span className="live-badge">LIVE ON AIR</span>
            <button className="video-frame live-touch-area" type="button" onClick={() => { setLiveExpanded(true); setToast("LIVE 상품 구매창 활성화 · 장바구니/바로구매 버튼이 열렸습니다"); }}>
              <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
              <div className="scan-line" />
              <div className="video-overlay"><strong>AI 추천쇼핑 LIVE</strong><em>실시간 구매판단 지원 방송</em></div>
            </button>
            <div className="live-buy-panel">
              <div>
                <span>방송상품</span>
                <strong>AI 생활 패키지</strong>
                <em>39,000원 · AI 신뢰도 96</em>
              </div>
              <div className="live-buy-actions">
                <button onClick={() => { setCartCount((v) => v + 1); setToast("방송상품이 장바구니에 담겼습니다"); }}>장바구니 담기</button>
                <button className="primary-buy" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiveExpanded(true); setToast("LIVE 상품 구매창 유지 · 화면 이동 없이 바로구매 준비"); }}>바로구매</button>
              </div>
            </div>
            <div className="next-live-schedule auto-roll" aria-label="방송시간 알림과 자동 롤링 LIVE 편성표">
              <div className="next-live-actions" aria-label="LIVE 편성표 열기">
                <button type="button" onClick={() => setScheduleOpen(true)}>📅 편성표</button>
              </div>
              <div className="next-live-ticker">
                <div className="next-live-track">
                  {[...scheduledLivePrograms.filter((item) => item.section === "오늘"), ...scheduledLivePrograms.filter((item) => item.section === "다음 1주일")].map((item, index) => (
                    <button
                      type="button"
                      className="next-live-item"
                      key={`${item.section}-${item.weekday}-${item.time}-${item.title}-${index}`}
                      onClick={() => { setActiveScheduleTab(item.section); setScheduleOpen(true); }}
                    >
                      <strong>{item.weekday}</strong>
                      <em>{item.time}</em>
                      <span>{item.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {scheduleOpen && (
              <div className="live-schedule-drawer" role="dialog" aria-label="LIVE 방송일정표">
                <div className="schedule-drawer-head">
                  <div>
                    <strong>LIVE 방송일정표</strong>
                    <span>지난 1주일 · 오늘 · 다음 1주일</span>
                  </div>
                  <button type="button" onClick={() => setScheduleOpen(false)}>×</button>
                </div>
                <div className="schedule-tabs" role="tablist" aria-label="방송 기간 선택">
                  {scheduleTabs.map((tab) => (
                    <button key={tab} type="button" className={activeScheduleTab === tab ? "active" : ""} onClick={() => setActiveScheduleTab(tab)}>
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="schedule-week-list">
                  {visibleSchedulePrograms.map((item, index) => (
                    <article className={`schedule-week-card ${item.status === "방송중" ? "on-air" : ""}`} key={`${item.section}-${item.weekday}-${item.time}-${index}`}>
                      <div className="schedule-week-time">
                        <b>{item.weekday}</b>
                        <span>{item.time}</span>
                      </div>
                      <div className="schedule-week-info">
                        <strong>{item.title}</strong>
                        <em>{item.channel} · {item.price} · {item.status}</em>
                      </div>
                      <div className="schedule-week-actions">
                        <button type="button" onClick={() => handleScheduleBell(item)}>🔔 알림</button>
                        <button type="button" className="order" onClick={() => handleScheduleOrder(item)}>바로주문</button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </article>
        </section>

        <div className="live-showcase-ad-rail neural-border" aria-label="쇼케이스 광고 배너">
          <div className="ad-track">
            <span>DAEJUNG NEXT 입점 브랜드 모집</span>
            <span>중소기업 LIVE 홍보관 준비중</span>
            <span>AI 신뢰검토 통과 상품 우선 노출</span>
            <span>오늘의 GOD 6 셀렉션 자동 편성</span>
            <span>판매자 인증 · 반품률 · 배송신뢰도 확인</span>
          </div>
        </div>

        <div className="toast-bar">✅ {toast}</div>

        <section id="catalog" className="section neural-border dn-showcase-room daily-represent-room showcase-room-top">
          <div className="section-title row-title compact-room-title">
            <div>
              <h2>GOD 6 셀렉션</h2>
              <p>30개 상품군 대표상품이 한 장면씩 회전합니다. 클릭하면 전체상품관 해당 상품군으로 이동합니다.</p>
            </div>
            <b className="showcase-count">30개 상품군 · 대표상품 자동회전</b>
          </div>

          <div className="room-chip-strip representative-chip-strip room-all-grid showcase-clean-grid" aria-label="쇼케이스 30개 상품군">
            {dailyShowcaseGroups.map((room, idx) => {
              const p = getShowcaseProduct(room, idx);
              const rankLabel = showcaseRankLabels[(showcaseSlide + idx) % 6];
              if (!p) return null;
              return (
                <button
                  key={`showcase-room-card-${room.category}`}
                  className="room-rotating-card showcase-bright-card dn-clean-product-card"
                  onClick={() => selectProductForDecision(p, `${room.category} ${rankLabel}`)}
                >
                  <img src={p.img} alt="" />
                  <span className={`premium-rank-badge rank-${(showcaseSlide + idx) % 6}`}>{rankLabel}<i>✨</i></span>
                  <strong>{p.name}</strong>
                  <small className="showcase-price-line"><em>{p.company}</em><strong>{money(p.price)}</strong><i>-{p.sale || 20}%</i><i>{(p.sale || 0) >= 45 ? "반값" : (p.tag || "특가")}</i><i>신뢰확인</i></small>
                </button>
              );
            })}
          </div>
        </section>

        <section id="promo-hub" className="section neural-border dn-promo-hub">
          <div className="section-title row-title compact-room-title">
            <div>
              <h2>홍보관 · PROMOTION HALL</h2>
              <p>자영업자·중소기업·기업홍보·지역상품을 영상 중심으로 보여주는 공간입니다.</p>
            </div>
            <b className="showcase-count">휴대폰 영상 홍보 · 상품보기 · 비교구매</b>
          </div>

          <div className="promo-video-grid" aria-label="홍보관 영상 카드">
            {["자영업자", "중소기업", "기업홍보", "지역상품"].map((label, idx) => {
              const p = allProducts[(idx * 7) % allProducts.length] || allProducts[idx];
              if (!p) return null;
              return (
                <button key={`promo-video-${label}`} className="promo-video-card" onClick={() => selectProductForDecision(p, `${label} 홍보관`)}>
                  <img src={p.img} alt="" />
                  <span className="video-promo-corner">▶ 영상홍보</span>
                  <strong>{label}</strong>
                  <em>{p.company} · {p.name}</em>
                  <small>상품보기 · 비교하기 · 신뢰확인</small>
                </button>
              );
            })}
          </div>
        </section>


        <section id="daily-discount-rooms" className="section neural-border daily-discount-room promo-room-bottom dn-special-zone">
          <div className="section-title row-title compact-room-title">
            <div>
              <h2>특별관 · SPECIAL HALL</h2>
              <p>반값특가·특별할인·라이브특가·오늘의할인 상품을 여러 개씩 진열합니다.</p>
            </div>
            <b className="showcase-count">할인상품 · 라이브특가 · 공동구매</b>
          </div>

          <div className="special-row-wrap">
            {["반값특가", "특별할인", "라이브특가", "오늘의할인"].map((label, rowIdx) => {
              const rowItems = [...allProducts]
                .filter((p) => label === "반값특가" ? (p.sale || 0) >= 45 : label === "라이브특가" ? (p.tag === "라이브특가" || (p.sale || 0) >= 25) : (p.sale || 0) >= 10)
                .sort((a, b) => (b.sale || 0) - (a.sale || 0))
                .slice(rowIdx * 6, rowIdx * 6 + 8);
              const fallback = allProducts.slice(rowIdx * 8, rowIdx * 8 + 8);
              const items = rowItems.length ? rowItems : fallback;
              return (
                <div className="special-product-row" key={`special-row-${label}`}>
                  <div className="special-row-title">
                    <strong>{label}</strong>
                    <span>전체상품관에서 올라온 선별 상품</span>
                  </div>
                  <div className="special-scroll">
                    {items.map((p) => (
                      <button key={`${label}-${p.name}`} className="special-product-card" onClick={() => selectProductForDecision(p, `${label} 특별관`)}>
                        <img src={p.img} alt="" />
                        <strong>{p.name}</strong>
                        <em>{money(p.price)} <i>-{p.sale || 20}%</i><i>{label}</i></em>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="products" className="section neural-border product-section">
          <div className="section-title row-title"><div><span>전체상품관</span><h2>{activeGroup === "전체" ? "전체상품관" : `${activeGroup} 전체상품관`}</h2><p>검색·연관검색어·카테고리에서 들어온 모든 상품의 원본 목록입니다.</p></div><button onClick={() => { setActiveGroup("전체"); setSelectedDeal(null); setQuery(""); setBuyerStep({ category: "전체", budget: "전체금액", company: "전체회사" }); }}>전체보기</button></div>
          {selectedDeal && (
            <div className="selected-deal-panel">
              <div>
                <span>선택된 대표상품</span>
                <strong>{selectedDeal.title}</strong>
                <p>{selectedDeal.company} · {selectedDeal.price} · {selectedDeal.sub}</p>
              </div>
              <b>{selectedDeal.group} / {selectedDeal.budget}</b>
            </div>
          )}
          <div className="dn-market-layout">
            <aside className="dn-market-sidebar">
              <b>필터</b>
              <span>카테고리</span>
              <div className="sidebar-filter-pills">{productGroups.slice(0, 16).map((g)=><button className={activeGroup===g ? "active" : ""} key={`side-${g}`} onClick={()=>{ setActiveGroup(g); setBuyerStep((old)=>({...old, category:g})); setSelectedDeal(null); setSearchIntent((old)=>({...old, active:false})); setToast(`${g} 선택 · 전체상품관 해당 상품군으로 이동`); }}>{g}</button>)}</div>
              <span>가격</span>
              <div className="sidebar-filter-pills">{["3만원 이하", "3만~10만원", "10만~50만원", "50만~100만원", "100만원 이상"].map((v)=><button key={v} onClick={()=>setBuyerStep((old)=>({...old, budget:v}))}>{v}</button>)}</div>
              <span>정렬</span>
              <div className="sidebar-filter-pills compact"><button>인기순</button><button>할인순</button><button>신뢰확인</button><button>AI추천</button></div>
            </aside>
            <div className="dn-market-main">
              <div className="group-rail">{productGroups.map((g)=><button className={activeGroup===g ? "active" : ""} key={g} onClick={()=>{ setActiveGroup(g); setBuyerStep((old)=>({...old, category:g})); setSelectedDeal(null); setSearchIntent((old)=>({...old, active:false})); setToast(`${g} 선택 · 전체상품관 안에서 필터만 변경`); }}>{g}</button>)}</div>
              <div className="market-ad-line"><span>오늘 인기</span><span>AI추천</span><span>신규상품</span><span>전체상품</span><span>비교상품 자동표시</span></div>
              <div className="market-curation-row">
                <strong>오늘 인기</strong>
                <div>{displayedProducts.slice(0, 6).map((p)=><button key={`popular-${p.name}`} onClick={()=>selectProductForDecision(p, "오늘 인기")}><img src={p.img} alt=""/><span>{p.name}</span></button>)}</div>
              </div>
              <div className="market-curation-row">
                <strong>AI추천</strong>
                <div>{displayedProducts.slice(6, 12).map((p)=><button key={`ai-${p.name}`} onClick={()=>selectProductForDecision(p, "AI추천")}><img src={p.img} alt=""/><span>{p.name}</span></button>)}</div>
              </div>
              <div className="result-note">전체상품관 전체 {filtered.length}개 중 우선 {displayedProducts.length}개 표시 · 일반상품/할인상품/LIVE상품 모두 포함</div>
          {displayedProducts.length === 0 ? (
            <div className="product-empty-state neural-border" role="status" aria-live="polite">
              <strong>검색 결과 없음</strong>
              <h3>찾는 상품의 정확한 명칭을 입력하세요.</h3>
              <p>예: TV, 세탁기, 냉장고, 삼성TV처럼 실제 상품명을 입력하면 상품이 표시됩니다.</p>
              <p>원하는 상품이 없다면 아래 카테고리를 선택하거나 검색창의 연관검색어를 이용하세요.</p>
              <div className="empty-category-actions">
                {roomCategoryLabels.slice(0, 10).map((cat) => (
                  <button key={`empty-${cat}`} type="button" onClick={() => selectCategory(cat)}>{cat}</button>
                ))}
              </div>
            </div>
          ) : (
            <div className="product-grid">{displayedProducts.map((p)=><article className="product-card neural-card" key={p.name}><div className="product-media"><img src={p.img} alt=""/><span>{p.tag}</span></div><div className="product-info"><h3>{p.name}</h3><p>{p.company} · {p.spec}</p><div className="price-badge-line"><strong>{money(p.price)}</strong><i>-{p.sale}%</i><i>신뢰확인</i><em>신뢰도 {p.trust}</em></div><div className="product-action-pair"><button onClick={()=>selectProductForDecision(p, "전체상품관 상품확인")}>상품 확인</button><button type="button" className="trust-open-btn" onClick={()=>setTrustModal(p)}>신뢰 확인</button></div></div></article>)}</div>
          )}
            </div>
          </div>
        </section>

        <section id="buyer" className="section neural-border buyer-control">
          <div className="section-title row-title">
            <div>
              <span>상품 필터</span>
              <h2>빠른 상품 선택</h2>
              <p>상품을 먼저 보고, 필요할 때만 조건을 좁힙니다.</p>
            </div>
            <button onClick={() => { setBuyerStep({ category: "전체", budget: "전체금액", company: "전체회사" }); setActiveGroup("전체"); setQuery(""); setSelectedDeal(null); }}>초기화</button>
          </div>
          <div className="buyer-steps">
            <div>
              <b>1차 제품군</b>
              <div className="buyer-pills">{productGroups.map((v) => <button key={v} className={buyerStep.category === v ? "active" : ""} onClick={() => selectCategory(v)}>{v}</button>)}</div>
            </div>
            <div>
              <b>2차 구매금액</b>
              <div className="buyer-pills">{["전체금액", "3만원 이하", "3만~10만원", "10만~50만원", "50만~100만원", "100만원 이상"].map((v) => <button key={v} className={buyerStep.budget === v ? "active" : ""} onClick={() => { setBuyerStep({ ...buyerStep, budget: v }); setToast(`${v} 가격대 선택 · 화면 이동 없이 필터만 변경`); }}>{v}</button>)}</div>
            </div>
            <div>
              <b>3차 회사별</b>
              <div className="buyer-pills">{["전체회사", ...Array.from(new Set(allProducts.map((p) => p.company)))].map((v) => <button key={v} className={buyerStep.company === v ? "active" : ""} onClick={() => { setBuyerStep({ ...buyerStep, company: v }); setToast(`${v} 선택 · 화면 이동 없이 필터만 변경`); }}>{v}</button>)}</div>
            </div>
          </div>
          <div className="buyer-result-line">
            현재 선택: <strong>{buyerStep.category}</strong> · <strong>{buyerStep.budget}</strong> · <strong>{buyerStep.company}</strong> → 검색 결과 <b>{filtered.length}</b>개
          </div>
        </section>

        <footer className="company-footer neural-border" id="policy">
          <h2>고객센터</h2>
          <p>문의·반품·교환·배송·분쟁처리·신고를 한 곳에서 확인하는 DAEJUNG NEXT 고객지원 영역입니다.</p>
          <div className="customer-service-grid">
            <button type="button" onClick={() => setToast("1:1 문의 접수 화면 준비")}>1:1 문의</button>
            <button type="button" onClick={() => setToast("반품·교환 절차 안내")}>반품·교환</button>
            <button type="button" onClick={() => setToast("배송조회 화면 준비")}>배송조회</button>
            <button type="button" onClick={() => setToast("판매자/상품 신고 접수")}>신고센터</button>
            <button type="button" onClick={() => setToast("분쟁처리 기준 확인")}>분쟁처리</button>
            <button type="button" onClick={() => setToast("자주 묻는 질문 확인")}>FAQ</button>
          </div>
          <div className="customer-info-line">
            <span>운영시간 09:00~18:00</span>
            <span>이메일 support@daejungnext.com</span>
            <span>AI 신뢰검토 후 상담 연결</span>
          </div>
        </footer>

      </section>

      <button className="dn-floating-cart" type="button" onClick={() => { setToast(`장바구니 ${cartCount}개 · 구매결정센터에서 실시간 합산 확인`); gotoRoom(4); }}>
        <span>🛒</span>
        <b>{cartCount}</b>
        <em>장바구니</em>
      </button>

      <aside className={sellerOpen ? "seller-drawer open" : "seller-drawer"} id="seller">
        <div className="drawer-head"><strong>판매자 상품 직접 입력</strong><button onClick={() => setSellerOpen(false)}>닫기</button></div>
        <p>판매자센터에서 입력하고, AI 검증 후 맞는 제품군으로 이동합니다.</p>
        <form onSubmit={submit} className="seller-form">
          <input value={form.company} onChange={(e)=>setForm({...form, company:e.target.value})} placeholder="회사명" />
          <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="상품명" />
          <input value={form.price} onChange={(e)=>setForm({...form, price:e.target.value})} placeholder="금액" />
          <input value={form.discount} onChange={(e)=>setForm({...form, discount:e.target.value})} placeholder="할인율" />
          <input value={form.spec} onChange={(e)=>setForm({...form, spec:e.target.value})} placeholder="제원/주의사항 입력" />
          <div className="component-input-grid" aria-label="구성품 3개 입력">
            <input value={form.component1} onChange={(e)=>setForm({...form, component1:e.target.value})} placeholder="구성품 1: 본품 예) 모니터" />
            <input value={form.component2} onChange={(e)=>setForm({...form, component2:e.target.value})} placeholder="구성품 2: 기본 구성 예) 전원선" />
            <input value={form.component3} onChange={(e)=>setForm({...form, component3:e.target.value})} placeholder="구성품 3: 추가 구성 예) 설명서/사은품" />
          </div>
          <input value={form.requestedGroup} onChange={(e)=>setForm({...form, requestedGroup:e.target.value})} placeholder="찾는 제품군이 없으면 여기에 요청 예: 가공농산물" />
          <input value={`AI 분류: ${detected} · ${sellerRisk}`} readOnly />
          <div className="seller-guard-box">
            <b>등록 전 자동 차단 기준</b>
            <span>본품/부속품 혼동, 허위·과장, 구성품 누락, 이미지 불일치, 원산지/성분/제원 누락은 노출 보류됩니다.</span>
          </div>
          <label className="seller-consent"><input type="checkbox" checked={form.consent} onChange={(e)=>setForm({...form, consent:e.target.checked})} /> 판매자 검증과 상품 신뢰검토, 개인정보 보호 원칙을 확인했습니다.</label>
          <label>상품그림<input type="file" accept="image/*" onChange={(e)=>handleFile("image", e.target.files?.[0])} /></label>
          <label>상품영상<input type="file" accept="video/*" onChange={(e)=>handleFile("video", e.target.files?.[0])} /></label>
          <button className="submit-btn">AI 검증 대기열 등록</button>
        </form>
        <div className="drawer-preview"><div>{preview.image ? <img src={preview.image} alt="" /> : <span>이미지 미리보기</span>}</div><div>{preview.video ? <video src={preview.video} controls /> : <span>영상 미리보기</span>}</div></div>
      </aside>
      {trustModal && (
        <div className="trust-modal-backdrop" onClick={() => setTrustModal(null)}>
          <section className="trust-modal neural-border" onClick={(e) => e.stopPropagation()}>
            <button className="trust-modal-close" onClick={() => setTrustModal(null)}>닫기</button>
            <span>AI 신뢰검토</span>
            <h2>{trustModal.name}</h2>
            <p>{trustModal.company} · {trustModal.group}</p>
            <div className="trust-modal-grid">
              <article><b>판매자 인증</b><em>사업자/계좌/연락처 확인 대기</em></article>
              <article><b>상품 일치도</b><em>이미지·제원·구성품 교차검증</em></article>
              <article><b>오인판매 위험</b><em>본품/부속품 혼동 자동 탐지</em></article>
              <article><b>현재 신뢰도</b><em>{trustModal.trust}점</em></article>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
