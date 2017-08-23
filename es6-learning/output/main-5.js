"use strict";

// Object Shorthand

function getPerson() {
	var name = 'Bob';
	var age = 40;

	return {
		name: name,
		age: age,
		greetES5: function greetES5() {
			return "Welcome to " + this.name + "'s burgers";
		},
		greetES6: function greetES6() {
			// Short Method Syntax
			return "Welcome to " + this.name + "'s burgers";
		},
		greet: function greet(_ref) {
			var name = _ref.name,
			    age = _ref.age;


			console.log("Hello, " + name + ".  You are " + age);
		}
	};
}

// alert(getPerson().greetES6());

// Object Destructuring

var person = {
	name: "Linda",
	age: 38
};

var name = person.name,
    age = person.age;

// alert(name);

var data = {
	name: "Linda",
	age: 38,
	children: ['Tina', 'Gene', 'Louise'],
	count: 3
};

var children = data.children,
    count = data.count;

// console.log(children, count);

// Object Destructuring as a Function Argument

function getData(_ref2) {
	var children = _ref2.children,
	    count = _ref2.count;

	console.log(children, count);
}
getData({
	name: "Linda",
	age: 38,
	children: ['Tina', 'Gene', 'Louise'],
	count: 3
});

// Example
alert(getPerson().greet({ name: 'Tina', age: 14 }));