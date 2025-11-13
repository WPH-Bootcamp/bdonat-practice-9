// Constructor dan Operator New

/*
    Constructor Function :
    Constructor functions secara teknis adalah fungsi biasa. Namun, ada dua konvensi yang digunakan:

    1. Nama constructor function dimulai dengan huruf kapital.
    2. Constructor function sebaiknya dijalankan hanya dengan operator `new`.
*/
function User(name) {
  this.name = name;
  this.isHuman = false;
}

let user = new User("Jack Ma");
console.log(user);
console.log(user.name);
console.log(user.isHuman);

// -. new function() { … }
let userEncapsulation = new (function (name) {
  this.name = name;
  this.date = Date();
})();

userEncapsulation.name = "Renday";

console.log(userEncapsulation);
console.log(userEncapsulation.name);

// -. Return dari Constructors
function BigUser() {
  this.nama = "John";
  return { nama: "Godzilla" }; // Mengembalikan Object
}

console.log(new BigUser().nama);

function SmallUser() {
  this.name = "John";
  return; // Mengembalikan Kosong
}

function MiddleUser() {
  this.nama = "test";
  return 0; // Mengembalikan Primitive
}

console.log(new SmallUser().name);
console.log(new MiddleUser().nama);

function User2() {
  this.name = "Jack ma";
}

let user2 = new User2();
console.log(user2);

// Methods dalam Constructor
function Enemy(type, hp) {
  this.type = type;
  this.hp = hp;

  this.attack = function () {
    console.log(`${this.type} menyerang..`);
  };
}

const goblin = new Enemy("Goblin", 100);
console.log(goblin);
goblin.attack();

const joker = new Enemy("Clown", 100);
console.log(joker);
