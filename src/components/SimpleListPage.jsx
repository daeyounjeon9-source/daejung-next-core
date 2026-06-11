import Layout from "./Layout";

export default function SimpleListPage({ title, subtitle, items }) {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>{title}</h1>
        {subtitle && <p style={{ color:"#B7C4E8" }}>{subtitle}</p>}

        <div style={{ marginTop:"24px", display:"grid", gap:"14px" }}>
          {items.map((item, index) => (
            <div key={index} style={{
              background:"linear-gradient(135deg,#111A35,#17244A)",
              border:"1px solid #263761",
              borderRadius:"18px",
              padding:"22px",
              boxShadow:"0 0 20px rgba(64,120,255,0.12)"
            }}>
              {typeof item === "string" ? item : (
                <pre style={{ margin:0, whiteSpace:"pre-wrap", fontFamily:"inherit" }}>
                  {JSON.stringify(item, null, 2)}
                </pre>
              )}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
