// 6 kyu - Sums of Parts

function partsSums(ls: number[]) {
  if (!ls.length) return [0];
  let sum = eval(ls.join("+"));
  let res: number[] = [sum];
  for (let el of ls) {
    res.push(sum - el);
    sum = sum - el;
  }
  return res;
}

console.log(partsSums([])); // [0]
console.log(partsSums([0, 1, 3, 6, 10])); // [20, 20, 19, 16, 10, 0]
console.log(partsSums([1, 2, 3, 4, 5, 6])); // [21, 20, 18, 15, 11, 6, 0]
console.log(
  partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
); // [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
