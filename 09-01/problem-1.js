// 6 kyu - Arrays Similar

function arraysSimilar(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  return (
    arr1.length == arr2.length &&
    arr1.every(function (a, i) {
      return a === arr2[i];
    })
  );
}

const arr1 = [1, 2, 2, 3, 4],
  arr2 = [2, 1, 2, 4, 3],
  arr3 = [1, 2, 3, 4],
  arr4 = [1, 2, 3, "4"];

console.log(arraysSimilar(arr1, arr2)); // Should equal true
console.log(arraysSimilar(arr2, arr3)); // Should equal false
console.log(arraysSimilar(arr3, arr4)); // Should equal false
