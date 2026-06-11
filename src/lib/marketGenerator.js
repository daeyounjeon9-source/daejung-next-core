
export function generateMarket(products) {
  return products.map(g => ({
    ...g,
    marketStrength: Math.random()*100
  }));
}
