// 6 kyu - Split Strings

function solution(str) {
  let res = [];
  let count = 0;
  let i = 0;
  if (str.length === 0) return [];
  for (char of str) {
    res[i] === undefined ? res.push(char) : res[i] += char;
    count++;
    if (count === 2) {
      count = 0;
      i++;
    }
  }
  if (res[res.length - 1].length === 1) res[res.length - 1] += '_';
  return res;
}

console.log(solution("Asilbek"));
