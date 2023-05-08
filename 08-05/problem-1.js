// 6 kyu - Array.isArray
function isArray(arr) {
    // This is what we would like to do, but it's not allowed.
    return Object.prototype.toString.call(arr) === "[object Array]";
}
console.log(isArray([])); // true
// console.log(isArray({})); // false
// console.log(isArray(null)); // false
// console.log(isArray(undefined)); // false
// console.log(isArray({ length: 0 })); // false
// console.log(isArray("Array")); // false
// console.log(isArray("[]")); // false
// console.log(isArray("[1, 2]")); // false
// console.log(isArray(Array)); // false
// console.log(isArray(Array())); // true
// console.log(isArray(Array.prototype)); // true
// console.log(isArray(Object.defineProperty([], "prop", { value: "value" }))); // true
