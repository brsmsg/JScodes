function debounce(fn, delay) {
  let timer;
  let that = this;
  return function (...args) {
    timer = setTimeout(() => {
      fn.call(that, args);
    }, delay);
  };
}

const fn = () => {
  console.log("123", new Date());
};

setInterval(debounce(fn, 500), 1000);
// setInterval(debounce(fn, 2000), 1000);
