export function getBestPrice(product) {
  const prices = [
    product.temuPrice,
    product.aliexpressPrice,
    product.coupangPrice,
    product.naverPrice
  ].filter(Boolean);

  return Math.min(...prices);
}

export function isValidPrice(product) {
  const best = getBestPrice(product);
  return product.myPrice <= best;
}
