import { useNavigate } from "react-router-dom";

export default function AdminTopbar({ title = "관리자 대시보드", subtitle = "운영 상태를 확인합니다." }) {
  const navigate = useNavigate();

  return (
    <section className="admin-top">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="top-actions">
        <input className="top-search" placeholder="검색: 회원, 주문, 상품..." />
        <button className="admin-button" onClick={() => navigate("/admin-notification-center")}>알림센터</button>
      </div>
    </section>
  );
}
