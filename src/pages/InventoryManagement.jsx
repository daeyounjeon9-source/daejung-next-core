import SimpleListPage from "../components/SimpleListPage";

export default function InventoryManagement() {
  return (
    <SimpleListPage
      title="재고 관리"
      subtitle="상품 재고와 품절 위험을 관리합니다."
      items={[
        "AI 추천 패키지: 디지털 상품",
        "라이브 상품 A: 120개",
        "프리미엄 멤버십: 무제한",
        "품절 위험 알림 준비"
      ]}
    />
  );
}
