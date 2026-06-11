import SimpleListPage from "../components/SimpleListPage";

export default function AdsManager() {
  return (
    <SimpleListPage
      title="광고 관리"
      subtitle="플랫폼 내부 광고와 외부 광고 채널 관리"
      items={[
        "메인 배너 광고",
        "라이브 방송 광고",
        "상품 추천 광고",
        "외부 SNS 광고",
        "성과 측정 대시보드"
      ]}
    />
  );
}
