// 6 kyu - CamelCase Method

String.prototype.camelCase = function () {
  if (!this.valueOf().trim()) return "";
  let arr = this.valueOf().split(" ");
  arr = arr.map((item) => item[0].toUpperCase() + item.slice(1));
  return arr.join("");
};

console.log("test case".camelCase()); // TestCase
// console.log("camel Case method".camelCase()); // CamelCaseMethod
// console.log("say hello".camelCase()); // SayHello
// console.log("camel case word".camelCase()); // CamelCaseWord
// console.log("".camelCase()); // ""
