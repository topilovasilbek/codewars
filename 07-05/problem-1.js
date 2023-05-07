// 6 kyu - All Star Code Challenge #15
function rotate(str) {
    if (!str.length)
        return [];
    var res = [];
    var s = "";
    while (s !== str) {
        s = s.length ? s.slice(1) + s[0] : str.slice(1) + str[0];
        res.push(s);
    }
    return res;
}
console.log(rotate("Hello")); // ["elloH", "lloHe", "loHel", "oHell", "Hello"]
