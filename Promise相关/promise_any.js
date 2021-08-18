Promise.newAny = function (arr) {
  return new Promise((resolve, reject) => {
    let index = 0;
    const errArr = [];
    let result;
    for (let i = 0; i < arr.length; i++) {
      arr[i].then(
        (res) => {
          result = resolve(res);
        },
        (err) => {
          index++;
          errArr.push(err);
          if (index === arr.length) reject(errArr);
        }
      );
    }
  });
};

const promises = [
  Promise.reject("ERROR A"),
  Promise.reject("ERROR B"),
  Promise.reject("result"),
  // Promise.resolve("result"),
];

// Promise.any(promises)
Promise.newAny(promises)
  .then((value) => {
    console.log("value: ", value);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
