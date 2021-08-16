// setTimeout 实现
function throttle1(fn, delay) {
  let timer;
  let that = this;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.call(that, args);
        timer = null;
      }, delay);
    }
  };
}

// 时间戳实现
function throttle2(fun, delay) {
  let previous = 0;
  return function (...args) {
    let _this = this;
    let now = +new Date();
    if (now > previous + delay) {
      previous = now;
      fun.apply(_this, args);
    }
  };
}

let boom = function () {
  console.log("123", new Date());
};

// setInterval(throttle1(boom, 1000), 100);
setInterval(throttle1(boom, 1000), 2000);
