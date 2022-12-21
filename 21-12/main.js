// 6 kyu - Sqrt approximation

function sqrtApproximation(number) {
  if (number === +0 || number === 1) return number;
  let res1 = null;
  let res2 = [];
  let i = 0;
  while (i < number) {
    if (i * i === number) res1 = i;
    else if (i * i < number && (i + 1) * (i + 1) > number) res2 = [i, i + 1];
    i++;
  }
  return res1 ?? res2;
}

console.log(sqrtApproximation(5));
