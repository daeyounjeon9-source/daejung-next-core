import Layout from "../components/Layout";

export default function RoleManagement() {
  const roles = [
    { name:"admin", desc:"전체 관리자 권한" },
    { name:"operator", desc:"운영 관리 권한" },
    { name:"member", desc:"회원 권한" },
    { name:"guest", desc:"비로그인 접근 권한" }
  ];

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>권한 관리</h1>

        {roles.map(role => (
          <div key={role.name} style={card}>
            <h2>{role.name}</h2>
            <p>{role.desc}</p>
          </div>
        ))}
      </main>
    </Layout>
  );
}

const card = {
  background:"linear-gradient(135deg,#111A35,#17244A)",
  padding:"24px",
  marginTop:"16px",
  borderRadius:"18px",
  border:"1px solid #263761"
};
