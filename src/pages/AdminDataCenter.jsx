import { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { clearAllDaejungData, clearList, getDataSummary } from "../services/localDb";

export default function AdminDataCenter() {
  const [summary, setSummary] = useState(getDataSummary());

  const refresh = () => setSummary(getDataSummary());

  const clearOne = (key) => {
    clearList(key);
    refresh();
  };

  const clearAll = () => {
    clearAllDaejungData();
    refresh();
  };

  return (
    <AdminLayout>
      <section className="admin-top">
        <div>
          <h1>데이터 관리 센터</h1>
          <p>저장된 상품, 회원, 공지, 라이브 데이터를 관리합니다.</p>
        </div>
        <button className="admin-button" onClick={refresh}>새로고침</button>
      </section>

      <section className="admin-kpi">
        <div className="kpi-card"><span>저장 상품</span><strong>{summary.products}</strong></div>
        <div className="kpi-card"><span>저장 회원</span><strong>{summary.members}</strong></div>
        <div className="kpi-card"><span>저장 공지</span><strong>{summary.notices}</strong></div>
        <div className="kpi-card"><span>저장 방송</span><strong>{summary.lives}</strong></div>
      </section>

      <div className="admin-panel" style={{ marginTop:"18px" }}>
        <h2>데이터 초기화</h2>
        <p style={{ color:"#b7c4e8" }}>현재 저장소 상태를 확인합니다. 향후 Firebase 인증·DB 전환 대상입니다.</p>

        <div className="quick-grid">
          <div className="quick-card" onClick={() => clearOne("dn_products")}>상품 데이터 초기화</div>
          <div className="quick-card" onClick={() => clearOne("dn_members")}>회원 데이터 초기화</div>
          <div className="quick-card" onClick={() => clearOne("dn_notices")}>공지 데이터 초기화</div>
          <div className="quick-card" onClick={() => clearOne("dn_lives")}>라이브 데이터 초기화</div>
        </div>

        <button className="admin-button" onClick={clearAll} style={{ marginTop:"20px" }}>
          전체 데이터 초기화
        </button>
      </div>
    </AdminLayout>
  );
}
