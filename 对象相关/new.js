function myNew(fn, ...args) {
  // 先创建一个空对象
  const obj = {}
  // proto指向构造函数的prototype
  obj.__proto__ = fn.prototype;
  const result = fn.call(obj, ...args);
  // 如果返回null/undefined，我们返回obj，否则返回result
  return result instanceof Object ? result : obj;
}

function Dog(name) {
  this.name = name;
}

Dog.prototype.sayName = function () {
  console.log(this.name)
}

const dog = myNew(Dog, 'new 出来的');
dog.sayName();