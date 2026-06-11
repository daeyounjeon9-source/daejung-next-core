import AdminLayout from "../components/AdminLayout";

export default function AdminDeployChecklist() {
  const steps = [
    "GitHub 저장소 생성",
    "프로젝트 파일 업로드",
    "Cloudflare Pages 연결",
    "Build command: npm run build",
    "Output directory: dist",
    "환경변수 등록",
    "도메인 daejungnext.com 연결",
    "SSL 정상 확인",
    "Firebase/Supabase 키 연결",
    "최종 배포 테스트"
  ];

  return (
    <AdminLayout>
      <section className="admin-top">
        <div>
          <h1>배포 체크리스트</h1>
          <p>Cloudflare 배포와 실제 도메인 연결 준비 단계입니다.</p>
        </div>
      </section>

      <div className="admin-panel">
        {steps.map((step, index) => (
          <div className="log-item" key={step}>✅ {index + 1}. {step}</div>
        ))}
      </div>
    </AdminLayout>
  );
}
