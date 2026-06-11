import Layout from "../components/Layout";

export default function MobileAppReady() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>모바일 앱 준비</h1>

        <div style={card}>React Native 연동 준비</div>
        <div style={card}>PWA 구조 준비</div>
        <div style={card}>푸시 알림 준비</div>
        <div style={card}>모바일 최적화 UI 준비</div>
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
