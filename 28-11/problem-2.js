// 7 kyu - Friend or Foe?

function friend(friends) {
  let res = [];
  friends.forEach((e) => {
    if (e.length === 4) res.push(e);
  });
  return res
}

let friends = ["Asilbek", "John", "Muslimbek", "Nick"];

console.log(friend(friends));
