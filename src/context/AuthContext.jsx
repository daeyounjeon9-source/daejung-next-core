import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const ROLE_LABEL = {
  member: "회원",
  seller: "판매자",
  admin: "관리자",
};

export const ADMIN_GRADES = {
  ceo: { label: "대표이사", en: "CEO", level: 120 },
  chairman: { label: "회장", en: "CHAIRMAN", level: 100 },
  president: { label: "사장", en: "PRESIDENT", level: 80 },
  executive: { label: "간부", en: "EXECUTIVE", level: 60 },
  staff: { label: "직원", en: "STAFF", level: 40 },
};

export function getAdminGradeLabel(grade = "staff") {
  const item = ADMIN_GRADES[grade] || ADMIN_GRADES.staff;
  return `${item.label} / ${item.en}`;
}

const STORAGE_USER = "dn_auth_user";
const STORAGE_ACCOUNTS = "dn_auth_accounts";
const ADMIN_EMAILS = (import.meta.env.VITE_ADMIN_EMAILS || "admin@daejungnext.com")
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "neon2016!!";
const CEO_EMAIL = normalizeEmail(import.meta.env.VITE_CEO_EMAIL || "nhj4626@naver.com");
const CEO_PASSWORD = import.meta.env.VITE_CEO_PASSWORD || ADMIN_PASSWORD;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_PATTERN = /^01[016789]-?\d{3,4}-?\d{4}$/;
export const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

function normalizeEmail(email = "") {
  return String(email || "").trim().toLowerCase();
}

function safeParseUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_USER) || "null");
  } catch {
    return null;
  }
}

function loadAccounts() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_ACCOUNTS) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveAccounts(accounts) {
  localStorage.setItem(STORAGE_ACCOUNTS, JSON.stringify(accounts));
}

function publicUser(account) {
  const { password, ...safeUser } = account;
  return safeUser;
}

function makeAccount(email, password, role, extra = {}) {
  const nextRole = ["member", "seller", "admin"].includes(role) ? role : "member";
  const adminGrade = nextRole === "admin" ? (extra.adminGrade || "staff") : undefined;
  return {
    id: `${nextRole}_${Date.now()}`,
    name: extra.name || ROLE_LABEL[nextRole] || "회원",
    email: normalizeEmail(email),
    phone: extra.phone || "",
    role: nextRole,
    adminGrade,
    password,
    status: nextRole === "seller" ? "seller_review" : "active",
    createdAt: new Date().toISOString(),
    ...extra,
  };
}

export function validateEmail(email) {
  return EMAIL_PATTERN.test(normalizeEmail(email));
}

export function validatePhone(phone) {
  return PHONE_PATTERN.test(String(phone || "").trim());
}

