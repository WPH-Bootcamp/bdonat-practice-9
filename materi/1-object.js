// Object -> struktur data dengan pasangan key (property) dan value

// 1. Membuat Object
// -. Constructor Object()
let objConstructor = new Object();
// -. Object Literal
let objLiteral = {};

// 2. Literal dan Properti
let user = {
  nama: "Antonius Eko",
  umur: 31,
  pekerjaan: "Software Engineer",
};
console.log(user);

// 3. Mengakses Object (dengan .)
console.log(user.nama);
console.log(user.umur);
console.log(user.pekerjaan);

// 4. Menambahkan Object
user.isMarried = true;
console.log(user);

// 5. Menghapus Property
delete user.pekerjaan;
console.log(user);

// 6. Untuk Property dengan lebih dari 1 kata, maka menggunakan tanda kutip
let biodata = {
  nama: "Yulia",
  hobby: ["Ngoding", "Berenang", "..."],
  "makanan kesukaan": "Ramen",
};

console.log(biodata);

// 7. Pemanggilan Property degan lebih dari 1 kata
console.log(biodata["makanan kesukaan"]);

// 8. Mengakses Property dengan Variabel
let key = "makanan kesukaan";
biodata[key] = "Gacoan";
console.log(biodata[key]);

// 9. Computed Properties
let buah = "jeruk";

let kantongKresek = {
  [buah]: 100,
};
console.log(kantongKresek.jeruk);

// 10. Operator "in" dalam Object
let dataOrang = {
  nama: "John",
  umur: 30,
  alamat: undefined,
};

console.log("nama" in dataOrang);
console.log("alamat" in dataOrang);

// 11. Looping dengan "for..in"
let dataOrang2 = {
  nama: "John",
  umur: 30,
  alamat: undefined,
};

for (let key in dataOrang2) {
  console.log(`${key} : ${dataOrang2[key]}`);
}
