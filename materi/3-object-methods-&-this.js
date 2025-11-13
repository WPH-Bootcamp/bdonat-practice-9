// Object Methods and "this"

// 1. Methods
// Contoh Object Methods
let users = {
  nama: "Ucup",
  umur: 30,
  sayHi: function () {
    console.log("Helloo, selamat pagi");
  },
};

users.run = function () {
  console.log("Lariii, ada apiiii.....");
};

users.sayHi();
users.run();

// Contoh Lain
let users2 = {
  sayHi() {
    console.log("Helloooo");
  },
};

users2.sayHi();

// 2. "this" dalam Methods
let downey = {
  nama: "Downey",
  sayHi() {
    console.log(`Helloo ${this.nama}`);
  },
};

let mikel = {
  nama: "Mikel",
  sayHi() {
    console.log(`Helloo ${this.nama}`);
  },
};

console.log(downey.nama);
downey.sayHi();
mikel.sayHi();
