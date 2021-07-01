Array.prototype.newReduce = function (callback, initVal) {
  for (let i = 0; i < this.length; i++) {
    initVal = callback(initVal, this[i]);
  }
  return initVal;
}

let val = [1, 2, 3].newReduce((acc, cur) => { return acc + cur }, 0);
console.log(val)