import SimpleListPage from "../components/SimpleListPage";

export default function GrowthRoadmap() {
  return (
    <SimpleListPage
      title="성장 로드맵"
      subtitle="대정넥스트를 초거대 플랫폼으로 키우기 위한 단계"
      items={[
        "1단계: 로컬 MVP 구조 완성",
        "2단계: Firebase/Supabase DB 연결",
        "3단계: 실제 로그인/상품/주문/결제 구조",
        "4단계: 라이브커머스/AI 추천 고도화",
        "5단계: Neural Core 기반 차별화",
        "6단계: 정부지원/투자/특허 문서 패키지",
        "7단계: Cloudflare 배포 및 도메인 연결",
        "8단계: 실증데이터 기반 반복 검증"
      ]}
    />
  );
}
