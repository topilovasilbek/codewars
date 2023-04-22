// 5 kyu - Number of trailing zeros of N!

function zeros(n) {
  if (n < 5) return 0;
  let arr = [];
  while (n >= 5) {
    n = parseInt(n / 5);
    arr.push(n);
  }
  return eval(arr.join("+"));
}

console.log(zeros(0)); // 0 "Testing with n = 0"
console.log(zeros(5)); // 1 "Testing with n = 5"
console.log(zeros(6)); // 1 "Testing with n = 6"
console.log(zeros(30)); // 7 "Testing with n = 30"
