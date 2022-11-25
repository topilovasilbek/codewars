function reverseWords(str) {
  let words = str.split(" ");
  let res = "";

  words.forEach((element, index) => {
    let revWord = [];
    let l = element.length;
    while (l - 1 >= 0) {
      revWord.push(element[l - 1]);
      l--;
    }
    revWord = revWord.join("");
    if (index !== words.length - 1) res += revWord + " ";
    else res += revWord + "";
  });

  return res;
}

console.log(reverseWords("Asilbek Topilov"));
