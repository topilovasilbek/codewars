// 6 kyu - Write JavaScript's 'call' function using apply.

Function.prototype.call = function (thisArg: any, ...args: any) {
  return this.apply(thisArg, args);
};
