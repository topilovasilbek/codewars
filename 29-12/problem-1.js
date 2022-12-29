// 6 kyu - Maximum and minimum

function max(...values) {
  const arr = values.flat(Infinity).map((value) => Number(value));

  if (!arr.length) return 0;
  if (arr.includes(NaN)) return NaN;

  return arr.reduce((acc, current) => (current > acc ? current : acc));
}

console.log(max(1, 2, [3, ["4"]]));

function min(...values) {
  const arr = values.flat(Infinity).map((value) => Number(value));

  if (!arr.length) return 0;
  if (arr.includes(NaN)) return NaN;

  return arr.reduce((acc, current) => (current < acc ? current : acc));
}

console.log(min(1, 2, [3, [4, +0]]));
