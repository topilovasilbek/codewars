// 6 kyu - Break camelCase

function solution(string) {
  if (!string.length) return "";
  let res = "";
  for (let char of string) {
    if (char === char.toUpperCase()) res += " " + char;
    else res += char;
  }
  return res;
}

console.log(solution("camelCasing")); // "camel Casing", "Unexpected result"
console.log(solution("camelCasingTest")); // "camel Casing Test", "Unexpected result"
