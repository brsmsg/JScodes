Array.prototype.newMap = function (fn) {
  return this.reduce((acc, cur) => {
    acc.push(fn(cur));
    return acc
  }, [])
}

console.log([1, 2, 3].newMap((item) => { return item += 1 }));