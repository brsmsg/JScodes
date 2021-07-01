Promise.myRace = (arr) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].then((res)=>{
        resolve(res)
      },
      (rej)=>{
        reject(rej);
      })
    }
  });
}



const a = new Promise((resolve) => {
  setTimeout(() => {
    resolve(500);
  }, 500);
});
const b = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
});

Promise.myRace([b, a]).then((res) => {
  console.log('结果：', res);
});