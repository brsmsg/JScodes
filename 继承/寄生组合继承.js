function SuperType(name) {
  this.name = name;
}

SuperType.prototype.getName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

function inheritPrototype(sub, sup) {
  // 创建父类形的副本
  // sub.prototype = Object.create(sup.prototype);
  sub.prototype = object(sup.prototype);
  // 重写constructor 指向父类形
  sub.prototype.constructor = sub;
}

function object(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

// inheritPrototype(SubType, SuperType);
SubType.prototype = Object.create(SuperType);
SubType.prototype.constructor = SubType;

let p = new SuperType("kbh");
let c = new SubType("KBH", 22);

p.getName();
c.getName();
