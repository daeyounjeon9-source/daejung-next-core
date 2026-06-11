import Layout from "../components/Layout";

export default function SystemStatus() {
  const items = [
    ["React", "정상"],
    ["Router", "정상"],
    ["Local DB", "정상"],
    ["Login Guard", "정상"],
    ["Firebase", "연결 준비"],
    ["Supabase", "연결 준비"],
    ["Cloudflare", "배포 준비"]
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>운영 상태</h1>
        {items.map(([name, status]) => (
          <div key={name} style={card}>
            <b>{name}</b>
            <span>{status}</span>
          </div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"#111A35",
  padding:"20px",
  marginTop:"14px",
  borderRadius:"16px",
  display:"flex",
  justifyContent:"space-between",
  border:"1px solid #263761"
};
