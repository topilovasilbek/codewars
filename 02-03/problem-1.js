// 6 kyu - Extract Nested Object Reference

var obj = {
  person: {
    name: "joe",
    history: {
      hometown: "bratislava",
      bio: {
        funFact: "I like fishing.",
      },
    },
  },
};

// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function (string) {
  var obj = this;
  string.split(".").forEach(function (el) {
    try {
      obj = obj[el];
    } catch (e) {
      obj = undefined;
    }
  });
  return obj;
};

console.log(obj.hash("person.name")); // "joe"
console.log(obj.hash("person.game.home")); // undefined
