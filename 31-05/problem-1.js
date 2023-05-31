// 6 kyu - WeIrD StRiNg CaSe
function toWeirdCase(string) {
    var arr = string.split(" ");
    var res = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        var str = "";
        var i = 0;
        for (var _a = 0, el_1 = el; _a < el_1.length; _a++) {
            var char = el_1[_a];
            if (i % 2 === 0)
                str += char.toUpperCase();
            else
                str += char.toLowerCase();
            i++;
        }
        res.push(str);
    }
    return res.join(" ");
}
console.log(toWeirdCase("This")); // "ThIs"
console.log(toWeirdCase("is")); // "Is"
console.log(toWeirdCase("This is a test")); // "ThIs Is A TeSt"
