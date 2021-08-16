function deepClone(source, map = new WeakMap()) {
  if (typeof source !== "object") return source;
  if (map.get(source)) return map.get(source);

  let target = {};
  map.set(source, target);
  for (const key in source) {
    target[key] = deepClone(source[key], map);
  }
  return target;
}

let obj = {
  //应该考虑更复杂的数据
  name: "lala",
  skill: {
    js: 1,
    css: 2,
  },
};

obj.a = obj;

let newobj = deepClone(obj);
newobj.skill.js = 100;
console.log(obj); //{ name: 'lala', skill: { js: 1, css: 2 } }
console.log(newobj); //{ name: 'lala', skill: { js: 99, css: 2 } }
