import Layout from "../components/Layout";
import BigGrid from "../components/BigGrid";
import PageCard from "../components/PageCard";

export default function InvestorDashboard() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>투자자 대시보드</h1>
        <p style={{ color:"#B7C4E8" }}>성장성, 매출, 기술 차별성, 리스크 관리 현황</p>

        <BigGrid>
          <PageCard title="플랫폼 성장성"><h2>AI + 커머스 + 라이브</h2></PageCard>
          <PageCard title="기술 차별성"><h2>Neural Core</h2></PageCard>
          <PageCard title="수익 모델"><h2>판매/수수료/광고/멤버십</h2></PageCard>
          <PageCard title="리스크 관리"><h2>법무·세무·운영 점검</h2></PageCard>
        </BigGrid>
      </main>
    </Layout>
  );
}
