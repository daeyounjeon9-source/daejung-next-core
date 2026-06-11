import { useNavigate } from "react-router-dom";
import "../styles/mainHome.css";

const items = [
  ["라이브커머스", "방송상품, 구성품, 혜택, 재고를 방송 흐름과 함께 확인합니다."],
  ["상품검증", "상품명, 이미지, 옵션, 구성품, 상세설명을 구매 전 검토합니다."],
  ["가격비교", "동급 상품과 가격, 할인율, 배송비, 리뷰를 비교합니다."],
  ["판매자 인증", "필요할 때 신뢰/검증방으로 이동해 판매자 정보를 확인합니다."],
];

export default function CommerceCheck(){
  const navigate = useNavigate();
  return <main className="home-room"><section className="section neural-border commerce-hotline">
    <div className="section-title"><span>상품검증</span><h2>상품검증 · 가격비교방</h2><p>메인에서 겹치던 라이브커머스/상품검증/가격비교 줄을 별도 페이지로 분리했습니다.</p></div>
    {items.map(([a,b]) => <article key={a}><span>{a}</span><b>{b}</b><em>별도방 관리</em></article>)}
    <div className="room-actions"><button type="button" onClick={()=>navigate("/")}>메인으로</button><button type="button" onClick={()=>navigate("/trust-center")}>신뢰/검증방</button><button type="button" onClick={()=>navigate("/decision-room")}>구매결정센터</button></div>
  </section></main>;
}
