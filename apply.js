Function.prototype.newApply = function (obj, args) {
  // 对象的fn属性指向这个函数
  obj.fn = this;
  let res = obj.fn(...args);
  delete obj.fn;
  return res
}
// test
let obj = {
  age: 10
}

function test(arg1, arg2, arg3) {
  console.log(this.age);
  console.log(arg1, arg2, arg3);
}

test.newApply(obj, [1, 2, 3]);
// test.newApply(obj);