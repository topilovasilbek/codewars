// 6 kyu - String transformer

function stringTransformer(str: string) {
  let res: string = "";
  for (let char of str)
    if (char === char.toLowerCase()) res += char.toUpperCase();
    else res += char.toLowerCase();
  return res.split(" ").reverse().join(" ");
}

console.log(stringTransformer("Example string")); // "STRING eXAMPLE"
