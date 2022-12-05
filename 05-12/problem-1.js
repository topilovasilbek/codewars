// 6 kyu - Find Number With Maximum Number Of Divisors
// Solution Passed, but Timed Out

const divNum = (a, b) => {
  if (a === b) return a;
  if (a > b) return "Error";
  let bigNumber = 0;
  let bigCount = 0;
  let i = a;
  while (i <= b) {
    let sum = 0;
    let j = 0;
    while (j <= i) {
      if (i % j === 0) sum++;
      j++;
    }
    if (sum > bigCount) {
      bigNumber = i;
      bigCount = sum;
    }
    i++;
  }
  return bigNumber;
};

console.log(divNum(15, 30)); // 24
console.log(divNum(1, 2)); // 2
console.log(divNum(1, 2)); // 2
console.log(divNum(52, 156)); // 120
