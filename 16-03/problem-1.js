// 5 kyu - Simple Pig Latin

function pigIt(str) {
  let arr = str.split(" ");
  arr = arr.map((item) =>
    item === "!" || item === "?" ? item : item.slice(1) + item[0] + "ay"
  );
  return arr.join(" ");
}

console.log(pigIt("Pig latin is cool")); // "igPay atinlay siay oolcay"
// console.log(pigIt("This is my string")); // "hisTay siay ymay tringsay"
