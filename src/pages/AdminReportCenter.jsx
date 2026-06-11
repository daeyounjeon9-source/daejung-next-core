import AdminLayout from "../components/AdminLayout";
import AdminTopbar from "../components/AdminTopbar";

export default function AdminReportCenter() {
  return (
    <AdminLayout>
      <AdminTopbar title="리포트 센터" subtitle="AI, 매출, 회원, 라이브, 리스크 리포트를 통합 확인합니다." />

      <section className="admin-kpi">
        <div className="kpi-card"><span>AI 추천 성공률</span><strong>87%</strong></div>
        <div className="kpi-card"><span>매출 성장률</span><strong>+28%</strong></div>
        <div className="kpi-card"><span>회원 증가</span><strong>+142</strong></div>
        <div className="kpi-card"><span>리스크</span><strong>안정</strong></div>
      </section>

      <section className="admin-grid">
        <div className="admin-panel">
          <h2>AI 리포트</h2>
          <div className="log-item">추천 엔진 정상 작동</div>
          <div className="log-item">사용자 행동 분석 12,904건</div>
          <div className="log-item">Neural Core 학습 데이터 준비중</div>
        </div>

        <div className="admin-panel">
          <h2>매출 리포트</h2>
          <div className="log-item">오늘 매출 428만원</div>
          <div className="log-item">이번달 예상 매출 1.28억원</div>
          <div className="log-item">라이브 매출 비중 34%</div>
        </div>
      </section>

      <section className="admin-grid">
        <div className="admin-panel">
          <h2>회원 리포트</h2>
          <div className="log-item">VIP 전환 가능 회원 18명</div>
          <div className="log-item">신규 회원 증가 추세 양호</div>
          <div className="log-item">재방문 유도 대상 42명</div>
        </div>

        <div className="admin-panel">
          <h2>라이브 리포트</h2>
          <div className="log-item">평균 시청자 2,184명</div>
          <div className="log-item">라이브 상품 클릭률 21%</div>
          <div className="log-item">다음 방송 예약 필요</div>
        </div>
      </section>

      <div className="admin-panel" style={{ marginTop:"18px" }}>
        <h2>운영 리스크 리포트</h2>
        <div className="log-item">결제/환불 리스크: 낮음</div>
        <div className="log-item">개인정보/약관 준비: 필요</div>
        <div className="log-item">정부지원/사업자 분리 검토: 문서화 필요</div>
      </div>
    </AdminLayout>
  );
}
