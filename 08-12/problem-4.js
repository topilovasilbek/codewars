// 5 kyu - Scramblies
// Passed but Timed Out

function scramble(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) return false;
    else {
      str1 = str1.slice(0, str1.indexOf(str2[i])) + str1.slice(str1.indexOf(str2[i]) + 1, str1.length);
    }
  }
  return true;
}

console.log(scramble("rkqodlw", "world")); // true
console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
console.log(scramble("katas", "steak")); // false
console.log(scramble("scriptjavx", "javascript")); // false
