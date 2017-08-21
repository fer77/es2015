"use strict";

// Rest:
function sum() {
	for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
		numbers[_key] = arguments[_key];
	}

	// encapsulates arguments in an array.
	// return numbers.reduce(function(prev, current) {
	// 	return prev + current;
	// });
	return numbers.reduce(function (prev, current) {
		return prev + current;
	});
}

console.log(sum(1, 2, 3, 4, 5)); // 6

// Spread:
function sum(x, y) {
	// encapsulates arguments in an array.
	return x + y;
}

var nums = [1, 2];

console.log(sum.apply(undefined, nums));