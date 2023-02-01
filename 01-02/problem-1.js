// 6 kyu - Persistent Bugger.

function persistence(num) {
  let str = num.toString();
  let count = 0;
  while (str.length > 1) {
    str = eval(str.split("").join("*")).toString();
    count++;
  }
  return count;
}

console.log(persistence(39)); // 3
// console.log(persistence(4)); // 0
// console.log(persistence(25)); // 2
// console.log(persistence(999)); // 4
