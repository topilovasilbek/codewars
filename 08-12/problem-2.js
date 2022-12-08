// 6 kyu - Valid Braces

function validBraces(s) {
  let a = "()";
  let b = "[]";
  let c = "{}";
  let flag = true;
  while (flag) {
    if (s.length == 0) break;
    else if (s.includes(a) || s.includes(b) || s.includes(c)) {
      s = s.replace(a, "");
      s = s.replace(b, "");
      s = s.replace(c, "");
    } else {
      flag = false;
    }
  }
  return flag;
}
console.log(validBraces('()'));