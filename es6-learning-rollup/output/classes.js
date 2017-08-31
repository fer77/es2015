'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var User = function () {
	function User(username, email) {
		_classCallCheck(this, User);

		this.username = username;
		this.email = email;
	}

	// Adding static methods


	_createClass(User, [{
		key: 'changeEmail',
		value: function changeEmail(newEmail) {
			this.email = newEmail;
		}
	}, {
		key: 'foo',


		//Getters, Setters, and Mutetors can be placed here too.
		get: function get() {
			return 'foo';
		}
	}], [{
		key: 'register',
		value: function register() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			// static: allows a method to be accessed directly from the class without having to first create an instance of the class, but as class.method
			// Callable only from the User object (User.register).
			// console.log(...args);
			return new (Function.prototype.bind.apply(User, [null].concat(args)))();
		}
	}]);

	return User;
}();

// let user = new User('LindaBelcher', 'linda@bb.com');


var user = User.register('TinaBelcher', 'tina@bb.com');

// user.changeEmail('lindasNewEmail@bb.com');

// console.dir(user);
console.dir(user.foo);

// Classes can be passed around, because they are treated as first class:
function log(strategy) {
	strategy.handle();
}

log(new (function () {
	function _class() {
		_classCallCheck(this, _class);
	}

	_createClass(_class, [{
		key: 'handle',
		value: function handle() {
			// alert('using an alert strategy');
		}
	}]);

	return _class;
}())());