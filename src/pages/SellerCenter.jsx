import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mainHome.css";

const requiredChecks = [
  "상품명·카테고리 확인",
  "사진·영상·상세설명 확인",
  "가격·옵션·구성품 확인",
  "배송·반품·CS 정보 확인",
  "AI 오인판매 위험 검토",
  "임시저장·수정 가능 상태 유지",
];

const emptyProduct = {
  title: "", category: "", price: "", options: "", photo: "", video: "", detail: "", delivery: "", returnInfo: "", cs: "", consent: false,
};

function riskText(form) {
  const text = `${form.title} ${form.category} ${form.options} ${form.detail}`;
  if (/필름|케이스|부속|호환|보호/i.test(text)) return "주의: 본품/부속품 혼동 가능성. 상품명과 구성품을 다시 확인하세요.";
  if (!form.title || !form.category || !form.price) return "대기: 상품명·카테고리·가격을 먼저 입력하세요.";
  if (!form.detail || !form.cs || !form.returnInfo) return "대기: 상세설명·CS·반품 정보를 보강하세요.";
  if (!form.consent) return "대기: 판매·홍보 운영원칙 동의가 필요합니다.";
  return "양호: AI 신뢰검토 대기열 등록 가능";
}

export default function SellerCenter() {
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyProduct);
  const [drafts, setDrafts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [notice, setNotice] = useState("");
  const risk = useMemo(() => riskText(form), [form]);
  const filled = Object.entries(form).filter(([k, v]) => k === "consent" ? v : String(v || "").trim()).length;
  const progress = Math.round((filled / Object.keys(form).length) * 100);
  const change = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const saveDraft = () => {
    if (!form.title.trim()) {
      setNotice("상품명만 입력해도 임시저장할 수 있습니다. 상품명을 먼저 입력하세요.");
      return;
    }
    const item = { ...form, id: editingId || Date.now(), status: "임시저장", updatedAt: new Date().toLocaleString("ko-KR") };
    setDrafts((old) => editingId ? old.map((d) => d.id === editingId ? item : d) : [item, ...old]);
    setEditingId(item.id);
    setNotice("임시저장 완료. 언제든 수정할 수 있습니다.");
  };

  const submitReview = (e) => {
    e.preventDefault();
    if (risk.startsWith("대기") || risk.startsWith("주의")) {
      setNotice(risk);
      return;
    }
    const item = { ...form, id: editingId || Date.now(), status: "AI 검토중", updatedAt: new Date().toLocaleString("ko-KR") };
    setDrafts((old) => editingId ? old.map((d) => d.id === editingId ? item : d) : [item, ...old]);
    setEditingId(item.id);
    setNotice("AI 신뢰검토 대기열에 등록되었습니다. 수정은 계속 가능합니다.");
  };

  const editDraft = (item) => {
    setForm({ ...emptyProduct, ...item });
    setEditingId(item.id);
    setNotice("선택한 상품을 수정 중입니다.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyDraft = (item) => {
    setForm({ ...emptyProduct, ...item, title: `${item.title} 복사본` });
    setEditingId(null);
    setNotice("복사본을 만들었습니다. 내용 수정 후 저장하세요.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteDraft = (id) => {
    setDrafts((old) => old.filter((d) => d.id !== id));
    if (editingId === id) resetForm();
    setNotice("선택한 등록 항목을 삭제했습니다.");
  };

  const republishDraft = (item) => {
    const next = { ...item, status: "재등록 준비", updatedAt: new Date().toLocaleString("ko-KR") };
    setDrafts((old) => old.map((d) => d.id === item.id ? next : d));
    setForm({ ...emptyProduct, ...next });
    setEditingId(next.id);
    setNotice("재등록 준비 상태로 전환했습니다. 수정 후 다시 AI 검토 대기열에 등록하세요.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setForm(emptyProduct);
    setEditingId(null);
    setNotice("새 상품 입력을 시작합니다.");
  };

  return (
    <main className="home-room seller-center-v5">
      <section className="section neural-border seller-hero-v5">
        <div className="section-title">
          <span>상품 판매 및 홍보 등록센터</span>
          <h2>처음 온 사람도 쉽게 올리고, 언제든 수정할 수 있게 만듭니다</h2>
          <p>상품 판매 · 라이브 방송 · 기업/브랜드 홍보를 하나의 쉬운 입력 흐름으로 연결합니다.</p>
        </div>
        <div className="seller-progress-v5">
          <strong>{progress}%</strong>
          <div><span style={{ width: `${progress}%` }} /></div>
          <em>{risk}</em>
        </div>
      </section>

      <section className="section neural-border seller-layout-v5">
        <form className="seller-form-v5" onSubmit={submitReview}>
          <h3>{editingId ? "등록내용 수정" : "상품·홍보 내용 입력"}</h3>
          <input placeholder="상품명 또는 홍보 제목" value={form.title} onChange={(e) => change("title", e.target.value)} />
          <input placeholder="카테고리 예) 생활가전 / 식품 / 지역홍보" value={form.category} onChange={(e) => change("category", e.target.value)} />
          <input placeholder="가격 또는 홍보비용 예) 129000" value={form.price} onChange={(e) => change("price", e.target.value)} />
          <input placeholder="옵션/구성품 예) 색상, 사이즈, 기본구성" value={form.options} onChange={(e) => change("options", e.target.value)} />
          <input placeholder="대표사진 업로드 또는 촬영 예정 메모" value={form.photo} onChange={(e) => change("photo", e.target.value)} />
          <input placeholder="영상/라이브 자료 예) 1분 영상, 3분 소개, 10분 라이브" value={form.video} onChange={(e) => change("video", e.target.value)} />
          <textarea placeholder="상세설명: 장점, 사용법, 주의사항, 사양을 쉽게 입력하세요" value={form.detail} onChange={(e) => change("detail", e.target.value)} />
          <input placeholder="배송정보 예) 무료배송 / 2~3일 / 직접배송" value={form.delivery} onChange={(e) => change("delivery", e.target.value)} />
          <input placeholder="반품·교환 주소/기준" value={form.returnInfo} onChange={(e) => change("returnInfo", e.target.value)} />
          <input placeholder="CS 연락처" value={form.cs} onChange={(e) => change("cs", e.target.value)} />
          <label><input type="checkbox" checked={form.consent} onChange={(e) => change("consent", e.target.checked)} /> 상품정보를 사실대로 입력하고 AI 신뢰검토 및 운영원칙에 동의합니다.</label>
          {notice && <p className="dn-auth-notice">{notice}</p>}
          <div className="seller-action-row-v5">
            <button type="button" onClick={saveDraft}>임시저장</button>
            <button type="submit">AI 검토 대기열 등록</button>
            <button type="button" onClick={resetForm}>새로 입력</button>
          </div>
        </form>

        <div className="seller-guard-v5">
          <h3>쉽게 넣는 원칙</h3>
          <div className="seller-check-grid-v5">
            {requiredChecks.map((item, idx) => <article key={item}><b>{idx + 1}</b><span>{item}</span></article>)}
          </div>
          <div className="seller-risk-box-v5">
            <strong>현재 판정</strong>
            <p>{risk}</p>
            <small>승인 전까지 전체상품관에는 자동 반영하지 않습니다.</small>
          </div>
        </div>
      </section>

      <section className="section neural-border">
        <div className="section-title row-title"><div><span>내 등록목록</span><h2>임시저장·수정·복사·재등록</h2></div><p>판매 및 홍보 내용은 언제든 수정 가능합니다.</p></div>
        <div className="seller-queue-v5">
          {drafts.length === 0 ? <article><b>아직 저장된 항목이 없습니다</b><span>상품명만 입력해도 임시저장할 수 있습니다.</span><p>오른쪽 버튼으로 새 상품을 입력하세요.</p></article> : drafts.map((item) => <article key={item.id} className={item.status === "AI 검토중" ? "" : "warn"}>
            <b>{item.title}</b><span>{item.category || "카테고리 미입력"} · {item.price || "가격 미입력"}</span><strong>{item.status}</strong><em>{item.updatedAt}</em><p>{item.detail || "상세설명 미입력"}</p>
            <div className="seller-action-row-v5 compact"><button type="button" onClick={() => editDraft(item)}>수정</button><button type="button" onClick={() => copyDraft(item)}>복사</button><button type="button" onClick={() => republishDraft(item)}>재등록</button><button type="button" onClick={() => deleteDraft(item.id)}>삭제</button></div>
          </article>)}
        </div>
      </section>

      <section className="section neural-border seller-next-flow-v5">
        <button type="button" onClick={() => navigate("/commerce")}>전체상품관</button>
        <button type="button" onClick={() => navigate("/promotion")}>특별관</button>
        <button type="button" onClick={() => navigate("/")}>GOD 6 셀렉션</button>
      </section>
    </main>
  );
}
