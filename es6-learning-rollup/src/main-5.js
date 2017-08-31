// Object Shorthand

function getPerson() {
	let name = 'Bob';
	let age = 40;

	return {
		name, 
		age,
		greetES5: function() {
			return "Welcome to " + this.name + "'s burgers"; 
		},
		greetES6() { // Short Method Syntax
			return `Welcome to ${this.name}'s burgers`;
		},
		greet({name, age}) {

			console.log(`Hello, ${name}.  You are ${age}`);
		}
	};
}

// alert(getPerson().greetES6());

// Object Destructuring

let person = {
	name: "Linda",
	age: 38
};

let { name, age } = person;

// alert(name);

let data = {
	name: "Linda",
	age: 38,
	children: ['Tina', 'Gene', 'Louise'],
	count: 3
};

let { children, count } = data;

// console.log(children, count);

// Object Destructuring as a Function Argument

function getData({ children, count }) {
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