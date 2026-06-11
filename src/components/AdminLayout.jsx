import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/admin.css";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const auth = useAuth ? useAuth() : {};
  const user = auth?.user;
  const gradeLabel = auth?.getAdminGradeLabel ? auth.getAdminGradeLabel(user?.adminGrade) : "관리자";
  const logout = auth?.logout || (() => {});

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>대정넥스트 관리자</h2>
        <p className="admin-user">{user?.email || "관리자 모드"}</p>
        <p className="admin-grade-badge">{gradeLabel}</p>

        <div className="admin-menu">
          <button onClick={() => navigate("/")}>🏠 메인 홈</button>
          <button onClick={() => navigate("/admin-dashboard")}>📊 대시보드</button>
          <button onClick={() => navigate("/admin-ceo-office")}>🏢 대표이사실</button>
          <button onClick={() => navigate("/admin-ai-ops")}>🤖 AI 운영 관리</button>
          <button onClick={() => navigate("/admin-report-center")}>📈 리포트 센터</button>
          <button onClick={() => navigate("/admin-notification-center")}>🔔 알림센터</button>
          <button onClick={() => navigate("/admin-members")}>👥 회원관리</button>
          <button onClick={() => navigate("/admin-product-create")}>🛒 상품관리</button>
          <button onClick={() => navigate("/admin-orders")}>🧾 주문관리</button>
          <button onClick={() => navigate("/admin-live")}>📺 라이브관리</button>
          <button onClick={() => navigate("/admin-ai")}>🧠 AI 분석</button>
          <button onClick={() => navigate("/admin-notices")}>📢 공지/알림</button>
          <button onClick={() => navigate("/admin-product-create")}>➕ 상품 등록</button>
          <button onClick={() => navigate("/admin-member-create")}>👤 회원 추가</button>
          <button onClick={() => navigate("/admin-notice-create")}>✍ 공지 작성</button>
          <button onClick={() => navigate("/admin-live-create")}>🎥 방송 생성</button>
          <button onClick={() => navigate("/admin-data-center")}>🗄 데이터 관리</button>
          <button onClick={() => navigate("/admin-environment")}>⚙ 환경 설정</button>
          <button onClick={() => navigate("/admin-deploy-checklist")}>☁ 배포 점검</button>
          <button onClick={() => { logout(); navigate("/"); }}>🚪 로그아웃</button>
        </div>
      </aside>

      <main className="admin-main">{children}</main>
    </div>
  );
}
