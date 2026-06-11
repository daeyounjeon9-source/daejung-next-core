import SimpleListPage from "../components/SimpleListPage";

export default function PolicyCenter() {
  return (
    <SimpleListPage
      title="약관/개인정보 정책"
      subtitle="서비스 운영에 필요한 정책 문서 초안 관리"
      items={[
        "서비스 이용약관",
        "개인정보 처리방침",
        "판매자 이용약관",
        "환불/교환 정책",
        "AI 추천 서비스 고지",
        "라이브커머스 운영정책"
      ]}
    />
  );
}
