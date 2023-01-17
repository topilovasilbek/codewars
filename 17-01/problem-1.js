// 6 kyu - Counting Duplicates

function duplicateCount(text) {
  if (!text.length) return 0;
  text = text.toLowerCase();
  let obj = {};
  for (let char of text)
    if (char in obj) obj[char]++;
    else obj[char] = 1;
  let res = 0;
  for (let key in obj) if (obj[key] > 1) res++;
  return res
}

// console.log(duplicateCount("")); // 0
// console.log(duplicateCount("abcde")); // 0
// console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2, "should ignore case"
// console.log(duplicateCount("Indivisibility")); // 1
// console.log(duplicateCount("Indivisibilities")); // 2, ("characters may not be adjacent");
