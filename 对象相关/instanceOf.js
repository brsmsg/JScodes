function newInstanceOf(left, right) {
  while (left !== right.prototype) {
    if (left === null) return false;
    left = left.__proto__;
  }
  return true;
}

let a = {};
console.log(newInstanceOf(a, Function));
console.log(newInstanceOf(a, Object));
