export default function AdminLogPanel() {
  const logs = [
    "운영센터 기본 구조 확인",
    "관리자 운영 화면 준비 완료",
    "회원·상품 데이터 점검 준비",
    "인증 저장소 전환 점검 필요"
  ];

  return (
    <div style={{
      background:"#071126",
      border:"1px solid #263761",
      borderRadius:"20px",
      padding:"24px",
      color:"white",
      marginTop:"24px"
    }}>
      <h2>관리자 로그</h2>
      {logs.map((log, index) => (
        <p key={index}>✅ {log}</p>
      ))}
    </div>
  );
}
