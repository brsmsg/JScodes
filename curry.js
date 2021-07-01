/*
  实现一个 add 方法，使计算结果能够满足以下预期：
  add(1)(2)(3) = 6;
  add(1, 2, 3)(4) = 10;
  add(1)(2)(3)(4)(5) = 15;
 */

function add(...args) {
  const _args = args;
  let caculate = function () {
    _args.push(...arguments);
    return caculate;
  }

  caculate.toString = function () {
    return _args.reduce((prev, cur) => prev + cur);
  }

  return caculate;
}

console.log(add(1)(2)(3).toString());
console.log(add(1, 2, 3)(4));
console.log(add(1)(2)(3)(4)(5));

add(1)