const kalk = require("../kalkulator.js");

// Penjumlahan
test("penjumlahan", () => {
  expect(kalk.tambah(1, 3)).toBe(4);
});
// penjumlahan dengan string
test("penjumlahan dengan string harus false", () => {
  expect(kalk.tambah(1, "alpha")).toBe(false);
});

test("pengurangan", () => {
  expect(kalk.kurang(7, 3)).toBe(4);
});
test("perkalian", () => {
  expect(kalk.kali(7, 3)).toBe(21);
});
// membulatkan decimal
test("perkalian decimal output dibulatkan", () => {
  expect(kalk.kali(3.78, 5)).toBe(15);
});
test("pembagian", () => {
  expect(kalk.bagi(6, 3)).toBe(2);
});
