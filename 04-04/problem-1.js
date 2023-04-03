// 5 kyu - RGB To Hex Conversion

function rgb(r, g, b) {
  function componentToHex(c) {
    if (c < 0) c = 0;
    if (c > 255) c = 255;
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex.toUpperCase() : hex.toUpperCase();
  }
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgb(0, 0, 0)); // "000000"
console.log(rgb(0, 0, -20)); // "000000"
console.log(rgb(300, 255, 255)); // "FFFFFF"
console.log(rgb(173, 255, 47)); // "ADFF2F"
