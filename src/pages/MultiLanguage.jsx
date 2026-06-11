import Layout from "../components/Layout";

export default function MultiLanguage() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>다국어 준비 구조</h1>

        <div style={card}>한국어</div>
        <div style={card}>영어</div>
        <div style={card}>일본어</div>
        <div style={card}>중국어</div>
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
