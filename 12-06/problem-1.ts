// 6 kyu - Sum two arrays

function addArrays(array1: number[], array2: number[]) {
  let nbr1 = parseInt(array1.join("")) || 0;
  let nbr2 = parseInt(array2.join("")) || 0;
  let sum = Math.abs(nbr1 + nbr2);
  let sign = nbr1 + nbr2 < 0 ? -1 : 1;
  let res = sum
    .toString()
    .split("")
    .map((x) => parseInt(x));

  res[0] *= sign;

  return nbr1 === 0 && nbr2 === 0 ? [] : res;
}

console.log(addArrays([], [6, 7])); // [1, 3, 4]

/* function addArrays(array1: number[], array2: number[]) {
  if (!array1.length && !array2.length) return [];
  let arrayToNumber1 = array1.length ? Number(array1.join("")) : 0;
  let arrayToNumber2 = array2.length ? Number(array2.join("")) : 0;
  let sum = arrayToNumber1 + arrayToNumber2;
  let res = String(sum)
    .split("")
    .map((item) => Number(item));
  return res;
} */
