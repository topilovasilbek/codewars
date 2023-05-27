// 6 kyu - Reverse Vowels In A String

function reverseVowels(str: string) {
  let vowels = "aeiouAEIOU";
  let strVowels: string[] = [];
  for (let char of str) if (vowels.includes(char)) strVowels.unshift(char);
  let res: string = "";
  let count: number = 0;
  for (let char of str)
    if (vowels.includes(char)) {
      res += strVowels[count];
      count++;
    } else res += char;
  return res;
}

console.log(reverseVowels("Hello!")); // "Holle!"
console.log(reverseVowels("Tomatoes")); // "Temotaos"
console.log(reverseVowels("Reverse Vowels In A String")); // "RivArsI Vewols en e Streng"
