import SimpleListPage from "../components/SimpleListPage";

export default function LegalTaxCenter() {
  return (
    <SimpleListPage
      title="법무/세무 리스크 센터"
      subtitle="법인 전환, 사업자 분리, 세무, 계약 리스크 점검"
      items={[
        "개인사업자/법인 전환 리스크",
        "와이프 사업자 운영 역할 분리 리스크",
        "특허권 보유 주체 검토",
        "정부지원금 수령 후 지분/대표자 리스크",
        "플랫폼 약관 및 개인정보 리스크",
        "정산/매출/부가세 관리 리스크"
      ]}
    />
  );
}
