const PENDING = 'PENDING';
const FULFILED = 'FULFILLED';
const REJECTED = 'REJECTED';

class NewPromise {
  constructor(executor) {
    // 默认状态
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 存放成功的回调 (订阅者回调数组)
    this.onResolveCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks = [];
    // 成功调用此方法

    // 发布信息，即调用订阅者的回调函数
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILED;

        // 依次执行对应函数
        this.onResolveCallbacks.forEach(fn => fn());
      }
    }

    // 失败调用此方法
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
      }
      // 依次执行对应函数
      this.onRejectedCallbacks.forEach(fn => fn());
    }

    try {
      // 立即执行
      executor(resolve, reject);
    } catch (error) {
      // 发横异常时执行失败逻辑
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }

    if (this.status === PENDING) {
      // pending将onFulfilled和onRejected函数存放起来，确定后再执行
      // 订阅者再发布者处登记
      this.onResolveCallbacks.push(() => {
        onFulfilled(this.value);
      });

      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      })
    }
  }

}

const promise = new NewPromise((resolve, reject) => {
  // resolve('成功');
  setTimeout(() => {
    resolve('成功');
  }, 1000)
});

promise.then(
  (data) => {
    console.log(data)
  },
  (err) => {
    console.log(err);
  }
);