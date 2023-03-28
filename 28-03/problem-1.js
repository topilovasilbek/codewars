// 5 kyu - Convert PascalCase string into snake_case

function toUnderscore(string) {
  string = String(string);
  let res = "";
  let isFirst = true;
  for (let char of string) {
    if (isFirst) res += char.toLowerCase();
    else if (char === char.toUpperCase() && isNaN(char))
      res += "_" + char.toLowerCase();
    else res += char;
    isFirst = false;
  }
  return res;
}

console.log(toUnderscore("TestController")); // "test_controller"
console.log(toUnderscore("MoviesAndBooks")); // "movies_and_books"
console.log(toUnderscore("App7Test")); // "app7_test"
console.log(toUnderscore(1)); // "1"
