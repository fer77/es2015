// function *numbers() {
//   console.log('Start');
//
//   yield 1;
//   yield 2;
//   yield 3;
// }

// Will not start right away, because we are not dealing with a function, but a generator.
// console.log(numbers());

// let iterator = numbers();
// Start the generator with '.next()'
// console.log(iterator.next()); // stops at yield 1 and returns an object that contains a value and a status of true or false to indicate if it is done.
// console.log(iterator.next().value); // stops at yield 2
// console.log(iterator.next().value); // stops at yield 3


function* range(start, end) {
  while (start <= end) {
    yield start;

    start++;
  }
}

let iterator = range(1, 3);

for (let i of iterator) console.log(i); // automatically fetches the value.
//or
console.log([...range(1, 5)]);

// console.log(iterator.next()); // obj 1
// console.log(iterator.next()); // obj 2
// console.log(iterator.next()); // obj 3
// console.log(iterator.next());// returns 'undefined' and done: 'true';
