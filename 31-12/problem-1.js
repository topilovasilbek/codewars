// 6 kyu - Multiplication table

multiplicationTable = function (size) {
  let res = [];
  for (let i = 0; i < size; i++) res[i] = [];
  for (let i = 0; i < size; i++) res[0][i] = i + 1;
  for (let i = 0; i < size; i++) res[i][0] = i + 1;

  for (let i = 1; i < size; i++) {
    for (let j = 1; j < size; j++) {
      res[i][j] = res[0][j] * res[i][0];
    }
  }
  return res;
};

console.log(multiplicationTable(3));
