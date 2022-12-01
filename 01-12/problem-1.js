// 6 kyu - Find the missing letter

function findMissingLetter(array) {
  let alphabet1 = "abcdefghijklmnopqrstuvwxyz";
  let alphabet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = array[0] === array[0].toLowerCase();

  if (lower) {
    for (let i = 1; i < array.length; i++) {
      if (alphabet1.indexOf(array[i]) !== alphabet1.indexOf(array[i - 1]) + 1)
        return alphabet1[alphabet1.indexOf(array[i]) - 1];
    }
  } else {
    for (let i = 1; i < array.length; i++) {
      if (alphabet2.indexOf(array[i]) !== alphabet2.indexOf(array[i - 1]) + 1)
        return alphabet2[alphabet2.indexOf(array[i]) - 1];
    }
  }
}

console.log(findMissingLetter(["F", "G", "I"]));
