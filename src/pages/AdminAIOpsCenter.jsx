import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import AdminTopbar from "../components/AdminTopbar";
import { addActionLog, detectRisks, generateNotice, generateReport, getActionLogs, getUserBehavior } from "../services/aiOps";
import { addItem } from "../services/localDb";

export default function AdminAIOpsCenter() {
  const [report, setReport] = useState(null);
  const [logs, setLogs] = useState([]);
  const [pulse, setPulse] = useState(82);

  useEffect(() => {
    setLogs(getActionLogs());
    const timer = setInterval(() => {
      setPulse((v) => v >= 96 ? 76 : v + 3);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const createNotice = () => {
    const notice = generateNotice();
    addItem("dn_notices", notice);
    setLogs(addActionLog("AI가 자동 공지를 생성했습니다."));
  };

  const createReport = () => {
    const next = generateReport();
    setReport(next);
    setLogs(addActionLog("AI 자동 리포트가 생성되었습니다."));
  };

  const risks = detectRisks();
  const behaviors = getUserBehavior();

  return (
    <AdminLayout>
      <AdminTopbar title="AI 자동 운영 센터" subtitle="AI가 운영, 리스크, 공지, 추천, 리포트를 보조합니다." />

      <section className="admin-kpi">
        <div className="kpi-card"><span>AI 운영 상태</span><strong>{pulse}%</strong></div>
        <div className="kpi-card"><span>자동 추천</span><strong>활성</strong></div>
        <div className="kpi-card"><span>리스크 감지</span><strong>{risks.length}</strong></div>
        <div className="kpi-card"><span>자동화 로그</span><strong>{logs.length}</strong></div>
      </section>

      <section className="quick-grid">
        <div className="quick-card" onClick={createNotice}>AI 자동 공지 생성</div>
        <div className="quick-card" onClick={createReport}>자동 리포트 생성</div>
        <div className="quick-card" onClick={() => setLogs(addActionLog("AI 추천 상품 노출을 강화했습니다."))}>추천 강화</div>
        <div className="quick-card" onClick={() => setLogs(addActionLog("운영 상태를 재점검했습니다."))}>상태 점검</div>
      </section>

      <section className="admin-grid">
        <div className="admin-panel">
          <h2>AI 위험 감지</h2>
          {risks.map((r, i) => (
            <div key={i} className={r.level === "중간" ? "risk-row warn" : "risk-row"}>
              <strong>{r.level}</strong>
              <span>{r.label}</span>
            </div>
          ))}
        </div>

        <div className="admin-panel">
          <h2>사용자 행동 분석</h2>
          {behaviors.map((b) => <div key={b} className="log-item">{b}</div>)}
        </div>
      </section>

      <section className="admin-grid">
        <div className="admin-panel">
          <h2>AI 자동 리포트</h2>
          {!report ? (
            <div className="log-item">자동 리포트 생성 버튼을 눌러주세요.</div>
          ) : (
            <div className="preview-box clean-preview">
              <b>{report.title || "AI 자동 리포트"}</b>
              <span>생성시간: {report.createdAt || "방금 생성"}</span>
              <span>요약: {report.summary || "운영 상태를 확인했습니다."}</span>
            </div>
          )}
        </div>

        <div className="admin-panel">
          <h2>관리자 액션 로그</h2>
          {logs.length === 0 ? <div className="log-item">아직 액션 로그 없음</div> : logs.slice(0, 6).map((l) => (
            <div key={l.id} className="log-item">{l.createdAt} · {l.message}</div>
          ))}
        </div>
      </section>
    </AdminLayout>
  );
}
