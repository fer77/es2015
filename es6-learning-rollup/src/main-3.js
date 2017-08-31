// Rest:
function sum(...numbers) {// encapsulates arguments in an array.
	// return numbers.reduce(function(prev, current) {
	// 	return prev + current;
	// });
	return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3, 4, 5));// 6

// Spread:
function sum(x, y) {// encapsulates arguments in an array.
	return x + y;
}

let nums = [1, 2];

console.log(sum(...nums));