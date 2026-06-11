import Layout from "../components/Layout";

export default function GlobalExpansion() {
  const countries = [
    "한국",
    "미국",
    "일본",
    "중국",
    "동남아"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>글로벌 확장 센터</h1>

        {countries.map(c => (
          <div key={c} style={card}>🌍 {c} 플랫폼 준비</div>
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
