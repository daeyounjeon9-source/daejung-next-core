import { useState } from "react";
import Layout from "../components/Layout";
import { addData } from "../services/localDb";

export default function ProductCreate() {
  const [product, setProduct] = useState({
    name:"",
    price:"",
    description:"",
    status:"판매준비"
  });

  const [message, setMessage] = useState("");

  const change = (key, value) => {
    setProduct({ ...product, [key]: value });
  };

  const submit = () => {
    addData("products", product);
    setMessage("상품이 저장되었습니다.");
    setProduct({ name:"", price:"", description:"", status:"판매준비" });
  };

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>상품 등록</h1>

        <div style={box}>
          <input placeholder="상품명" value={product.name} onChange={(e)=>change("name", e.target.value)} style={input} />
          <input placeholder="가격" value={product.price} onChange={(e)=>change("price", e.target.value)} style={input} />
          <textarea placeholder="상품 설명" value={product.description} onChange={(e)=>change("description", e.target.value)} style={textarea}></textarea>

          <select value={product.status} onChange={(e)=>change("status", e.target.value)} style={input}>
            <option>판매준비</option>
            <option>판매중</option>
            <option>품절</option>
          </select>

          <div style={upload}>이미지 업로드 준비 영역</div>

          <button onClick={submit} style={button}>상품 등록</button>
          {message && <p>{message}</p>}
        </div>
      </main>
    </Layout>
  );
}

const box = { background:"#111A35", padding:"30px", borderRadius:"20px", marginTop:"20px", maxWidth:"620px" };
const input = { width:"100%", padding:"16px", marginTop:"16px", borderRadius:"12px", boxSizing:"border-box" };
const textarea = { width:"100%", height:"140px", padding:"16px", marginTop:"16px", borderRadius:"12px", boxSizing:"border-box" };
const upload = { marginTop:"20px", padding:"30px", border:"2px dashed #3E4D7A", borderRadius:"16px" };
const button = { width:"100%", padding:"18px", marginTop:"20px", borderRadius:"14px", cursor:"pointer" };
