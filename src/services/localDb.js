export function getList(key, fallback = []) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function addItem(key, item) {
  const list = getList(key, []);
  const next = [{ id: Date.now(), createdAt: new Date().toLocaleString(), ...item }, ...list];
  localStorage.setItem(key, JSON.stringify(next));
  return next;
}

export function clearList(key) {
  localStorage.removeItem(key);
}

export function clearAllDaejungData() {
  ["dn_products", "dn_members", "dn_notices", "dn_lives"].forEach((key) => localStorage.removeItem(key));
}

export function getDataSummary() {
  return {
    products: getList("dn_products", []).length,
    members: getList("dn_members", []).length,
    notices: getList("dn_notices", []).length,
    lives: getList("dn_lives", []).length
  };
}
