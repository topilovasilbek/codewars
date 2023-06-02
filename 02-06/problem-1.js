// 6 kyu - Sums of Parts
function partsSums(ls) {
  if (!ls.length) return [0];
  var sum = eval(ls.join("+"));
  var res = [sum];
  for (var _i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
    var el = ls_1[_i];
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
