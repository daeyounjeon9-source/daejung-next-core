
import { generateAIProducts } from "./aiProductGenerator";
import { optimizeSales } from "./aiSalesEngine";
import { generateMarket } from "./marketGenerator";
import { enterpriseOS } from "./enterpriseOS";

export function runEngine(state) {
  const products = generateAIProducts();
  const sales = optimizeSales(products, state?.profile);
  const market = generateMarket(sales);
  const enterprise = enterpriseOS(state);

  return {
    products: market,
    enterprise
  };
}
