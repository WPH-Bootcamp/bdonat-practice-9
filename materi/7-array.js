// Array => Larik atau list atau urutan

// 1. Cara Membuat Array
// -. Constructor Array
let arr1 = new Array();
console.log(arr1);
// -. Literal Array
let arr2 = [];
console.log(arr2);

// 2. Mengakses dan Mengelola Elemen Array
/*
    NOTES:
    Indexing : Posisi urutan dari elemen array dan selalu mulai dari 0
*/

let buahBuahan = ["Apel", "Jeruk", "Pisang"];
console.log(buahBuahan);

// -. Mengakses Elemen Array
console.log(buahBuahan[2]);

// -. Mengubah Elemen Array
buahBuahan[1] = "Pakis";
console.log(buahBuahan);

// -. Menambahkan Elemen Array
buahBuahan[3] = "Jamblang";
console.log(buahBuahan);

// -. Mengambil Total Array
console.log("Panjang : " + buahBuahan.length);
console.log("Index : " + String(buahBuahan.length - 1));

// 3. Array Dapat Menyimpan Elemen dari Tipe Data Apapun
let tipeDataApapun = [1, "Hello", { nama: "ucup" }, "HAHAHAHHA"];
console.log(tipeDataApapun);

// 4. Mendapatkan Elemen Terakhir dengan “at”
console.log(tipeDataApapun[3]);
console.log(tipeDataApapun.at(-2));
