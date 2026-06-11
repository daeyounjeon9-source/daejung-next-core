export default function BigGrid({ children }) {
  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
      gap:"20px",
      marginTop:"28px"
    }}>
      {children}
    </div>
  );
}
