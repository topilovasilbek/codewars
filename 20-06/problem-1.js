// 6 kyu - String transformer
function stringTransformer(str) {
    var res = "";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (char === char.toLowerCase())
            res += char.toUpperCase();
        else
            res += char.toLowerCase();
    }
    return res.split(" ").reverse().join(" ");
}
console.log(stringTransformer("Example string")); // "STRING eXAMPLE"
