import Layout from "../components/Layout";

export default function PatentRoadmap() {
  const list = [
    "AI 기반 라이브커머스 추천 구조",
    "다중 AI 오케스트레이션 운영 구조",
    "Neural Core 판단 이력 학습 구조",
    "코인/포인트 연동 커머스 구조",
    "운영 리스크 자동 감지 구조"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>특허/사업 문서 로드맵</h1>
        {list.map(item => <div key={item} style={card}>📄 {item}</div>)}
      </main>
    </Layout>
  );
}

const card = { background:"#111A35", padding:"20px", marginTop:"14px", borderRadius:"16px" };