export function validatePassword(password) {
  return PASSWORD_PATTERN.test(String(password || ""));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = safeParseUser();
    if (saved?.email && saved?.role) setUser(saved);
  }, []);

  const setAuthenticatedUser = (account) => {
    const nextUser = publicUser(account);
    localStorage.setItem(STORAGE_USER, JSON.stringify(nextUser));
    setUser(nextUser);
    return nextUser;
  };

  const register = ({ email, password, role = "member", ...extra }) => {
    const nextEmail = normalizeEmail(email);
    if (!validateEmail(nextEmail)) throw new Error("이메일 형식이 올바르지 않습니다.");
    if (!validatePassword(password)) throw new Error("비밀번호는 8자리 이상, 영문·숫자·특수문자를 포함해야 합니다.");
    if (role === "admin") throw new Error("관리자는 회원가입으로 생성할 수 없습니다. 기존 관리자만 운영센터에서 지정할 수 있습니다.");

    const accounts = loadAccounts();
    if (accounts.some((account) => normalizeEmail(account.email) === nextEmail)) {
      throw new Error("이미 가입된 이메일입니다.");
    }

    const account = makeAccount(nextEmail, password, role, extra);
    saveAccounts([...accounts, account]);
    return setAuthenticatedUser(account);
  };

  const authenticate = (email, password, expectedRole = null) => {
    const nextEmail = normalizeEmail(email);
    const nextPassword = String(password || "");
    if (!validateEmail(nextEmail)) {
      throw new Error("이메일 형식이 올바르지 않습니다.");
    }
    if (!nextPassword.trim()) {
      throw new Error("비밀번호를 입력해주세요.");
    }

    const accounts = loadAccounts();
    let account = accounts.find((item) => normalizeEmail(item.email) === nextEmail);

    // 대표이사 계정은 회원가입 없이 관리자 로그인에서 즉시 생성/복구한다.
    // 운영 전 VITE_CEO_PASSWORD로 반드시 실제 비밀번호를 교체한다.
    if (expectedRole === "admin" && nextEmail === CEO_EMAIL && nextPassword === CEO_PASSWORD) {
      account = makeAccount(nextEmail, nextPassword, "admin", {
        id: "admin_ceo_seed",
        name: "노희정",
        title: "대표이사",
        companyName: "대정넥스트",
        ceoEmail: "nhj4626@naver.com",
        ceoPhone: "010-8606-1899",
        homepage: "daejungnext.com",
        establishedAt: "2026년 7월",
        status: "active",
        adminAssigned: true,
        adminGrade: "ceo",
        assignedBy: "system",
      });
      saveAccounts([...accounts.filter((item) => normalizeEmail(item.email) !== nextEmail), account]);
    }

    // 최초 회장 관리자 계정은 회원가입 없이 관리자 로그인에서 즉시 생성/복구한다.
    // 이전 버전 localStorage에 같은 이메일이 일반회원 또는 오래된 비밀번호로 남아 있어도
    // admin@daejungnext.com + neon2016!! 조합이면 회장 권한으로 강제 복구한다.
    if (expectedRole === "admin" && ADMIN_EMAILS.includes(nextEmail) && nextPassword === ADMIN_PASSWORD) {
      account = makeAccount(nextEmail, nextPassword, "admin", {
        id: "admin_chairman_seed",
        name: "최고 관리자",
        status: "active",
        adminAssigned: true,
        adminGrade: "chairman",
        assignedBy: "system",
      });
      saveAccounts([...accounts.filter((item) => normalizeEmail(item.email) !== nextEmail), account]);
    }

    if (!account) {
      if (expectedRole === "admin") throw new Error("관리자 계정이 아닙니다. 관리자 로그인은 회장·사장 권한자가 지정한 계정만 접근할 수 있습니다.");
      throw new Error("가입되지 않은 이메일입니다.");
    }
    if (account.password !== nextPassword) throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
    if (expectedRole && account.role !== expectedRole) {
      if (expectedRole === "admin") throw new Error("관리자 권한이 없는 계정입니다.");
      if (expectedRole === "seller") throw new Error("판매자 계정이 아닙니다. 판매자 회원가입 또는 승인을 확인해주세요.");
      throw new Error("회원 계정이 아닙니다.");
    }
    if (account.status === "blocked") throw new Error("이용이 제한된 계정입니다.");

    return setAuthenticatedUser(account);
  };

  const assignAdmin = (targetEmail, adminGrade = "staff") => {
    if (user?.role !== "admin") throw new Error("관리자만 권한을 지정할 수 있습니다.");
    const currentGrade = ADMIN_GRADES[user?.adminGrade || "staff"] || ADMIN_GRADES.staff;
    if (currentGrade.level < ADMIN_GRADES.president.level) throw new Error("대표이사·회장·사장 권한만 관리자 계정을 지정할 수 있습니다.");
    const nextGrade = ADMIN_GRADES[adminGrade] ? adminGrade : "staff";
    const accounts = loadAccounts();
    const nextEmail = normalizeEmail(targetEmail);
    const found = accounts.some((account) => normalizeEmail(account.email) === nextEmail);
    if (!found) throw new Error("해당 이메일의 회원을 찾을 수 없습니다.");
    const nextAccounts = accounts.map((account) => (
      normalizeEmail(account.email) === nextEmail ? { ...account, role: "admin", adminGrade: nextGrade, status: "active", adminAssigned: true, assignedBy: user.email, assignedAt: new Date().toISOString() } : account
    ));
    saveAccounts(nextAccounts);
    return true;
  };

  const listAccounts = () => loadAccounts().map(publicUser);

  const logout = () => {
    localStorage.removeItem(STORAGE_USER);
    setUser(null);
  };

  const hasRole = (role) => user?.role === role;
  const hasAdminLevel = (minGrade = "staff") => {
    if (user?.role !== "admin") return false;
    const current = ADMIN_GRADES[user?.adminGrade || "staff"] || ADMIN_GRADES.staff;
    const required = ADMIN_GRADES[minGrade] || ADMIN_GRADES.staff;
    return current.level >= required.level;
  };

  return (
    <AuthContext.Provider value={{ user, register, authenticate, assignAdmin, listAccounts, logout, hasRole, hasAdminLevel, getAdminGradeLabel, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
