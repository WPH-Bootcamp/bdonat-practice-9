// Internal Array

// 1. Looping di array
let buahBuahan = ["Mangga", "Jeruk", "Markisa", "Jamblang", "Apa Kek"];

// -. For Loop
for (let i = 0; i < buahBuahan.length; i++) {
  console.log(buahBuahan[i]);
}

console.log("==========");

// -. For Of
for (let buah of buahBuahan) {
  console.log(buah);
}

console.log("==========");

// -. forEach
buahBuahan.forEach(function (buah) {
  console.log(buah);
});

console.log("==========");

// -. map
buahBuahan.map((buah, index) => {
  console.log((index + 1), buah);
});
