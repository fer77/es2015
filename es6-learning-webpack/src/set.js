let items = new Set(['one', 'two', 'three']);
// Set(['one', 'two', 'three','one', 'two', 'three']); // The second set of 'one', 'two', 'three' will be ignored, because items in a Set must be unique.

console.log(items);
