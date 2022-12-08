// 6 kyu - Find the odd int

function findOdd(A) {
  let obj = {};
  for (const i of A) {
    if (i in obj) obj[i]++;
    else obj[i] = 1;
  }
  for (const key in obj) {
    if (obj[key] % 2 !== 0) return +key;
  }
}

console.log(findOdd([0, 1, 0, 1, 0]));