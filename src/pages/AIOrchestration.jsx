import Layout from "../components/Layout";
import BigGrid from "../components/BigGrid";
import PageCard from "../components/PageCard";

export default function AIOrchestration() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>AI 오케스트레이션</h1>

        <BigGrid>
          <PageCard title="상품 추천 AI">상품과 고객 매칭</PageCard>
          <PageCard title="운영 AI">주문/CS/재고 감시</PageCard>
          <PageCard title="콘텐츠 AI">라이브/홍보 문구 생성</PageCard>
          <PageCard title="리스크 AI">법무·세무·운영 위험 탐지</PageCard>
        </BigGrid>
      </main>
    </Layout>
  );
}
