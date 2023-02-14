// 6 kyu - Highest Scoring Word

function high(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let words = str.split(" ");
  let scores = [];
  words.forEach((el, i) => {
    let sum = 0;
    for (let char of el) {
      sum += alphabet.indexOf(char) + 1;
    }
    scores[i] = sum;
  });
  return words[scores.indexOf(Math.max(...scores))];
}

console.log(high("man i need a taxi up to ubud")); // "taxi"
// console.log(high("what time are we climbing up the volcano")); // "volcano"
// console.log(high("take me to semynak")); // "semynak"
// console.log(high("aa b")); // "aa"
// console.log(high("b aa")); // "b"
// console.log(high("bb d")); // "bb"
// console.log(high("d bb")); // "d"
// console.log(high("aaa b")); // "aaa"
