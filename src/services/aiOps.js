export function generateNotice() {
  return {
    title: "AI 자동 공지",
    type: "AI",
    content: "오늘 추천 상품과 라이브 방송 상태가 안정적으로 운영되고 있습니다.",
    createdAt: new Date().toLocaleString()
  };
}

export function generateReport() {
  return {
    summary: "AI 운영 상태 양호",
    risk: "낮음",
    recommendation: "라이브 상품 A 노출을 강화하세요.",
    conversion: "38%",
    createdAt: new Date().toLocaleString()
  };
}

export function detectRisks() {
  return [
    { level: "낮음", label: "결제 이상 없음" },
    { level: "중간", label: "환불 정책 문서 보강 필요" },
    { level: "낮음", label: "서버 상태 정상" },
    { level: "중간", label: "개인정보 처리방침 준비 필요" }
  ];
}

export function getUserBehavior() {
  return [
    "VIP 회원이 AI 추천 상품을 조회",
    "신규 사용자가 라이브 방송 입장",
    "장바구니 담기 18건 증가",
    "포인트 적립 이벤트 반응 상승"
  ];
}

export function addActionLog(message) {
  const key = "dn_action_logs";
  const saved = JSON.parse(localStorage.getItem(key) || "[]");
  const next = [{ id: Date.now(), message, createdAt: new Date().toLocaleString() }, ...saved];
  localStorage.setItem(key, JSON.stringify(next));
  return next;
}

export function getActionLogs() {
  return JSON.parse(localStorage.getItem("dn_action_logs") || "[]");
}
