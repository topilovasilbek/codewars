// 6 kyu - WeIrD StRiNg CaSe

function toWeirdCase(string: string) {
  let arr = string.split(" ");
  let res: string[] = [];
  for (let el of arr) {
    let str = "";
    let i = 0;
    for (let char of el) {
      if (i % 2 === 0) str += char.toUpperCase();
      else str += char.toLowerCase();
      i++;
    }
    res.push(str);
  }
  return res.join(" ");
}

console.log(toWeirdCase("This")); // "ThIs"
console.log(toWeirdCase("is")); // "Is"
console.log(toWeirdCase("This is a test")); // "ThIs Is A TeSt"
