
export function generateAIProducts(userSignals = {}) {
  const categories = ["디지털","생활가전","주방","뷰티","패션"];

  return categories.map(cat => ({
    id: cat,
    name: cat,
    items: Array.from({length: 6}).map((_,i)=>({
      name: `AI ${cat} 상품 ${i+1}`,
      price: Math.floor(Math.random()*500000),
      score: Math.random()*100
    }))
  }));
}
