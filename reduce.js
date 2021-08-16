Array.prototype.newReduce = function (callback, initVal) {
  if (initVal === undefined) {
    initVal = this[0];
    this.shift();
  }
  for (let i = 0; i < this.length; i++) {
    initVal = callback(initVal, this[i]);
  }
  return initVal;
};

let val = [1, 2, 3].newReduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(val);
