function* myGenerator() {
  console.log(yield Promise.resolve(1)); //1
  console.log(yield Promise.resolve(2)); //2
  console.log(yield Promise.resolve(3)); //3
}

function run(gen) {
  let g = gen();

  function _next(val) {
    let res = g.next(val);
  }

  _next();  // 第一次执行
}
