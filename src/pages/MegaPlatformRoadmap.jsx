import Layout from "../components/Layout";

export default function MegaPlatformRoadmap() {
  const steps = [
    "AI + 커머스 + 라이브 통합",
    "Neural Core 기반 차별화",
    "실증 데이터 기반 반복 개선",
    "정부지원/투자/특허 패키지 구축",
    "국내 플랫폼 확장",
    "글로벌 다국어 확장",
    "초거대 플랫폼 구조화"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>초거대 플랫폼 성장 구조</h1>

        {steps.map(s => (
          <div key={s} style={card}>🚀 {s}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#17244A)",
  padding:"22px",
  marginTop:"14px",
  borderRadius:"18px"
};
