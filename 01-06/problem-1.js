// 6 kyu - Make the Deadfish Swim
// Return the output array, and ignore all non-op characters
function parse(data) {
  var res = [];
  var i = 0;
  for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var char = data_1[_i];
    switch (char) {
      case "i":
        i++;
        break;
      case "d":
        i--;
        break;
      case "s":
        i *= i;
        break;
      case "o":
        res.push(i);
        break;
      default:
        i = i;
    }
  }
  return res;
}
console.log(parse("iiisdoso")); // [8, 64]
console.log(parse("iiisxxxdoso")); // [8, 64]
