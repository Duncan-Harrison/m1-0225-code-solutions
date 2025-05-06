'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
function priceToCost(num) {
  const cost = { price: num, salePrice: num / 2 };
  return cost;
}
const fullPrices = prices.map((el) => priceToCost(el));
console.log('Price objects ', fullPrices);
function formatPrice(mon) {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const print = USDollar.format(mon);
  const printPrice = `${print}`;
  return printPrice;
}
const priceListings = prices.map((el) => formatPrice(el));
console.log('Formatted prices ', priceListings);
