// 6 kyu - Moving Zeros To The End

function moveZeros(arr) {
  let arr1 = [];
  let arr2 = [];
  for (let el of arr) {
    if (el === 0) arr1.push(el);
    else arr2.push(el);
  }
  return arr2.concat(arr1);
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
