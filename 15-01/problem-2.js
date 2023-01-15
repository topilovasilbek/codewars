// 6 kyu - Bit Counting

var countBits = function (n) {
  let str = n.toString(2);
  let count = 0;
  for (let char of str) {
    if (char === "1") count++;
  }
  return count;
};

// console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
// console.log(countBits(7)); // 3
// console.log(countBits(9)); // 2
// console.log(countBits(10)); // 2
