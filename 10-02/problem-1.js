// 6 kyu - Detect Pangram

function isPangram(string) {
  let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let str2 = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < 26; i++) {
    if (!string.includes(str1[i]) && !string.includes(str2[i])) return false;
  }
  return true;
}

var string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string)); // true
var string = "This is not a pangram.";
console.log(isPangram(string)); // false
