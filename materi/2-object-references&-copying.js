let user1 = {
  nama: "Redpunk",
};

let user2 = {
  nama: "Ucup",
};

let user3 = user1;

console.log(user1 == user2);
console.log(user1 === user3);
console.log(user1);
console.log(user3);

let nama1 = "ucup";
let nama2 = "ucup";

console.log(nama1 == nama2);

// Cloning dan Merging Objek dengan Object.assign
// -. Manual Cloning (Shallow Copy)
let user4 = {
  nama: "Tom Holland",
  age: 25,
};
console.log(user4);

let clone1 = {};

for (let key in user4) {
  clone1[key] = user4[key];
}

clone1.nama = "Tom Hardi";
console.log(clone1);

// -. Object.assign
let user5 = {
  nama: "Dwayne Johnson",
  age: 45,
};

console.log(user5);

let clone2 = Object.assign({}, user5);
clone2.nama = "Bruce Lee";
clone2.alamat = "Jl Juanda";
console.log(clone2);

// Nested Cloning
let user6 = {
  nama: "Robert",
  sizes: {
    height: 180,
    weight: 90,
  },
};

let clone3 = Object.assign({}, user6);

console.log(user6.sizes === clone3.sizes);

// Structured Clone
let deepClone = structuredClone(user6);
console.log(user6.sizes === deepClone.sizes);
