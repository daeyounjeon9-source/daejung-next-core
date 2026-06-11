import Layout from "../components/Layout";

export default function AICRM() {
  const customers = [
    { name:"고객 A", score:92, action:"VIP 추천" },
    { name:"고객 B", score:74, action:"쿠폰 추천" },
    { name:"고객 C", score:58, action:"재방문 유도" }
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI CRM 고객관리</h1>

        {customers.map(c => (
          <div key={c.name} style={card}>
            <h2>{c.name}</h2>
            <p>AI 점수: {c.score}</p>
            <p>추천 액션: {c.action}</p>
          </div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"24px",
  marginTop:"16px",
  borderRadius:"18px",
  border:"1px solid #263761"
};
