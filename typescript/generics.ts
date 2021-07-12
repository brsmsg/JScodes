function generics<T>(arg1: T, arg2: T) {
  console.log(typeof arg1, typeof arg2);
}

generics({ a: 1 }, {});

let list = [3, 2, 1];
let index1, index2;
for (let i = 1; i < 3; i++) {
  if (list[i] < list[i - 1]) {
    console.log(i - 1, i, index1, index2);
    if (!index1) {
      index1 = i - 1;
    } else if (!index2) {
      index2 = i;
    }
  }
}
console.log(index1, index2);
