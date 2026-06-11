export default function NoticePanel() {
  return (
    <div style={{
      background:"linear-gradient(135deg,#18264D,#111A35)",
      border:"1px solid #33406A",
      borderRadius:"22px",
      padding:"24px",
      color:"white",
      marginTop:"24px"
    }}>
      <h2>관리자 알림</h2>
      <p>Firebase / Supabase / Cloudflare 연결 전 점검 단계입니다.</p>
      <p>상품, 회원, 주문, 결제 구조가 화면에 연결되었습니다.</p>
    </div>
  );
}
