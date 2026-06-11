import Layout from "../components/Layout";

export default function FutureCity() {
  const cities = [
    "AI 미래도시",
    "메타 플랫폼",
    "AI 시민 서비스",
    "실시간 도시 데이터"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>미래도시 / 메타 플랫폼</h1>
        {cities.map(c => <div key={c} style={card}>🏙 {c}</div>)}
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
