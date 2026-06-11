import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mainHome.css";
import { generatedProducts } from "../data/generatedProductCatalog";

function won(v = 0) { return `${Number(v || 0).toLocaleString("ko-KR")}원`; }

export default function Checkout() {
  const navigate = useNavigate();
  const stored = (() => { try { return JSON.parse(localStorage.getItem("dn_selected_product") || "null"); } catch { return null; } })();
  const product = stored || generatedProducts[0];
  const [method, setMethod] = useState("카드 테스트");
  const [order, setOrder] = useState({ name: "", phone: "", address: "", consent: false });
  const [notice, setNotice] = useState("");
  const delivery = 3000;
  const total = useMemo(() => Number(product.price || 0) + delivery, [product]);
  const steps = ["주문상품", "배송정보", "결제수단", "결제테스트"];
  const change = (key, value) => setOrder((old) => ({ ...old, [key]: value }));
  const submitPayment = () => {
    if (!order.name.trim() || !order.phone.trim() || !order.address.trim()) {
      setNotice("주문자 이름, 휴대폰 번호, 배송지 주소를 모두 입력해야 합니다.");
      return;
    }
    if (!order.consent) {
      setNotice("개인정보·결제·배송 안내 확인에 동의해야 결제 테스트를 진행할 수 있습니다.");
      return;
    }
    setNotice("테스트 주문 완료: 실제 결제는 아직 연결하지 않았습니다.");
  };

  return <main className="home-room checkout-v7">
    <section className="section neural-border checkout-hero-v7">
      <div className="section-title">
        <span>주문·결제 테스트</span>
        <h2>실제 결제 연결 전 구매 흐름을 고정합니다</h2>
        <p>현재는 PG 실결제 전 단계입니다. 금액 청구 없이 주문/배송/결제 화면 흐름만 점검합니다.</p>
      </div>
      <div className="checkout-flow-v7">{steps.map((s, i) => <span key={s} className={i < 3 ? "done" : "ready"}>{i + 1}. {s}</span>)}</div>
    </section>

    <section className="section neural-border checkout-layout-v7">
      <div className="checkout-product-v7">
        <img src={product.img} alt={product.name}/>
        <div><b>{product.company}</b><h3>{product.name}</h3><p>{product.spec}</p><strong>{won(product.price)}</strong><em>신뢰 {product.trust || 0}점 · 판매자 검증 연결</em></div>
      </div>
      <div className="checkout-form-v7">
        <h3>주문 정보</h3>
        <input placeholder="주문자 이름" value={order.name} onChange={(e) => change("name", e.target.value)} />
        <input placeholder="휴대폰 번호" value={order.phone} onChange={(e) => change("phone", e.target.value)} />
        <input placeholder="배송지 주소" value={order.address} onChange={(e) => change("address", e.target.value)} />
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option>카드 테스트</option><option>계좌이체 테스트</option><option>간편결제 테스트</option><option>DAEJUNG 코인 테스트</option>
        </select>
        <label><input type="checkbox" checked={order.consent} onChange={(e) => change("consent", e.target.checked)} /> 개인정보·결제·배송 안내 확인</label>
        {notice && <p className="dn-auth-notice">{notice}</p>}
      </div>
      <aside className="checkout-summary-v7">
        <h3>최종 합계</h3>
        <p><span>상품금액</span><b>{won(product.price)}</b></p>
        <p><span>배송비</span><b>{won(delivery)}</b></p>
        <p><span>결제수단</span><b>{method}</b></p>
        <strong>{won(total)}</strong>
        <button type="button" onClick={submitPayment}>결제 테스트</button>
        <button type="button" onClick={() => navigate("/decision-room")}>구매결정 쇼룸으로</button>
        <button type="button" onClick={() => navigate("/commerce")}>전체상품관 · ALL PRODUCTS</button>
      </aside>
    </section>
  </main>;
}
