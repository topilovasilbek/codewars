// 5 kyu - First non-repeating character

function firstNonRepeatingLetter(s) {
  let str = s
    .split("")
    .map((char) => char.toLowerCase())
    .join("");
  for (let i = 0; i < str.length; i++)
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return s[i];
  return "";
}

// console.log(firstNonRepeatingLetter("a")); // "a"
console.log(firstNonRepeatingLetter("stress")); // "t"
// console.log(firstNonRepeatingLetter("moonmen")); // "e"
