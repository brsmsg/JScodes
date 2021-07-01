Function.prototype.newBind = function (obj, ...args) {
  let that = this;
  return function (...arguments) {
    that.call(obj, ...args, ...arguments);
  };
};

// test
let foo = {
  value: 10,
};

function bar(arg1, arg2) {
  console.log(this.value);
  console.log(arg1, arg2);
}

// var newBar = bar.bind(foo);
var newBar = bar.newBind(foo, 1);
newBar(2);
