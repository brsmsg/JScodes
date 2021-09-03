function debounce(fn, delay) {
  const that = this;
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(that, args);
    }, delay);
  };
}

const fn = () => {
  console.log("123", new Date());
};

setInterval(debounce(fn, 500), 1000);
// setInterval(debounce(fn, 2000), 1000);
