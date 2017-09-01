// import TaskCollection from './TaskCollection';

// new TaskCollection([
//   'Go to the store',
//   'Clean'
// ]).dump();

var button = document.querySelector('button');

// Simulates asynchronous behaviour:

console.log('before'); // logs 'before'

button.onclick = function() {
	console.log('Button was clicked'); // logs nothing until it is clicked
};

console.log('after'); // logs 'after'

var somethingToBeDone = function(length) {
	return new Promise(function(resolve, reject) {
		console.log('Start of the promise.');

		setTimeout(function() {
			console.log('Timeout finished.');

			resolve();// Will fire our '.then'
		}, length);
	});
};

somethingToBeDone(4000).then(function () {
	alert('Timer done.');
	somethingToBeDone(2000);
});

// somethingToBeDone.then(function() {
// 	console.log('Proceed once timeout is finished.');
// });