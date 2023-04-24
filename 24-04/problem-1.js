// 5 kyu - Last digit of a large number

var lastDigit = function (str1, str2) {
  if (str1 === "0" && str2 === "0") return 1;
  let b = str1.at(-1);
  let r = null;
  if (str2.length >= 2) r = Number(str2.at(-2) + str2.at(-1)) % 4;
  if (r !== null) {
    if (r === 0) r = 4;
    return Number(String(b ** r).at(-1));
  } else {
    return Number(String(b ** Number(str2)).at(-1));
  }
};

// console.log(lastDigit("4", "1")); //  4
// console.log(lastDigit("4", "2")); //  6
// console.log(lastDigit("9", "7")); //  9
// console.log(lastDigit("10", "10000000000")); //  0
console.log(
  lastDigit(
    "1606938044258990275541962092341162602522202993782792835301376",
    "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"
  )
); //  6
// console.log(
//   lastDigit(
//     "3715290469715693021198967285016729344580685479654510946723",
//     "68819615221552997273737174557165657483427362207517952651"
//   )
// ); //  7
