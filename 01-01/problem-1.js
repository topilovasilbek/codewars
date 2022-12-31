// 6 kyu - Character with longest consecutive repetition

function longestRepetition(s) {
  if (!s) return ["", 0];
  let res = ["", 0];
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) count++;
    else if (count > res[1]) {
      res = [s[i], count];
      count = 1;
    } else count = 1;
  }
  return res
}

// console.log(longestRepetition("aaaabb")); // ["a", 4]
console.log(longestRepetition("bbbaaabaaaa")); // ["a", 4]
// console.log(longestRepetition("cbdeuuu900")); // ["u", 3]
// console.log(longestRepetition("abbbbb")); // ["b", 5]
// console.log(longestRepetition("aabb")); // ["a", 2]
// console.log(longestRepetition("")); // ["", 0]
// console.log(longestRepetition("ba")); // ["b", 1]
