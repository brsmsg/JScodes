function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.getName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name);
  this.age = age;
}

// 继承方法
SubType.prototype = new SuperType();

SubType.prototype.getAge = function () {
  console.log("subname", this.name);
  console.log("subAge", this.age);
};

SubType.prototype.getColor = function () {
  console.log(this.colors);
}

const superInstance = new SuperType("superkbh");

const subInstance = new SubType("kbh", 18);


superInstance.getName();

subInstance.getName();
subInstance.getAge();


superInstance.colors.push("123");
subInstance.getColor();