// 6 kyu - Pyramid Array

function pyramid(n) {
  if (!n) return [];
  let res = [];
  let i = 0;
  while (i < n) {
    let arr = new Array(i + 1);
    arr.fill(1);
    res.push(arr);
    i++;
  }
  return res;
}

// console.log(pyramid(0)); // []
// console.log(pyramid(1)); // [[1]]
// console.log(pyramid(2)); // [[1], [1, 1]]
console.log(pyramid(3)); // [[1], [1, 1], [1, 1, 1]]
