// 6 kyu - Remove the parentheses

function removeParentheses(s) {
  let res = "";
  let bracket = 0;
  for (let char of s) {
    if (char === "(") bracket++;
    else if (char === ")") bracket--;
    else {
      bracket === 0 ? (res += char) : null;
    }
  }
  return res;
}

// console.log(removeParentheses("example(unwanted thing)example")); // exampleexample
console.log(
  removeParentheses("hello example (words(more words) here) something")
); // "hello example  something"
