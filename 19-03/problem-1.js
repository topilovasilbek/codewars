// 5 kyu - Object extend

var extend = function () {
  let res = {};
  Array.from(arguments).forEach((el) => {
    if (typeof el === "object" && !Array.isArray(el)) {
      for (let key in el) {
        if (!(key in res)) res[key] = el[key];
      }
    }
  });
  return res;
};

console.log(extend({ a: 1, b: 2 }, { c: 3 })); // should === {a: 1, b: 2, c: 3}
// console.log(extend({ a: 1, b: 2 }, { c: 3 }, { d: 4 })); // should === {a: 1, b: 2, c: 3, d: 4}
// console.log(extend({ a: 1, b: 2 }, { a: 3, c: 3 })); // should  === {a: 1, b: 2, c: 3}
// console.log(extend({ a: false, b: null }, { a: true, b: 2, c: 3 })); // should  === {a: false, b: null, c: 3}
// console.log(extend({ a: 1, b: 2 }, { c: 3 }, { d: 5 })); // should === {a: 1, b: 2, c: 3, d: 4}
