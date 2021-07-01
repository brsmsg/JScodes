Function.prototype.newCall = function (obj, ...args) {
  obj.fn = this;
  const res = obj.fn(...args);
  delete obj.fn;
  return res;
};

// test
let obj = {
  age: 10,
};

function test(arg1, arg2, arg3) {
  console.log(this.age);
  console.log(arg1, arg2, arg3);
}

test.newCall(obj, 1, 2, 3);
