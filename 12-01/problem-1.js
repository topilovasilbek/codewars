// 6 kyu - Array Helpers

const numbers = [1, 2, 3, 4, 5];

Array.prototype.square = function () {
  return this.map((item) => item * item);
};

Array.prototype.cube = function () {
  return this.map((item) => item * item * item);
};

Array.prototype.sum = function () {
  return this.every((item) => typeof item === "number")
    ? this.reduce((value, currentValue) => value + currentValue, 0)
    : "Wrong sum";
};

Array.prototype.average = function () {
  if (!this.length) return NaN;
  return (
    this.reduce((value, currentValue) => value + currentValue, 0) / this.length
  );
};

Array.prototype.even = function () {
  return this.filter((item) => !(item & 1));
};

Array.prototype.odd = function () {
  return this.filter((item) => !!(item & 1));
};

// console.log(numbers.square()); // [1, 4, 9, 16, 25]
// console.log(numbers.cube()) // [1, 8, 27, 64, 125]
// console.log(numbers.sum()); // 15, "Wrong sum"
// console.log(numbers.average()); // 3, "Wrong average"
// console.log(numbers.even()); // [2, 4], "Wrong result for even()"
console.log(numbers.odd()); // [1, 3, 5], "Wrong result for odd()"
