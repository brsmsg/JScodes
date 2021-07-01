const unique = (arr) => {
  let s = new Set();
  let res = [];
  // arr.forEach(item => {
  //   if (!s.has(item)) {
  //     res.push(item);
  //     s.add(item);
  //   }
  // })
  console.log([...new Set(arr)])
  console.log(res);
  return res
}

unique([1, 1, 1, 13, 4, 3, 5, 5])