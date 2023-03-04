// I cannot solve this problem fully yet | I saw this solution by unlocking solutions in codewars
// 6 kyu - "this" is an other problem

class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    if (fullName.match(/\w+ \w+/))
      [this.firstName, this.lastName] = fullName.split(" ");
  }
}

n = new NamedOne("John", "Doe");

console.log(n.firstName, "John"); // "Wrong first name"
// console.log(n.lastName, "Doe"); //  "Wrong last name"
// console.log(n.fullName, "John Doe"); //  "Wrong full name"
// console.log(n.firstName, "Jane"); // "Wrong first name"
// console.log(n.fullName, "Jane Doe"); //  "Wrong full name"
// console.log(n.lastName, "Smith"); // "Wrong last name"
// console.log(n.fullName, "Jane Smith"); // "Wrong full name"
// console.log(n.fullName, "Juan Herrero"); // "Wrong full name"
// console.log(n.lastName, "Herrero"); // "Wrong last name"
// console.log(n.firstName, "Juan"); // "Wrong first name"
