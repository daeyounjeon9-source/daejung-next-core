import SimpleListPage from "../components/SimpleListPage";

export default function RefundExchange() {
  return (
    <SimpleListPage
      title="환불/교환 관리"
      subtitle="고객 보호와 정산 리스크 관리"
      items={[
        "환불 요청 3건",
        "교환 요청 1건",
        "처리 완료 14건",
        "약관 기반 자동 판단 준비"
      ]}
    />
  );
}
