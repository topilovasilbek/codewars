// 6 kyu - Strings, strings, strings (Hard)

// Fix and improve upon the toString() method for arrays here :)
Array.prototype.toString = function () {
  let vl = this.valueOf();
  return (
    "[" +
    vl
      .map((m) =>
        typeof m === "string" ? "'" + m.toString() + "'" : m.toString()
      )
      .join(",") +
    "]"
  );
};

console.log([].toString()); // "[]", "Should be able to handle empty arrays"
console.log([[[[[[]]], []]]].toString()); // "[[[[[[]]],[]]]]", "Should be able to handle empty nested arrays"
console.log(
  [1.545, [2, 4, [23532], 55, 2.3, [15.22, 0.3, [], [[72, 3], 5]]]].toString()
); // "[1.545,[2,4,[23532],55,2.3,[15.22,0.3,[],[[72,3],5]]]]", "Should work with nested arrays"
console.log(["foobar", [["hello"]]].toString()); // "['foobar',[['hello']]]", "Should enclose strings with single quotes"
