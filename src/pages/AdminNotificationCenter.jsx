import AdminLayout from "../components/AdminLayout";
import AdminTopbar from "../components/AdminTopbar";

export default function AdminNotificationCenter() {
  const alerts = [
    ["AI", "추천 엔진 정상 작동"],
    ["SERVER", "개발 서버 정상"],
    ["LIVE", "라이브 방송 준비 가능"],
    ["DATA", "운영 저장소 점검중"],
    ["DEPLOY", "Cloudflare 배포 준비 필요"],
    ["SECURITY", "관리자 보호 라우트 적용"],
    ["DB", "Firebase/Supabase 연결 점검"]
  ];

  return (
    <AdminLayout>
      <AdminTopbar title="알림센터" subtitle="운영 알림과 시스템 상태를 확인합니다." />

      <div className="admin-panel">
        {alerts.map(([type, msg]) => (
          <div className="notice-row" key={type + msg}>
            <strong>{type}</strong>
            <span>{msg}</span>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
