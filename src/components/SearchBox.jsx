import { useMemo } from "react";

export default function SearchBox({ value, onChange, placeholder = "검색" }) {
  const invalidSearch = useMemo(() => {
    const v = (value || "").trim();
    if (!v) return false;
    if (v.length < 2) return true;
    if (/^[ㅋㅎㅠㅜㅇㄴㅁㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔ]+$/.test(v)) return true;
    if (/^(.)\1{2,}$/.test(v)) return true;
    return false;
  }, [value]);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width:"100%",
          padding:"16px",
          borderRadius:"14px",
          border:"1px solid #263761",
          background:"#111A35",
          color:"white",
          boxSizing:"border-box",
          margin:"20px 0 8px 0"
        }}
      />
      {invalidSearch && (
        <div style={{fontSize:"13px"}}>
          검색어를 이해하지 못했습니다. 찾는 상품의 정확한 명칭을 입력하거나 제품 그룹 찾기를 이용하세요.
        </div>
      )}
    </div>
  );
}
