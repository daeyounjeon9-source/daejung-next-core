export default function AIChart() {
  return (
    <div style={{
      background:"#111A35",
      borderRadius:"20px",
      padding:"30px",
      color:"white",
      marginTop:"24px"
    }}>
      <h2>AI 분석 그래프</h2>

      <div style={{
        height:"240px",
        marginTop:"20px",
        display:"flex",
        alignItems:"end",
        gap:"16px"
      }}>
        <div style={bar(120)}></div>
        <div style={bar(180)}></div>
        <div style={bar(90)}></div>
        <div style={bar(210)}></div>
        <div style={bar(160)}></div>
      </div>
    </div>
  );
}

const bar = (h) => ({
  width:"60px",
  height:`${h}px`,
  borderRadius:"12px 12px 0 0",
  background:"linear-gradient(180deg,#5B8CFF,#7B5BFF)"
});
