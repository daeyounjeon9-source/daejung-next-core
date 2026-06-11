import Layout from "../components/Layout";

export default function Admin() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>관리자 운영 안내</h1>
        <p>관리자는 회원가입으로 생성하지 않습니다. 관리자 로그인 후 운영센터에서 회장·사장·간부·직원 권한을 부여합니다.</p>
      </main>
    </Layout>
  );
}
