// 6 kyu - Make the Deadfish Swim

// Return the output array, and ignore all non-op characters
function parse(data: string) {
  let res: number[] = [];
  let i = 0;
  for (let char of data) {
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
