# testing-with-jest
Created with CodeSandbox

jadi akibat kegabutan dan **KEMALASAN** hari ini, coba baca dokumentasi [Jest](https://jestjs.io) testing unit pakek javascript<br/>
hajar ngoding tipsitipsi, harap baca dlu dokumentasinya agar gak jalanjalan nyasar

> ini **BASIC** loh yaa, tapi gak tau nanti sejauh mana wkwkwk

contoh buat fungsi kalkulator sederhana dulu ajee 
```javascript
const kurang = (a, b) => a - b;
```

buat file test nya didalem folder `__tests__` 

```javascript

   // Import dulu ya filenya gaess
   const kalk = require("../kalkulator.js");

  // yang hasilnya bener
  test("pengurangan", () => {
    expect(kalk.kurang(7, 3)).toBe(4);
  });

 // kalo mau hasil salah 
 test("pengurangan", () => {
  expect(kalk.kurang(7, 3)).toBe(5);
});
```

kalo di teks editor bisa run command _yarn test /npm test_ , bisaa keliatan mana yang **PASS** ato **FAIL**
