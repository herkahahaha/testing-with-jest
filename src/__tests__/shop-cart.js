const {
  increment,
  decrement,
  subTotal,
  totalwithDisc
} = require("../shop-cart.js");

describe("Test for shopping card", () => {
  test("added product", () => {
    expect(increment(2)).toBe(3);
  });
  test("decrement product", () => {
    expect(decrement(0)).toBe(1);
  });
  test("total shop products", () => {
    expect(subTotal(1000, 3)).toBe(3000);
  });
  test("total shop products after disc", () => {
    expect(totalwithDisc(1000, 3, 23)).toBe(2310);
  });
});
