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
const difference = endDate.______________ - startDate.______________; // Lengkapi untuk menghitung selisih dalam milidetik
console.log(difference);