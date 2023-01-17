// 6 kyu - Duplicate Encoder

function duplicateEncode(word) {
  word = word.toLowerCase();
  let res = "";
  for (let char of word)
    if (word.indexOf(char) === word.lastIndexOf(char)) res += "(";
    else res += ")";
  return res;
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())", "should ignore case"
console.log(duplicateEncode("(( @")); // "))(("
