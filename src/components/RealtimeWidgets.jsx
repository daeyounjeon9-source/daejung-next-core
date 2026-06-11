export default function RealtimeWidgets() {
  return (
    <>
      <section className="admin-kpi">
        <div className="kpi-card"><span>현재 방문자</span><strong>1,284</strong></div>
        <div className="kpi-card"><span>AI 상태</span><strong>82%</strong></div>
        <div className="kpi-card"><span>서버 상태</span><strong>정상</strong></div>
        <div className="kpi-card"><span>알림</span><strong>7건</strong></div>
      </section>

      <section className="admin-grid">
        <div className="admin-panel">
          <h2>서버 모니터링</h2>
          <div className="server-row"><span>화면 서비스</span><b>ONLINE</b></div>
          <div className="server-row"><span>페이지 이동</span><b>ONLINE</b></div>
          <div className="server-row"><span>운영 데이터</span><b>READY</b></div>
          <div className="server-row"><span>도메인 연결</span><b>준비중</b></div>
        </div>

        <div className="admin-panel">
          <h2>최근 활동 타임라인</h2>
          <div className="timeline-item">AI 추천 엔진 실행</div>
          <div className="timeline-item">관리자 로그인 감지</div>
          <div className="timeline-item">상품 관리 화면 접속</div>
          <div className="timeline-item">운영 데이터 점검 완료</div>
        </div>
      </section>
    </>
  );
}
