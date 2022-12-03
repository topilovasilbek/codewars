// 6 kyu - Does my number look big in this?

function narcissistic(value) {
  // Code me to return true or false
  let arr = value.toString().split("");
  let res = arr.map((item, index, array) => item ** array.length);
  return eval(res.join('+'))===value;
}

console.log(narcissistic(153));