// Optional Chaining
// Contoh Optional Chaining
let user = {
  nama: "Dicky",
  alamat: {
    kota: "Jakarta",
    kodePos: 123412,
  },
};

console.log(user.alamat?.provinsi?.kodeProv);

// Contoh Lain
let user2 = null;

console.log(user2?.address); // undefined
console.log(user2?.address?.street); // undefined
