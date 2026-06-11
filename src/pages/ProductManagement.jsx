import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { products as sampleProducts } from "../data/products";
import { getData } from "../services/localDb";

export default function ProductManagement() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = getData("products", []);
    setItems([...sampleProducts, ...saved]);
  }, []);

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>상품관리</h1>
        {items.map(p => (
          <div key={p.id} style={card}>
            <b>{p.name}</b> · {Number(p.price || 0).toLocaleString()}원 · {p.status}
            {p.description && <p>{p.description}</p>}
          </div>
        ))}
      </main>
    </Layout>
  );
}

const card = { background:"#111A35", padding:"20px", marginTop:"14px", borderRadius:"16px" };
