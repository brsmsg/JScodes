function curry(fn, ...args1) {
  const that = this;
  return function (...args2) {
    const args = [...args1, ...args2];
    if (args.length >= fn.length) {
      return fn.call(that, ...args);
    } else {
      return curry.call(that, fn, ...args);
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let sumFn = curry(sum);

console.log(sumFn(1)(2)(3));
console.log(sumFn(1)(2, 3));
