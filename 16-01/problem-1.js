// 6 kyu - Find The Parity Outlier

function findOutlier(integers) {
  let shouldFindOdd = true;
  if (
    (!!(integers[0] & 1) && !!(integers[integers.length - 1] & 1)) ||
    (!!(integers[0] & 1) && !!(integers[1] & 1)) || 
    (!!(integers[1] & 1) && !!(integers[integers.length - 1] & 1))
  )
    shouldFindOdd = false;
  if (shouldFindOdd) {
    for (let el of integers) if (!!(el & 1)) return el;
  } else {
    for (let el of integers) if (!(el & 1)) return el;
  }
}

// console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
// console.log(findOutlier([2, 6, 8, 10, 3])); // 3
// console.log(findOutlier([0, 0, 3, 0, 0])); // 3
// console.log(findOutlier([1, 1, 0, 1, 1])); // 0
