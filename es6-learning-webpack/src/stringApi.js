let show = 'Bob\'s Burgers';

// Before:
// indexOf(//...) == -1 or 0 to check if a string strated with a given string.

// if (!show.includes('Linda')) {
// if (show.startsWith('Bob')) {
if (!show.endsWith('Tina')) {
  console.log('This show does not start with "Bob"');
}

let str = 'Gene';

console.log(str.repeat(10));


// Can also do things like:

['Bob', 'Linda', 'Tina', 'Gene', 'Luoise'].includes('Luoise');
