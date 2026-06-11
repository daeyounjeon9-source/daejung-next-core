import Layout from "../components/Layout";

export default function IRCenter() {
  const docs = [
    "IR 소개서",
    "사업계획서",
    "투자 제안서",
    "시장 분석 자료",
    "AI 차별성 자료"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>투자/IR 센터</h1>

        {docs.map(d => (
          <div key={d} style={card}>📄 {d}</div>
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
