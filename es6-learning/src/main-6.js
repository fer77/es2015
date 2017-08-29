import { TaskCollection, foo } from './TaskCollection';

console.log(foo);

new TaskCollection([
	'Go to the store',
	'Clean'
]).dump();