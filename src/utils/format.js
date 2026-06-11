export function formatWon(value) {
  return Number(value || 0).toLocaleString() + "원";
}
