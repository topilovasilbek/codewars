// 6 kyu - Custom sort function
// Solution was taken from "Codewars" itself, it is understandable

const sort = (a) => {
  for (let i = 0, l = a.length; i < l; i++) {
    for (let j = i; j < l; j++) {
      if (a[i] > a[j]) {
        let t = a[j];
        a[j] = a[i];
        a[i] = t;
      }
    }
  }
  return a;
};

console.log(sort(["ssd", "asd", "avs", "aaa"]));
