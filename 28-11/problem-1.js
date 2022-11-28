// Square every digit

function squareDigits(num) {
  let arr = num.toString().split("");
  arr.forEach((e, i) => {
    arr[i] = arr[i] ** 2;
  });
  let res = Number(arr.join(""));
  return res;
}

console.log(squareDigits(23));