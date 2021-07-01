function SuperType() {
  
};

const obj1 = {
  a: 1
}

const a = Object.create(obj1);

console.log(a.__proto__ === obj1);