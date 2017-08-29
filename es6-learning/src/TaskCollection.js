class TaskCollection {
	constructor(tasks = []) {
		this.tasks = tasks;
	}

	dump() {
		console.log(this.tasks);
	}
}

export let foo = 'bar';
export myFunc = function() {};

// Can also define what will be exported at the end of the file:
// export ... or export default...

export default TaskCollection;