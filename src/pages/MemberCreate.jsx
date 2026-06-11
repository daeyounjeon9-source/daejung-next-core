import { useState } from "react";
import Layout from "../components/Layout";
import { addData } from "../services/localDb";

export default function MemberCreate() {
  const [member, setMember] = useState({
    name:"",
    email:"",
    role:"member"
  });

  const [message, setMessage] = useState("");

  const change = (key, value) => {
    setMember({ ...member, [key]: value });
  };

  const submit = () => {
    addData("members", member);
    setMessage("회원이 저장되었습니다.");
    setMember({ name:"", email:"", role:"member" });
  };

  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>회원 추가</h1>

        <div style={box}>
          <input placeholder="이름" value={member.name} onChange={(e)=>change("name", e.target.value)} style={input} />
          <input placeholder="이메일" value={member.email} onChange={(e)=>change("email", e.target.value)} style={input} />
          <select value={member.role} onChange={(e)=>change("role", e.target.value)} style={input}>
            <option value="member">member</option>
            <option value="operator">operator</option>
            <option value="admin">admin</option>
          </select>

          <button onClick={submit} style={button}>회원 추가</button>
          {message && <p>{message}</p>}
        </div>
      </main>
    </Layout>
  );
}

const box = { background:"#111A35", padding:"30px", borderRadius:"20px", marginTop:"20px", maxWidth:"520px" };
const input = { width:"100%", padding:"16px", marginTop:"16px", borderRadius:"12px", boxSizing:"border-box" };
const button = { width:"100%", padding:"18px", marginTop:"20px", borderRadius:"14px", cursor:"pointer" };
