// 6 kyu - Unique In Order

var uniqueInOrder = function (iterable) {
  let arr = iterable;
  if (!Array.isArray(iterable)) arr = iterable.split("");
  let res = [];
  for (let el of arr) if (res[res.length - 1] !== el) res.push(el);
  return res;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ["A", "B", "C", "D", "A", "B",];
// console.log(uniqueInOrder([1, 1, 2, 1, 2, 3, 3, 3])); // [1, 2, 3];
