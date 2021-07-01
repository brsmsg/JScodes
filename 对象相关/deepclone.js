const checkType = (target) => {
  return Object.prototype.toString.call(target).slice(8, -1)
}

function deepClone(obj, map = new WeakMap()) {
  const type = checkType(obj);
  let target;
  // 被记录直接返回
  if (map.get(obj)) return map.get(obj)
  if (type === 'Object') {
    target = {};
  } else if (type === 'Array') {
    target = [];
  } else {
    return obj;
  }

  map.set(obj, target); //记录引用关系

  for (let key in obj) {
    let value = obj[key];
    if (typeof value === 'object') {
      target[key] = deepClone(value, map);
    } else {
      target[key] = value;
    }
  }

  return target;
}

let obj = {//应该考虑更复杂的数据
  name: 'lala',
  foo: function () { let a = 2 },
  skill: {
    js: 1,
    css: 2,
  },
  c: {
    a: 2,
  }
}

obj.skill.z = obj.c
obj.c.d = obj.skill

const newObj = deepClone(obj);
newObj.skill.js = 10000
console.log(obj)
console.log(newObj)