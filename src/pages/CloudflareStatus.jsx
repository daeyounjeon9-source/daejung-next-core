import Layout from "../components/Layout";

export default function CloudflareStatus() {
  const steps = [
    "GitHub 저장소 준비",
    "Cloudflare Pages 프로젝트 생성",
    "빌드 명령어 npm run build 설정",
    "출력 폴더 dist 설정",
    "도메인 daejungnext.com 연결",
    "SSL 자동 적용 확인"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>Cloudflare 배포 상태</h1>

        {steps.map((s, i) => (
          <div key={i} style={card}>☁ {s}</div>
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
