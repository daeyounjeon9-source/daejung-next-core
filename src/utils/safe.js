export function safeNumber(value) {
  return typeof value === 'number' && !isNaN(value) ? value : 0;
}
