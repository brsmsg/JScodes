export function deepClone<T>(target: T): T | undefined {
  if (target === null || typeof target !== "object") return target;
  if (target instanceof RegExp) return new RegExp(target) as any;
  if (target instanceof Date) return new Date(target) as any;

  if (target instanceof Array) {
    const cp = [] as any[];
    (target as any[]).forEach((v) => {
      cp.push(v);
    });
    return cp.map((n: any) => deepClone<any>(n)) as any;
  }
  if (typeof target === "object" && target !== {}) {
    const cp = { ...(target as { [key: string]: any }) } as {
      [key: string]: any;
    };
    Object.keys(cp).forEach((k) => {
      cp[k] = deepClone<any>(cp[k]);
    });
    return cp as T;
  }
}

const a = {
  c: {
    children: [1, 2, 3, { e: { children: [2, 2, 3] } }] as any[],
  },
};
const b: any = deepClone(a);
a.c.children.push(5, 6, { d: 1 });
a.c.children[3].e.children.push(4);
console.log("b", b);
console.log("a", a);
console.log(a.c?.children[3]);
console.log(b.c?.children[3]);
