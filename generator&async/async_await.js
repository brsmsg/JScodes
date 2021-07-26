function takeLongTime(n) {
  return new Promise(resolve => {
    setTimeout(() => resolve(n + 200), n);
  });
}

function step1(n) {
  console.log(`step1 with ${n}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(n), n + 200);
  });
}

function step2(n) {
  console.log(`step2 with ${n}`);
  return takeLongTime(n);
}

function step3(n) {
  console.log(`step3 with ${n}`);
  return takeLongTime(n);
}

// function doIt() {
//   console.time("doIt");
//   const time1 = 300;
//   step1(time1)
//     .then(time2 => step2(time2))
//     .then(time3 => step3(time3))
//     .then(res => {
//       console.log(`result is ${res}`);
//     })
// }

async function doIt() {
  const time1 = 300;
  // 注意！这里time2是取了step1返回的Promise执行完resolve后返回的值
  try {
    const time2 = await step1(time1);
  } catch (err) {
    console.log(err);
  }
  // const time3 = await step2(time2);
}

// doIt();
console.log(decodeURI("%7B%22category%22%3A%22b%22%7D"))

// let a = { category: "building" };
let a = { id: 21 };
let j = JSON.stringify(a);

console.log(encodeURI(j));