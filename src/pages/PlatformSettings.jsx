import Layout from "../components/Layout";

export default function PlatformSettings() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>플랫폼 설정</h1>

        <div style={card}>브랜드명: DAEJUNG NEXT</div>
        <div style={card}>기본 테마: 다크 / 블루 글로우</div>
        <div style={card}>운영 모드: 개발 테스트</div>
        <div style={card}>도메인: daejungnext.com 준비</div>
        <div style={card}>AI 엔진: Neural Core 로드맵 반영</div>
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"20px",
  marginTop:"14px",
  borderRadius:"16px",
  border:"1px solid #263761"
};
