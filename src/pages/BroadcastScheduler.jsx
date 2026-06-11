import Layout from "../components/Layout";

export default function BroadcastScheduler() {
  const schedule = [
    "월요일 20:00 - AI 추천 방송",
    "수요일 19:00 - 라이브커머스",
    "금요일 21:00 - VIP 특별 방송"
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>방송 스케줄러</h1>

        {schedule.map(s => (
          <div key={s} style={card}>{s}</div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"20px",
  marginTop:"14px",
  borderRadius:"16px"
};
