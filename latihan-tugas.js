// Untuk mendapatkan tahun
const today = new Date();
const currentYear = today.getFullYear();
console.log(currentYear);
// output: 2024.

// Menampilkan tanggal dalam bentuk ISO
const now = new Date();
const isoDate = now.toISOString();
console.log(isoDate);
// Output: 2024-09-18T03:00:49.367Z

// Untuk menampilkan bulan dan mengubahnya ke nama bulan
const date = new Date();
const months = [
  "january",
  "February",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
const monthName = months[date.getMonth()];
console.log(monthName);
// September


// Menghitung waktu yang berbeda dalam milidetik
const startDate = new Date('2024-01-01');
const endDate = new Date('2024-12-31');

// Menghitung selisih waktu dalam milidetik
const differenceInMilliseconds = endDate.getTime() - startDate.getTime();

// Menampilkan hasil ke konsol
console.log("Selisih waktu dalam milidetik:", differenceInMilliseconds);
//Output: 31536000000

// Menampilkan hari dalam seminggu
const tanggal = new Date('2024-09-18');
const dayOfWeek = tanggal.getDay();
console.log(dayOfWeek);
// Output: 3


// 6.Mendapatkan jam,menit,detik

const currentTime = new Date();
const hours = currentTime.getHours(); // Mendapatkan jam
const minutes = currentTime.getMinutes(); // Mendapatkan menit
const seconds = currentTime.getSeconds(); // Mendapatkan detik
console.log(`Current time: ${hours}:${minutes}:${seconds}`);
// Output: Current time: 10:28:50


