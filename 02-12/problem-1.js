// 6 kyu - Sum of Digits / Digital Root

function digitalRoot(n) {
  let str = n.toString();
  let sum = 0;
  while (str.length > 1) {
    sum = 0;
    for (let char of str) {
      sum += parseInt(char);
    }
    str = sum.toString();
  }
  return sum
}
console.log(digitalRoot(16)); // 7
console.log(digitalRoot(456)); // 6 because 4+5+6=15=1+5=6
