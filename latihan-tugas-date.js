
// 1.Dapatkan milisecond dari penjumlahan waktu pembuatan 10.000.000 kata hello Santri
const mulaiHitung = new Date();
console.log(mulaiHitung.getTime());

for (let i = 0; i < 10000; i++) { console.log("Hello Santri"); }

const hitunganTotal = new Date();
console.log(hitunganTotal.getTime());

const totalMiliSecond = hitunganTotal - mulaiHitung;
console.log(totalMiliSecond);

// Output: 1456.

// 2.