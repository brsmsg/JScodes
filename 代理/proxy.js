const target = {
  foo: "bar",
};

const handler = {
  get() {
    return "hanlder override"
  },
  set() {
    console.log("set")
  }
}

const proxy = new Proxy(target, handler);
console.log(target.foo)
console.log(proxy.foo)
proxy.foo = 1;