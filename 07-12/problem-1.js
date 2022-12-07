// 6 kyu - Even Fibonacci Sum

function fibonacci(max) {
  let result = [0, 1];
  while (result[result.length - 1] < max) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  result.pop();
  let res = result.reduce((a, b) => {
    let isEven = b % 2 === 0;
    return isEven ? a + b : a;
  }, 0);
  return res;
}
console.log(fibonacci(30));
