// 6 kyu - Reverse every other word in the string

function reverse(str) {
  let arr = str.split(" ");
  for (var i = 1; i < arr.length; i += 2) {
    arr[i] = arr[i].split("").reverse().join("");
  }
  return arr.join(" ").trim();
}

console.log(reverse("Reverse this string, please!")); // "Reverse siht string, !esaelp"
// console.log(reverse("I really don't like reversing strings!")); // "I yllaer don't ekil reversing !sgnirts"
