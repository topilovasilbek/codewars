// 6 kyu - Write JavaScript's 'call' function using apply.
Function.prototype.call = function (thisArg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return this.apply(thisArg, args);
};
