// 6 kyu - Dashatize it

function dashatize(num: any) {
  var dashed = Math.abs(num)
    .toString()
    .split("")
    .map((a) => (+a % 2 == 1 ? "-" + a + "-" : a))
    .join("");
  if (dashed[0] == "-") {
    dashed = dashed.slice(1);
  }
  if (dashed[dashed.length - 1] == "-") {
    dashed = dashed.slice(0, dashed.length - 1);
  }
  for (var i = 0; i < dashed.length; i++) {
    if (dashed[i] == "-") {
      if (dashed[i + 1] == "-") {
        dashed = dashed.substring(0, i + 1) + dashed.substring(i + 2);
      }
    }
  }
  return dashed;
}

console.log(dashatize(274)); // "2-7-4", "Should return 2-7-4"
console.log(dashatize(5311)); // "5-3-1-1", "Should return 5-3-1-1"
console.log(dashatize(86320)); // "86-3-20", "Should return 86-3-20"
console.log(dashatize(974302)); // "9-7-4-3-02", "Should return 9-7-4-3-02"
console.log(dashatize(NaN)); // "NaN", "Should return NaN"
console.log(dashatize(0)); // "0", "Should return 0"
console.log(dashatize(-1)); // "1", "Should return 1"
console.log(dashatize(-28369)); // "28-3-6-9", "Should return 28-3-6-9"

// function dashatize(num: any) {
//   if (isNaN(num)) return "NaN";
//   if (num < 0) return num;
//   let str: string = "";
//   for (let char of String(num)) {
//     if (!!(Number(char) & 1)) str += "-" + char + "-";
//     else str += char;
//   }
//   let res: string = "";
//   for (let i = 0; i < str.length; i++) {
//     if (
//       !(i === 0 && str[i] === "-") &&
//       !(i === str.length - 1 && str[i] === "-") &&
//       !(str[i] === "-" && str[i + 1] === "-")
//     )
//       res += str[i];
//   }
//   if (String(num)[0] === "-") res = "-" + res;
//   return res;
// }
