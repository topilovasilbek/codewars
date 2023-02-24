// 6 kyu - Count characters in your string

function count(str) {
  if (!str.trim()) return {};
  let res = {};
  for (let char of str) {
    if (char in res) res[char]++;
    else res[char] = 1;
  }
  return res;
}

console.log(count("aba")); // { a: 2, b: 1 }
// console.log(count("")); // {}
