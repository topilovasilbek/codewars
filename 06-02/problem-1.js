// 6 kyu - Your order, please

function order(words) {
  if (!words.length) return "";
  let res = [];
  let i = 1;
  while (i < 10) {
    for (let el of words.split(" ")) {
      if (el.includes(i.toString())) res.push(el);
    }
    i++;
  }
  return res.join(" ");
}

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"
// console.log(order("")); // "", "empty input should return empty string"
