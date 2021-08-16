Array.prototype.newMap = function (fn) {
  return this.reduce((prev, cur) => {
    prev.push(fn(cur));
    return prev;
  }, []);
};

console.log(
  [1, 2, 3].newMap((item) => {
    return (item += 1);
  })
);
