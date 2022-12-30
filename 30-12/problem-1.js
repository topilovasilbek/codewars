// 6 kyu - Backspaces in string

function cleanString(str) {
  let res = "";
  for (let char of str) {
    if (char === "#") res = res.slice(0, res.length - 1);
    else res += char;
  }
  return res;
}

console.log(cleanString("abc#d##c"));
