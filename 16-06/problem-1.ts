// 6 kyu - not So Easy: Count characters

var inputLength = null;
var originConsoleLog = console.log;

console.log = function (input) {
  inputLength = input?.length;
  return originConsoleLog.apply(null, arguments);
};

function count() {
  return inputLength;
}

console.log("1");
console.log(count()); // 1
console.log("aa");
console.log(count()); // 2
console.log("abc");
console.log(count()); // 3
console.log("abcdefghijklmn");
console.log(count()); // 14
