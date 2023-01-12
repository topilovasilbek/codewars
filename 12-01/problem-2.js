// 6 kyu - Closures and Scopes

function createFunctions(n) {
  var callbacks = new Array(n);
  for (let i = 0; i < n; i++) {
    callbacks.fill(() => i, i, i + 1);
  }
  return callbacks;
}

console.log(createFunctions(5)[0]()); // 0
console.log(createFunctions(5)[3]()); // 3