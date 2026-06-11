import { useNavigate } from "react-router-dom";
import "../styles/mainHome.css";

const rooms = [
  ["GOD 6 셀렉션", "메인 GOD 6 셀렉션", "LIVE, 다이아 TOP6, 고객센터, 30개 상품군만 메인에 남깁니다."],
  ["홍보관", "신뢰/검증방", "오인판매 차단, 판매자 검증, AI 상품분석은 이 방에서 확인합니다."],
  ["전체상품관", "상품검증·가격비교방", "라이브커머스, 상품검증, 가격비교 흐름은 이 방에서 분리 관리합니다."],
  ["구매결정센터", "구매결정센터", "비교상품, 보조상품, 장바구니, 바로구매를 최종 확인합니다."],
];

export default function RoomsOverview(){
  const navigate = useNavigate();
  return <main className="home-room"><section className="section neural-border room-flow-section">
    <div className="section-title"><span>DAEJUNG NEXT</span><h2>각방 분리 구조</h2><p>메인에서 겹치던 검증/비교/구매 영역을 별도 페이지로 분리했습니다.</p></div>
    <div className="room-flow-grid">{rooms.map(([no,title,desc]) => <article key={no}><b>{no}</b><strong>{title}</strong><p>{desc}</p></article>)}</div>
    <div className="room-actions"><button type="button" onClick={()=>navigate("/")}>메인</button><button type="button" onClick={()=>navigate("/trust-center")}>신뢰검증</button><button type="button" onClick={()=>navigate("/commerce-check")}>상품검증</button><button type="button" onClick={()=>navigate("/decision-room")}>구매결정</button></div>
  </section></main>;
}
