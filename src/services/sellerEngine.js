export function getSellerLevel(score) {
  if (score >= 90) return 'PLATINUM';
  if (score >= 70) return 'GOLD';
  if (score >= 40) return 'SILVER';
  return 'BRONZE';
}
