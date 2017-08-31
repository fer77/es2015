"use strict";

// var & let
function fire(bool) {
  // var foo; *hoisting
  if (bool) {
    var foo = "bar";
    // foo = 'bar'; *hoisting

    var _fooz = "barzoom";
    // foo = 'bar'; *hoisting

    console.log(foo); // bar *hoisting
  } else {
    console.log(foo); // undefined (*hoisting)
    console.log(fooz); // uncaught referenceerror (*no-hoisting)
  }
}

// fire(false);

// const
var names = ['Bob', 'Linda'];

// names = ['Gene', 'Louise'];// Uncaught typeerror...
names.push('Louise'); // not 100% inmutable

console.log(names);