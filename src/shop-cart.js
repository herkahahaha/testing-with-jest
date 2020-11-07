const increment = (qty) => parseInt(qty) + 1;
const decrement = (qty) => (qty > 0 ? parseInt(qty) - 1 : 1);
// totals
const subTotal = (price, qty) => price * qty;
// discount
const totalwithDisc = (price, qty, discount = 0) => {
  return (1 - parseFloat(discount) / 100) * price * qty;
};
module.exports = { increment, decrement, subTotal, totalwithDisc };
