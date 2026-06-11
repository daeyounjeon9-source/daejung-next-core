import { useNavigate } from "react-router-dom";
export default function Sidebar() {
  const navigate = useNavigate();
  const item = { padding:"13px 15px", borderRadius:"14px", background:"#111A35", cursor:"pointer", fontSize:"14px", border:"1px solid rgba(160,180,255,0.12)" };
  return (
    <aside style={{ width:"280px", background:"#071126", minHeight:"100vh", padding:"22px", color:"white", boxSizing:"border-box", overflowY:"auto" }}>
      <h2 style={{ marginBottom:"20px" }}></h2>
      <div style={{ display:"grid", gap:"10px" }}>
        <div style={item} onClick={() => navigate("/")}>🏠 메인</div>
        <div style={item} onClick={() => navigate("/admin-dashboard")}>⚙ 관리자</div>
        <div style={item} onClick={() => navigate("/commerce")}>🛒 커머스</div>
        <div style={item} onClick={() => navigate("/ai-view")}>🧠 AI 시점</div>
        <div style={item} onClick={() => navigate("/live")}>📺 라이브</div>
        <div style={item} onClick={() => navigate("/neural-core")}>🧬 Neural Core</div>
        <div style={item} onClick={() => navigate("/coin")}>🪙 코인</div>
        <div style={item} onClick={() => navigate("/control-tower")}>🛰 컨트롤타워</div>
      </div>
    </aside>
  );
}
