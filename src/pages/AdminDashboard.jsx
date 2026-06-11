import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import AdminTopbar from "../components/AdminTopbar";
import RealtimeWidgets from "../components/RealtimeWidgets";
import { apiGetSummary, apiGetProducts, apiGetMembers, apiGetNotices, apiGetLives } from "../services/api";
import { ADMIN_GRADES, useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user, assignAdmin, listAccounts, getAdminGradeLabel, hasAdminLevel } = useAuth();
  const [adminEmail, setAdminEmail] = useState("");
  const [adminNotice, setAdminNotice] = useState("");
  const [adminGrade, setAdminGrade] = useState("staff");
  const [accounts, setAccounts] = useState([]);
  const [summary, setSummary] = useState({ products:0, members:0, notices:0, lives:0 });
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [s, p, m, n, l] = await Promise.all([
        apiGetSummary(), apiGetProducts(), apiGetMembers(), apiGetNotices(), apiGetLives()
      ]);
      setSummary(s);
      setRecent([
        ...p.slice(0,2).map(x => "상품: " + x.name),
        ...m.slice(0,2).map(x => "회원: " + x.name),
        ...n.slice(0,2).map(x => "공지: " + x.title),
        ...l.slice(0,2).map(x => "방송: " + x.title)
      ]);
      setAccounts(listAccounts ? listAccounts() : []);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <AdminLayout>
      <AdminTopbar title="관리자 운영센터" subtitle="관리자 권한·회원·상품·주문·공지 운영 상태를 확인합니다." />

      {loading ? <p className="loading">데이터 불러오는 중...</p> : (
        <>
          <section className="admin-kpi">
            <div className="kpi-card"><span>저장 상품</span><strong>{summary.products}</strong></div>
            <div className="kpi-card"><span>저장 회원</span><strong>{summary.members}</strong></div>
            <div className="kpi-card"><span>저장 공지</span><strong>{summary.notices}</strong></div>
            <div className="kpi-card"><span>저장 방송</span><strong>{summary.lives}</strong></div>
          </section>

          <section className="quick-grid admin-role-summary">
            <div className="quick-card"><b>현재 권한</b><span>{getAdminGradeLabel ? getAdminGradeLabel(user?.adminGrade) : "관리자"}</span></div>
            <div className="quick-card" onClick={()=>navigate("/admin-product-create")}>상품 관리</div>
            <div className="quick-card" onClick={()=>navigate("/admin-members")}>회원 관리</div>
            <div className="quick-card" onClick={()=>navigate("/admin-notices")}>공지 관리</div>
          </section>

          <RealtimeWidgets />

          <section className="admin-panel admin-permission-panel" style={{ marginTop: 18 }}>
            <h2>관리자 권한 부여</h2>
            <p className="log-item">관리자는 회원가입으로 만들지 않습니다. 대표이사, 회장 또는 사장 권한자가 가입된 회원 이메일을 선택해 대표이사·회장·사장·간부·직원 권한을 부여합니다.</p>
            <div className="admin-grade-cards">
              {Object.entries(ADMIN_GRADES).map(([key, item]) => (
                <article key={key}>
                  <b>{item.label}</b>
                  <span>{item.en}</span>
                </article>
              ))}
            </div>
            <div className="quick-grid admin-assign-grid">
              <input
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="권한을 부여할 가입 회원 이메일"
                style={{ padding: "14px", borderRadius: 14, border: "1px solid rgba(15,23,42,.18)" }}
              />
              <select
                value={adminGrade}
                onChange={(e) => setAdminGrade(e.target.value)}
                style={{ padding: "14px", borderRadius: 14, border: "1px solid rgba(15,23,42,.18)", fontWeight: 900 }}
              >
                <option value="ceo">대표이사 / CEO</option>
                <option value="chairman">회장 / CHAIRMAN</option>
                <option value="president">사장 / PRESIDENT</option>
                <option value="executive">간부 / EXECUTIVE</option>
                <option value="staff">직원 / STAFF</option>
              </select>
              <button
                className="quick-card"
                type="button"
                disabled={hasAdminLevel && !hasAdminLevel("president")}
                onClick={() => {
                  try {
                    assignAdmin(adminEmail, adminGrade);
                    setAdminNotice("관리자 권한 부여 완료: " + adminEmail + " · " + (getAdminGradeLabel ? getAdminGradeLabel(adminGrade) : adminGrade));
                    setAccounts(listAccounts ? listAccounts() : []);
                    setAdminEmail("");
                  } catch (error) {
                    setAdminNotice(error.message || "관리자 권한 부여에 실패했습니다.");
                  }
                }}
              >권한 부여</button>
            </div>
            {adminNotice && <div className="log-item">{adminNotice}</div>}
            <div className="admin-grid" style={{ marginTop: 12 }}>
              <div className="admin-panel">
                <h2>가입 계정 권한 현황</h2>
                {accounts.length === 0 ? <div className="log-item">가입 계정 없음</div> : accounts.map((account) => (
                  <div className="log-item" key={account.email}>{account.email} · {account.role === "admin" ? (getAdminGradeLabel ? getAdminGradeLabel(account.adminGrade) : "관리자") : account.role === "seller" ? "판매자" : "회원"}</div>
                ))}
              </div>
            </div>
          </section>

          <section className="admin-grid">
            <div className="admin-panel">
              <h2>실시간 매출 그래프</h2>
              <div className="chart">
                <div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div>
              </div>
            </div>

            <div className="admin-panel">
              <h2>최근 등록 데이터</h2>
              {recent.length === 0 ? <div className="log-item">아직 등록 데이터 없음</div> : recent.map((r, i) => <div key={i} className="log-item">{r}</div>)}
            </div>
          </section>
        </>
      )}
    </AdminLayout>
  );
}
