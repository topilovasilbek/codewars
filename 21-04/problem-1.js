// 6 kyu - Write Number in Expanded Form

function expandedForm(num) {
  let arr = [];
  let str = String(num);
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") arr.push(str[i].padEnd(str.length - i, "0"));
  }
  return arr.join(" + ");
}

// console.log(expandedForm(12)); // "10 + 2"
// console.log(expandedForm(42)); // "40 + 2"
console.log(expandedForm(70304)); // "70000 + 300 + 4"
