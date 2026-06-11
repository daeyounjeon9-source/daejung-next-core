export default function PageCard({ title, children, onClick }) {
  return (
    <div onClick={onClick} style={{
      background:"linear-gradient(135deg,#111A35,#182B5A)",
      border:"1px solid #2B3E70",
      borderRadius:"22px",
      padding:"24px",
      color:"white",
      boxShadow:"0 0 26px rgba(64,120,255,0.16)",
      cursor:onClick ? "pointer" : "default"
    }}>
      <h2>{title}</h2>
      <div style={{ color:"#C8D4F6" }}>{children}</div>
    </div>
  );
}
