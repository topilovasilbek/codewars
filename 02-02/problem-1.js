// 6 kyu - Convert string to camel case

function toCamelCase(str) {
  if (!str.trim().length) return "";
  let res = "";
  for (let char of str) {
    if (res[res.length - 1] === "-" || res[res.length - 1] === "_") {
      res = res.slice(0, res.length - 1);
      res += char.toUpperCase();
    } else res += char;
  }
  return res;
}

// console.log(toCamelCase("")); // "", "An empty string was provided but not returned"
console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value"
// console.log(toCamelCase("The-Stealth-Warrior")); // "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value"
// console.log(toCamelCase("A-B-C")); // "ABC", "toCamelCase('A-B-C') did not return correct value"
