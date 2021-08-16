function newInstanceOf(obj1, obj2) {
  while (obj1) {
    if (obj1.__proto__ === obj2.prototype) return true;
    obj1 = obj1.__proto__;
  }
  return false;
}

let a = {};
console.log(newInstanceOf(a, Function));
console.log(newInstanceOf(a, Object));

// Function.prototype.a = () => console.log("a----1");
