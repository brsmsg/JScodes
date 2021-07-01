const flat = (arr) => {
  let res = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      res.push(...flat(item));
    } else {
      res.push(item);
    }
  });

  return res;
}

console.log(flat([1, 2, [1, 2, [3, 4]], 3, [3]]))