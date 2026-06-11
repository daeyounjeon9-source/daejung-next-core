
export function optimizeSales(products, profile = {}) {
  return products.map(g => ({
    ...g,
    items: g.items.map(i => ({
      ...i,
      salesScore: Math.random()*100 + (profile?.boost || 0)
    }))
  }));
}
