function isObject(obj) {
  if (obj && typeof obj === "object") return true;
  return false;
}

/** 建立响应式数据 */
function reactive(obj) {
  if (!isObject(obj)) return obj;
  const handler = {
    get(target, property, receiver) {
      // 使用Reflect更规范可维护，其实使用target[property]也可以
      const res = Reflect.get(target, property, receiver);
      console.log("target---", target);
      track(target, property);
      return reactive(res);
    },
    set(target, property, value, receiver) {
      const res = Reflect.set(target, property, value, receiver);
      trigger(target, property);
      return res;
    },
  };
  const observed = new Proxy(obj, handler);
  return observed;
}

const effectStack = [];
/** 声明响应式函数cb */
function effect(cb) {
  function rxEffect() {
    try {
      effectStack.push(rxEffect);
      return cb();
    } finally {
      // 完成依赖收集后pop出去
      effectStack.pop();
    }
  }

  return rxEffect();
}

const targetMap = new WeakMap();
/** 建立数据和callback的映射关系 */
function track(target, key) {
  const effectFn = effectStack[effectStack.length - 1];
  if (effectFn) {
    // 针对响应式对象找到/构建depsMap
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      depsMap = new Map();
      targetMap.set(target, depsMap);
    }
    let deps = depsMap.get(key);
    if (!deps) {
      console.log(key);
      deps = new Set();
      depsMap.set(key, deps);
    }
    deps.add(effectFn);
  }
}

/** 数据改变时根据映射关系，执行callback */
function trigger(target, key) {
  console.log("trigger", effectStack);
  const depsMap = targetMap.get(target);
  console.log(depsMap);
  if (depsMap) {
    const deps = depsMap.get(key);
    if (deps) {
      deps.forEach((effect) => {
        console.log(effect);
        effect();
      });
    }
  }
}
