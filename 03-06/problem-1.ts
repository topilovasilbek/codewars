// 6 kyu - Kebabize

function kebabize(str: string) {
  if (str.length === 0) {
    return "";
  }
  let arr = str.split("").filter((x) => /[a-zA-Z]/.test(x));

  arr[0] = arr[0].toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i - 1] += "-";
    }
  }
  return arr.join("").toLowerCase();
}

/* function kebabize(str: string) {
  let res: string = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < str.length; i++)
    if (alphabet.includes(str[i])) res += str[i];
    else if (isNaN(Number(str[i])) && i !== 0)
      res += "-" + str[i].toLowerCase();
  return res;
} */

console.log(kebabize("myCamelCasedString")); // "my-camel-cased-string"
console.log(kebabize("myCamelHas3Humps")); // "my-camel-has-humps"
