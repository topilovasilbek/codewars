// 6 kyu - Find the unique number

function findUniq(arr) {
  let res;
  arr.map((item, index, array) => {
    if (array.indexOf(item) === array.lastIndexOf(item)) {
      res = item;
    }
  });
  return res;
}
console.log(findUniq([1, 1, 2]));
