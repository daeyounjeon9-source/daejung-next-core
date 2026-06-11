import Layout from "../components/Layout";

export default function DeployChecklist() {
  const list = [
    "Firebase 또는 Supabase 프로젝트 생성",
    "환경변수 .env 파일 구성",
    "로그인 인증 연결",
    "DB 테이블/컬렉션 생성",
    "이미지 저장소 연결",
    "Cloudflare Pages 연결",
    "daejungnext.com 도메인 연결",
    "SSL 및 보안 설정 확인"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>배포 준비 체크리스트</h1>

        {list.map((item, index) => (
          <div key={index} style={card}>✅ {item}</div>
        ))}
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
