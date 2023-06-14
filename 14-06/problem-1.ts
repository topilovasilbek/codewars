// 6 kyu - Consonant value

function solve(s: string) {
  let vowels = "aeiou";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arr: string[] = [];
  let str = "";
  for (let char of s) {
    if (vowels.includes(char)) {
      if (str) arr.push(str);
      str = "";
      continue;
    }
    str += char;
  }
  if (arr[arr.length - 1] !== str) arr.push(str);
  let res: number[] = [];
  for (let el of arr) {
    let count = 0;
    for (let char of el) count += alphabet.indexOf(char) + 1;
    res.push(count);
  }
  return Math.max(...res);
}

console.log(solve("zodiac")); // 26
// console.log(solve("chruschtschov")); // 80
// console.log(solve("khrushchev")); // 38
// console.log(solve("strength")); // 57
// console.log(solve("catchphrase")); // 73
// console.log(solve("twelfthstreet")); // 103
// console.log(solve("mischtschenkoana")); // 80
