// 6 kyu - Extract the IDs from the data set

function extractIds(data) {
  let res = [];
  function inner(data) {
    for (let key in data) {
      if (key === "id") res.push(data[key]);
      else if (Array.isArray(data[key])) {
        for (let item of data[key]) {
          inner(item);
        }
      }
    }
  }
  inner(data);
  return res;
}

const data1 = {
  id: 1,
  items: [{ id: 2 }, { id: 3 }],
};

console.log(extractIds(data1)); // [1,2,3]
