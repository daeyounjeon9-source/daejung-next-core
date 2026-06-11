import SimpleListPage from "../components/SimpleListPage";

export default function GovernmentSupport() {
  return (
    <SimpleListPage
      title="정부지원/창업지원 관리"
      subtitle="지원사업 신청, 사용계획, 증빙, 리스크 관리"
      items={[
        "창업지원금 신청 준비",
        "사업계획서 항목 정리",
        "정부지원금 사용 가능/불가 항목 점검",
        "운영 사업자와 특허 사업자 역할 분리 검토",
        "증빙 자료 관리"
      ]}
    />
  );
}
