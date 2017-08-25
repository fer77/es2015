// ES5
// function User(username, email) {
// 	this.username = username;
// 	this.email = email;
// }

// User.prototype.changeEmail = function(newEmail) {
// 	this.email = newEmail
// };

// var user = new User('BobBelcher', 'bob@bb.com');

// user.changeEmail('bobsNewEmail@bb.com');

// console.dir(user);

// ES6
class User {
	constructor(username, email) {
		this.username = username;
		this.email = email;
	}

	// Adding static methods
	static register(...args) { // static: allows a method to be accessed directly from the class without having to first create an instance of the class, but as class.method
		// Callable only from the User object (User.register).
		// console.log(...args);
		return new User(...args);
	}

	//Getters, Setters, and Mutetors can be placed here too.
	get foo() {
		return 'foo';
	}

	changeEmail(newEmail) {
		this.email = newEmail;
	}
}

// let user = new User('LindaBelcher', 'linda@bb.com');
let user = User.register('TinaBelcher', 'tina@bb.com');

// user.changeEmail('lindasNewEmail@bb.com');

// console.dir(user);
console.dir(user.foo);

// Classes can be passed around, because they are treated as first class:
function log(strategy) {
	strategy.handle();
}

log(new class {
	handle() {
		// alert('using an alert strategy');
	}
});