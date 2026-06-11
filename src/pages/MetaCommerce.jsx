import Layout from "../components/Layout";

export default function MetaCommerce() {
  const items = [
    "가상 쇼핑 공간",
    "AI 상점",
    "실시간 아바타 구매",
    "메타 라이브 방송"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Meta Commerce</h1>
        {items.map(i => <div key={i} style={card}>🪐 {i}</div>)}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#17244A)",
  padding:"24px",
  marginTop:"14px",
  borderRadius:"18px"
};
