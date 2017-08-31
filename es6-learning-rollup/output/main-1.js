'use strict';

// class TaskCollection {
//     constructor(tasks = []) {
//             this.tasks = tasks;
//     }

//     log() {
//         // this.tasks.forEach(function (task) {
//         //     console.log(task);
//         // });
//         // Arrow function:
//         this.tasks.forEach(task => console.log(task));
//     }
// }

// class Task { }

// new TaskCollection([
//     new Task, new Task, new Task
// ]).log();

var names = ['Bob', 'Linda', 'Tina', 'Gene', 'Louise'];

// names = names.map(function(name) {
//     return name + ' is working the restaurant.';
// });
// Arrow function:
names = names.map(function (name) {
  return name + " is working the restaurant.";
});

console.log(names);