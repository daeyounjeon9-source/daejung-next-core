import Layout from "../components/Layout";

export default function PatentPackage() {
  const patents = [
    "AI 추천 기반 라이브 구조",
    "다중 AI 오케스트레이션 구조",
    "Neural Core 학습 구조",
    "리스크 감지 자동화 구조",
    "AI CRM 행동 분석 구조"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>특허 패키지 구조</h1>

        {patents.map(p => (
          <div key={p} style={card}>📑 {p}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"20px",
  marginTop:"14px",
  borderRadius:"16px"
};
