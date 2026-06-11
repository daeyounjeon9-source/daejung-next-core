import Layout from "../components/Layout";
import BigGrid from "../components/BigGrid";
import PageCard from "../components/PageCard";
import { shopProducts } from "../data/shopProducts";

export default function ShopHome() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>쇼핑몰</h1>
        <p>AI 추천 기반 상품 판매 영역입니다.</p>

        <BigGrid>
          {shopProducts.map(p => (
            <PageCard key={p.id} title={p.name}>
              <p>{p.category}</p>
              <p>{p.price.toLocaleString()}원</p>
              <p>{p.status}</p>
            </PageCard>
          ))}
        </BigGrid>
      </main>
    </Layout>
  );
}
