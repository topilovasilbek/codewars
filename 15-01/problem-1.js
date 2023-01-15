// 6 kyu - Array.diff

function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item));
}

console.log(arrayDiff([1, 2], [1])); // [2], "a was [1,2], b was [1]"
// console.log(arrayDiff([1, 2, 2], [1])); // [2, 2], "a was [1,2,2], b was [1]"
// console.log(arrayDiff([1, 2, 2], [2])); // [1], "a was [1,2,2], b was [2]"
// console.log(arrayDiff([1, 2, 2], [])); // [1, 2, 2], "a was [1,2,2], b was []"
// console.log(arrayDiff([], [1, 2])); // [], "a was [], b was [1,2]"
// console.log(arrayDiff([1, 2, 3], [1, 2])); // [3], "a was [1,2,3], b was [1,2]"
