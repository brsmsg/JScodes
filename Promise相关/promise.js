const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

// class MyPromise {
//   constructor(executor) {
//     this.status = PENDING;
//     this.value = undefined;
//     this.error = undefined;
//     this.resolveQueue = [];
//     this.rejectQueue = [];

//     const resolve = (value) => {
//       if (this.status === PENDING) {
//         this.status = FULFILLED;
//         this.value = value;

//         this.resolveQueue.forEach(fn => fn(value));
//       }
//     }

//     const reject = (value) => {
//       if (this.status === PENDING) {
//         this.status = REJECTED;
//         this.value = value;

//         this.rejectQueue.forEach(fn => fn(value));
//       }
//     }

//     try {
//       executor(resolve, reject);
//     } catch {
//       reject(error);
//     }
//   }

//   then(onFulfilled, onRejected) {
//     if (this.status === PENDING) {
//       this.resolveQueue.push(onFulfilled);
//       this.rejectQueue.push(onRejected);
//     }
//     if (this.status === FULFILLED) {
//       onRejected(this.value);
//     }
//     if (this.status === REJECTED) {
//       onFulfilled(this.error);
//     }
//   }
// }

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.resolveStack = [];
    this.reasonStack = [];

    const resolve = (value) => {
      this.value = value;
      this.status = FULFILLED;
      this.resolveStack.forEach((fn) => { fn(value) })
    }

    const reject = (reason) => {
      this.reason = reason;
      this.status = REJECTED;
      this.reason.forEach((fn) => { fn(reason) })
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    console.log(this.status);
    if (this.status === PENDING) {
      // 保证异步执行
      this.resolveStack.push(onFulfilled);
      this.reasonStack.push(onRejected);
    }
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
  }


}


const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 1000)
});

p.then((res) => {
  console.log(res);
})