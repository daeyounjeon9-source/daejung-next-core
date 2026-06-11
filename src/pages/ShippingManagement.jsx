import SimpleListPage from "../components/SimpleListPage";

export default function ShippingManagement() {
  return (
    <SimpleListPage
      title="배송 관리"
      subtitle="배송 준비, 출고, 배송 추적 관리"
      items={[
        "배송 준비 12건",
        "출고 완료 8건",
        "배송 지연 2건",
        "물류사 연동 준비"
      ]}
    />
  );
}
