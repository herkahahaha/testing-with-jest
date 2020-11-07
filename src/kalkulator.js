const { parse } = require("@babel/core");

const tambah = (a, b) => {
  // mengembalikan nilai boolean falses jika angka ditambahkan string
  if (isNaN(a) || isNaN(b)) return false;
  // menambahkan bilangan angka dengan angka berbentuk string diparse ke number
  return Number(a) + Number(b);
};
const kurang = (a, b) => a - b;
const kali = (a, b) => parseInt(a) * parseInt(b);
const bagi = (a, b) => a / b;

module.exports = { tambah, kurang, kali, bagi };
