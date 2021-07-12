// function newInstanceOf(left, right) {
//   while (left !== right.prototype) {
//     if (left === null) return false;
//     left = left.__proto__;
//   }
//   return true;
// }

// let a = {};
// console.log(newInstanceOf(a, Function));
// console.log(newInstanceOf(a, Object));

// Function.prototype.a = () => console.log("a----1");

Object.prototype.b = () => console.log("b----2");

function A() {}

var a = new A();

// console.log(a.a());

// console.log(a.b());

// a.a();

a.b();

console.log(a instanceof A);
console.log(a instanceof Function);
console.log(a instanceof Object);
