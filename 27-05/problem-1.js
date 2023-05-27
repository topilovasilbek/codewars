// 6 kyu - Reverse Vowels In A String
function reverseVowels(str) {
    var vowels = "aeiouAEIOU";
    var strVowels = [];
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char))
            strVowels.unshift(char);
    }
    var res = "";
    var count = 0;
    for (var _a = 0, str_2 = str; _a < str_2.length; _a++) {
        var char = str_2[_a];
        if (vowels.includes(char)) {
            res += strVowels[count];
            count++;
        }
        else
            res += char;
    }
    return res;
}
console.log(reverseVowels("Hello!")); // "Holle!"
console.log(reverseVowels("Tomatoes")); // "Temotaos"
console.log(reverseVowels("Reverse Vowels In A String")); // "RivArsI Vewols en e Streng"
