// 6 kyu - Rotate Array (JS)

function rotate(array: Array<any>, n: number) {
  // Declaration
  let arr = array;
  let num = n;
  let l = Math.trunc(num % arr.length);
  // Main
  if (n === 0) return arr;
  else if (n > 0)
    while (l > 0) {
      arr.unshift(arr[arr.length - 1]);
      arr.pop();
      l--;
    }
  else
    while (l > 0) {
      arr.push(arr[0]);
      arr.shift();
      l--;
    }
  return arr;
}

var data = [1, 2, 3, 4, 5];

// console.log(rotate(data, 1)); // [5, 1, 2, 3, 4]
// console.log(rotate(data, 2)); // [4, 5, 1, 2, 3]
// console.log(rotate(data, 3)); // [3, 4, 5, 1, 2]
// console.log(rotate(data, 4)); // [2, 3, 4, 5, 1]
// console.log(rotate(data, 5)); // [1, 2, 3, 4, 5]
// console.log(rotate(data, 0)); // [1, 2, 3, 4, 5]

// console.log(rotate(data, -1)); // [2, 3, 4, 5, 1]
// console.log(rotate(data, -2)); // [3, 4, 5, 1, 2]
// console.log(rotate(data, -3)); // [4, 5, 1, 2, 3]
// console.log(rotate(data, -4)); // [5, 1, 2, 3, 4]
// console.log(rotate(data, -5)); // [1, 2, 3, 4, 5]

// console.log(rotate(["a", "b", "c"], 1)); // ["c", "a", "b"]
// console.log(rotate([1.0, 2.0, 3.0], 1)); // [3.0, 1.0, 2.0]
// console.log(rotate([true, true, false], 1)); // [false, true, true]

// console.log(rotate(data, 7)); // [4, 5, 1, 2, 3]
console.log(rotate(data, 11)); // [5, 1, 2, 3, 4]
// console.log(rotate(data, 12478)); // [3, 4, 5, 1, 2]
