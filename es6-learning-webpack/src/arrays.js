// console.log(['Bob', 'Linda', 'Tina', 'Gene', 'Luoise'].indexOf('Tina'));

//To find a condition:
// console.log(['Bob', 'Linda', 'Tina', 'Gene', 'Luoise'].find(item => item === 'Luoise')); // Luoise

// To find an index
// console.log(['Bob', 'Linda', 'Tina', 'Gene', 'Luoise'].findIndex(item => item === 'Linda')); // 1

class User {
  constructor(name, isCook) {
    this.name = name;
    this.isCook = isCook;
  }
}

let users = [
  new User('Bob', true),
  new User('Linda', true),
  new User('Tina', false),
  new User('Gene', false),
  new User('Luoise', false)
];

console.log(users.find(user => user.isCook).name);
