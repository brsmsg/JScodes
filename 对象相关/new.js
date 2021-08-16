function myNew(fn, ...args) {
  let newObj = {}

  newObj.__proto__ = fn.prototype;

  fn.call(newObj, ...args);

  return newObj;
}

function Dog(name) {
  this.name = name;
}

Dog.prototype.sayName = function () {
  console.log(this.name)
}

const dog = myNew(Dog, 'new 出来的');
dog.sayName();