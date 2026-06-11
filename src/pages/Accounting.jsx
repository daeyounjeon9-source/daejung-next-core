import Layout from "../components/Layout";
import BigGrid from "../components/BigGrid";
import PageCard from "../components/PageCard";
import { accountingStats } from "../data/accountingStats";

export default function Accounting() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>정산/회계 통계</h1>

        <BigGrid>
          {accountingStats.map(item => (
            <PageCard key={item.label} title={item.label}>
              <h2>{item.value.toLocaleString()}원</h2>
            </PageCard>
          ))}
        </BigGrid>
      </main>
    </Layout>
  );
}
