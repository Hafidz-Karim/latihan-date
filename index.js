// Berdasarkan UTC
const date = new Date();
console.log("Date: ", date);
// Output: 2024-09-18T01:41:35.443Z

// Berdasarkan waktu lokal
const localDate = date.toLocaleDateString();
console.log(localDate);
// Output: 9/18/2024

// Todo: Menampilkan format indonesia
const dateLocalId = date.toLocaleDateString("id-ID");
console.log(dateLocalId);



// Todo: Menampilkan format indonesia leih spesifik
const dateLocalId2 = date.toLocaleDateString("id-ID", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log(dateLocalId2);


// Todo: Menampilkan format indonesia leih spesifik pake jam
const toLocalString = date.toLocaleString("id-ID" );
console.log(toLocalString);


// Todo: Menampilkan format indonesia leih spesifik
const dateLocalId3 = date.toLocaleString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "2-digit",
  });
  console.log(dateLocalId3, "WIB");

  const miliSecond = date.getTime();
  console.log(miliSecond);

  // Todo Milisecond to Date 
  const msToDate = new Date(miliSecond);
  console.log(msToDate);

  // Todo Menambahkan 3.600.000 = menambahkan 1 jam ke Milisecond
  const newMiliSecond = miliSecond + 3600000;
  const newMiliSecond2 = new Date(newMiliSecond);
  console.log(newMiliSecond2);

  // Todo: menyimpan data ke database dalam bentuk string
  const dataBaseMs = date.toISOString();
  console.log(dataBaseMs); 