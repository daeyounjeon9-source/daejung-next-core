import AdminLayout from "../components/AdminLayout";
import { firebaseReady, firebaseConfig } from "../config/firebaseConfig";
import { supabaseReady, supabaseConfig } from "../config/supabaseConfig";
import { cloudflareConfig } from "../config/cloudflareConfig";

export default function AdminEnvironment() {
  return (
    <AdminLayout>
      <section className="admin-top">
        <div>
          <h1>환경 설정</h1>
          <p>Firebase, Supabase, Cloudflare 연결 준비 상태입니다.</p>
        </div>
      </section>

      <section className="admin-kpi">
        <div className="kpi-card"><span>Firebase</span><strong>{firebaseReady ? "READY" : "대기"}</strong></div>
        <div className="kpi-card"><span>Supabase</span><strong>{supabaseReady ? "READY" : "대기"}</strong></div>
        <div className="kpi-card"><span>Cloudflare</span><strong>준비</strong></div>
        <div className="kpi-card"><span>Domain</span><strong>{cloudflareConfig.domain}</strong></div>
      </section>

      <div className="admin-grid">
        <div className="admin-panel">
          <h2>Firebase 인증 상태</h2>
          <div className="log-item">현재 상태: {firebaseReady ? "연결 준비 완료" : "환경값 확인 필요"}</div>
          <div className="log-item">관리자 화면에는 내부 설정값을 표시하지 않습니다.</div>
        </div>

        <div className="admin-panel">
          <h2>Supabase 데이터 상태</h2>
          <div className="log-item">현재 상태: {supabaseReady ? "연결 준비 완료" : "환경값 확인 필요"}</div>
          <div className="log-item">보안상 설정값은 숨김 처리했습니다.</div>
        </div>
      </div>

      <div className="admin-panel" style={{ marginTop:"18px" }}>
        <h2>Cloudflare Pages 설정</h2>
        <div className="log-item">프로젝트: {cloudflareConfig.projectName}</div>
        <div className="log-item">빌드: {cloudflareConfig.buildCommand}</div>
        <div className="log-item">출력: {cloudflareConfig.outputDirectory}</div>
        <div className="log-item">도메인: {cloudflareConfig.domain}</div>
      </div>
    </AdminLayout>
  );
}
