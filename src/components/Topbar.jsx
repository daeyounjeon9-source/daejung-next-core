import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Topbar() {
  const navigate = useNavigate();
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <header style={{
      background:"#0B1630",
      padding:"18px 26px",
      borderBottom:"1px solid #1F2A4A",
      color:"white",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center"
    }}>
      <strong>DAEJUNG NEXT PLATFORM</strong>

      <div style={{ display:"flex", gap:"12px", alignItems:"center" }}>
        {isLoggedIn && <span>{user?.name} 로그인됨</span>}

        {!isLoggedIn ? (
          <button onClick={() => navigate("/login")} style={btn}>로그인</button>
        ) : (
          <button onClick={() => { logout(); navigate("/"); }} style={btn}>로그아웃</button>
        )}
      </div>
    </header>
  );
}

const btn = {
  padding:"10px 18px",
  borderRadius:"12px",
  border:"1px solid #33406A",
  background:"#111A35",
  color:"white",
  cursor:"pointer"
};
