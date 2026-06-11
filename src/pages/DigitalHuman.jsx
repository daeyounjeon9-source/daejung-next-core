import Layout from "../components/Layout";

export default function DigitalHuman() {
  const humans = [
    "AI 방송 진행자",
    "AI 고객 응대",
    "AI 판매자",
    "AI 교육 도우미"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI Human / 디지털휴먼</h1>
        {humans.map(h => <div key={h} style={card}>🧑‍💻 {h}</div>)}
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
