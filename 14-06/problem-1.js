// 6 kyu - Consonant value

function solve(s) {
  var vowels = "aeiou";
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var arr = [];
  var str = "";
  for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
    var char = s_1[_i];
    if (vowels.includes(char)) {
      if (str) arr.push(str);
      str = "";
      continue;
    }
    str += char;
  }
  if (arr[arr.length - 1] !== str) arr.push(str);
  var res = [];
  for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
    var el = arr_1[_a];
    var count = 0;
    for (var _b = 0, el_1 = el; _b < el_1.length; _b++) {
      var char = el_1[_b];
      count += alphabet.indexOf(char) + 1;
    }
    res.push(count);
  }
  return Math.max.apply(Math, res);
}

console.log(solve("zodiac")); // 26
// console.log(solve("chruschtschov")); // 80
// console.log(solve("khrushchev")); // 38
// console.log(solve("strength")); // 57
// console.log(solve("catchphrase")); // 73
// console.log(solve("twelfthstreet")); // 103
// console.log(solve("mischtschenkoana")); // 80
