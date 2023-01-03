// 5 kyu - count '9's from 1 to n
// I solved this problem in two ways | codewars has not accepted and I could not know WHY

// Using for loop
/* function number9(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    if (i.toString().includes("9")) {
      for (let char of i.toString()) {
        if (char === "9") s++;
      }
    }
  }
  return s;
}

console.log(number9(99)); */

// Using Recursion
function number9(n, i = 1, s = 0) {
  if (i.toString().includes("9")) {
    for (let char of i.toString()) {
      if (char === "9") {
        s++;
      }
    }
  }
  if (i === n) return s;
  i++;
  return number9(n, i, s);
}

console.log(number9(100));
