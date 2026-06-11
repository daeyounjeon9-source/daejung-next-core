export function calculateScore(item) {
  return (
    (item.sales || 0) * 0.4 +
    (item.clicks || 0) * 0.2 +
    (item.likes || 0) * 0.2 +
    (item.conversion || 0) * 0.2
  );
}

export function getTop10(products = []) {
  return products
    .map(p => ({ ...p, score: calculateScore(p) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}
