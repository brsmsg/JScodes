// async function test() {
//   let arr = [3, 2, 1];
//   // arr.forEach(async (item) => {
//   //   const res = await fetch(item);
//   //   console.log(res);
//   // });
//   for (const item of arr) {
//     const res = await fetch(item);
//     console.log(res);
//   }
//   console.log("end");
// }

// test();

async function main() {
  test(cb);
  console.log("end");
}

async function test(callback) {
  let i = 0;
  while (i < 3) {
    // foreach中没有在此对async函数做处理！
    await callback.call(undefined, i);
    i++;
  }
}

async function cb(i) {
  const res = await fetch.call(undefined, i);
  console.log(res);
}

function fetch(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

main();
