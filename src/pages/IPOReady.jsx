import Layout from "../components/Layout";

export default function IPOReady() {
  const items = [
    "회계 투명성 구조",
    "내부 통제 시스템",
    "투자자 리포트 자동화",
    "AI 기반 운영 감사",
    "상장 준비 문서 패키지"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>IPO/상장 준비</h1>

        {items.map(i => (
          <div key={i} style={card}>📈 {i}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"22px",
  marginTop:"14px",
  borderRadius:"18px"
};
