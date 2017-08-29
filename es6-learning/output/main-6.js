'use strict';

var _TaskCollection = require('./TaskCollection');

console.log(_TaskCollection.foo);

new _TaskCollection.TaskCollection(['Go to the store', 'Clean']).dump();