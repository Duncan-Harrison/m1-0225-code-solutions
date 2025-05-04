const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
interface Cost {
  price: number;
  salePrice: number;
}

function priceToCost(num: number): Cost {
  const cost: Cost = { price: num, salePrice: num / 2 };
  return cost;
}

const fullPrices: Cost[] = prices.map((el) => priceToCost(el));
console.log('Price objects ', fullPrices);

function formatPrice(mon: number): string {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const print = USDollar.format(mon);
  const printPrice: string = `${print}`;
  return printPrice;
}

const priceListings: string[] = prices.map((el) => formatPrice(el));
console.log('Formatted prices ', priceListings);
