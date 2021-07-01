// 核心：all方法一定返回promise对象，直接return new Promise
// 遍历传入参数
// 何时进行判断？使用index计数，使用then之后成功就对index++,并把结果push进res
// 当index为length时,就调用executor中resolve方法

Promise.myAll = (arr) => {
  return new Promise((resolve, reject) => {
    let index = 0;
    let result = []
    for (let i = 0; i < arr.length; i++) {
      arr[i].then((res) => {
        index++;
        result.push(res);
        if(index === arr.length){
          resolve(result);
        }
      },
        (rej) => {
          reject(rej)
        })
    }
  })
}


// 测试
const a = new Promise((resolve) => {
  setTimeout(() => {
    resolve(500);
  }, 500);
})

const b = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000);
    // reject('reject')
  }, 1000);
})

Promise.myAll([a, b]).then((res) => {
  console.log(res);
}, (err) => {
  console.log(err);
}
)