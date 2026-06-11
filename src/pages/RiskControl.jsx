import Layout from "../components/Layout";

export default function RiskControl() {
  const risks = [
    "법무 리스크",
    "세무 리스크",
    "정부지원금 운영 리스크",
    "개인사업자/법인 전환 리스크",
    "플랫폼 약관/개인정보 리스크",
    "결제/환불/정산 리스크"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>운영 리스크 체크</h1>
        {risks.map(r => <div key={r} style={card}>⚠ {r}</div>)}
      </main>
    </Layout>
  );
}

const card = { background:"#111A35", padding:"20px", marginTop:"14px", borderRadius:"16px" };
