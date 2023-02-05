// 6 kyu - Sort the odd

function sortArray(array) {
  if (!array.length) return [];
  let odds = [];
  for (let el of array) {
    if (el & 1) odds.push(el);
  }
  odds.sort((a, b) => a - b);

  array = array.map((item) => {
    if (item & 1) return odds.shift();
    else return item;
  });
  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
// console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
// console.log(sortArray([])); // []
