import SimpleListPage from "../components/SimpleListPage";

export default function CouponPromotion() {
  return (
    <SimpleListPage
      title="쿠폰/프로모션"
      subtitle="회원 유입과 구매 전환을 위한 혜택 관리"
      items={[
        "신규가입 쿠폰",
        "라이브 방송 쿠폰",
        "AI 추천 상품 할인",
        "포인트 전환 프로모션",
        "기간 한정 이벤트"
      ]}
    />
  );
}
