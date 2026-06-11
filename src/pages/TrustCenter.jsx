import { useNavigate } from "react-router-dom";
import "../styles/mainHome.css";

const checks = [
  ["오인판매 차단", "본품/부속품 혼동, 허위·과장·누락 가능성을 등록 전 차단합니다."],
  ["판매자 검증", "실명, 사업자, 계좌, 연락처, 반품률, 신고 이력을 확인합니다."],
  ["AI 상품분석", "제목, 옵션, 카테고리, 이미지, 상세설명, 제원, 구성품을 교차검증합니다."],
  ["신뢰 확인", "구매 전 판매자 인증, 배송 신뢰도, 위험도를 한 화면에서 확인합니다."],
];

export default function TrustCenter(){
  const navigate = useNavigate();
  return <main className="home-room"><section className="section neural-border policy-center">
    <div className="section-title"><span>신뢰검증</span><h2>신뢰/검증방</h2><p>메인 첫 화면에서 제거한 오인판매·판매자인증·AI 검증 영역을 별도 방으로 이동했습니다.</p></div>
    <div className="operation-mini-grid">{checks.map(([a,b]) => <article key={a}><b>{a}</b><em>{b}</em></article>)}</div>
    <div className="room-actions"><button type="button" onClick={()=>navigate("/")}>메인으로</button><button type="button" onClick={()=>navigate("/commerce-check")}>상품검증/가격비교</button></div>
  </section></main>;
}
