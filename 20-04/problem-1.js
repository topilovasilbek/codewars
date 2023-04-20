// 5 kyu - Not very secure

function alphanumeric(string) {
  if (!string) return false;
  let alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  string = string.toLowerCase();
  for (let char of string) if (!alphanumeric.includes(char)) return false;
  return true;
}

// console.log(alphanumeric("Mazinkaiser")); // true
console.log(alphanumeric("hello world_")); // false
// console.log(alphanumeric("PassW0rd")); // true
// console.log(alphanumeric("     ")); // false
