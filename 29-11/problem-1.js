// 6kyu - Build Tower

function towerBuilder(nFloors) {
  let arr = [];
  let res = [];

  let odds = [];
  let i = 1;
  while (odds.length < nFloors) {
    if (i & 1) odds.push(i);
    i++;
  }

  for (let i = 0; i < nFloors; i++) {
    let str = "";
    for (let j = 0; j < odds[i]; j++) {
      if (str === "") str = "*";
      else str += "*";
    }
    arr.push(str);
  }

  arr.forEach((item) => {
    res.push(`${' '.repeat((arr[arr.length-1].length - item.length) / 2)}${item}${' '.repeat((arr[arr.length-1].length - item.length) / 2)}`)
  });

  return res;
}

console.log(towerBuilder(5));
