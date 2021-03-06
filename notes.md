## 1

In package.json:

```json
    //...
    "scripts": {
+     "build": "babel src -d output"
+   },
    //...
// This is saying that we will run the babel compiler in a src directory.  -d is an option for the output directory.
```

By default _Babel_ "does not ship with any transfomations enabled".  `npm install babel-preset-env --save-dev` and then tell _Babel_ about it.  create a `.babelrc` file and add the _presets_ there or to the `package.json` file.

```json
    {
    //...
  "babel": {
    "presets": [
      "env"
    ]
  },
  "scripts": {
    "build": "babel src -d output"
    //...
}
```

## 2

**Laravel Elixir** wrapper around gulp to simplify project's common tasks.

1. `laravel new project`
2. use laravel Elixir.
3. `npm install`

## 3

Declare varibles at the top and assign them as needed.

**let** and **const** are both _block_ level declarations.

**const** the assignment or binding is inmutable, but the value is not. _To force immutability use: const months = Object.freeze([...]);_

- Use _var_ at the top level.
- Default to using _let_.
- Use _const_ when the value will never change.

## 4

An _arrow function_ is a shorter syntax of a function expression.  It does not bind its own this, arguments, super, or new.target, and cannot be used as constructors.

Basic arrow function rules:
---

- for single arguments:

```js
  (task => console.log(task));
```

- for multiple arguments:

```js
  ((task, index) => console.log(task));
  // The return keyword is implicit when using a single line.
```

- for no arguments:

```js
  (() => console.log(task));
```

- use `{}` when doing more than a single action:

```js
  (() => {
    //...
    // ...
  });
```

## 5

default parameters

## 6

_rest_ allows for an indefinite number of arguments to be represented as an array.  Translates a sequence of arguments into an array.
Have the _rest_ operator at the end of a list of arguments so at the "front" you can pass other arguments.

```javascript
  function sum(foo, ...numbers) { // encapsulates arguments in an array.
    return numbers.reduce(function(prev, current) {
      return prev + current;
    });
  }
  console.log(sum('vlaue', 1, 2, 3, 4, 5));
```

_spread_ allows an array to be expanded in places where zero or more arguments/elements are expected.  Splits an array into arguments in a function.

## 7

_Template literals_ see `es6-learning/src/main-4.js`

## 8

`object` additions:

 - property shorthand
 - short methods
 - object destructuring: Destructures objects into variables.

```javascript
  let person = {
  name: "Linda",
  age: 38
};

let { name, age } = person;
```

## 9

ES6 adds sintaxic sugar to the `class`.

```javascript
  changeEmail(newEmail) {
    this.email = newEmail;
  } // Still being added to the prototype like in ES5:
//  User.prototype.changeEmail = function(newEmail) {
//    this.email = newEmail
//  };
```

From Chrome dev tools:

```javascript
//...
  changeEmail: ƒ changeEmail(newEmail)
//...
```

_spread operator_ for passing arguments to a method:

```javascript
  static register(username, email) {
    return new User(username, email);
  }
  // can be rewritten like:
  static register(...args) {
    return new User(...args);
  }
```

_spread operator_ any arguments that are passed in will be represented as an array, that are converted into single arguments or values.

## 10

_modules_ simple files.

Define modules, `export` behavior and then `import` behavior as necessary.
The value of what you `export` is what you sould `import`.

```javascript
import { TaskCollection, foo } from './TaskCollection'
//...
```

_default_ in situations when only one thig is being exported.  Other things can still be exported from that file:

```javascript
import TaskCollection, { foo } from './TaskCollection'
//...
```

## 11

_Module bundlers_, like Browserify, Webpack, or Rollup compile ES2015 code using modules, down to vanilla ES5 code that all browsers understand.

_roullup_ `npm install --global rollup` then specify the files to compile and the output like: `rollup src/main-6.js > src/main.dist.js`.

The output from compilers still needs to be compile to es5 using plugins like `npm install --save-dev rollup-plugin-buble`.  Create a `rollup.config.js` file and configure the plugin there.

run `rollup src/main-6.js -c > src/main.dist.js --f  iife` to compile.

https://www.npmjs.com/package/rollup-plugin-buble

## 12

`npm init -y` is a quick way to scafold a `package.json` file.

_webpack_ and _elixir_

- `npm install webpack --save-dev`

- create a configuration file `webpack.config.js`

- add a `devtool: 'source-map'` line to help debug.

```javascript
//...

module.exports = {
  entry: './src/main.js',
  devtool: 'source-map',
  //...
};
```

- add scripts as needed in the `package.json` file and execute it as `npm run build`

```javascript
{
  //...
  "scripts": {
    "build": "webpack"
  },
  //...
}
```

- at this point there is still no compilation add a plugin like `npm install buble-loader --save-dev`

- register loaders to `webpack.config.js` file and a test.

```javascript
module.exports = {
  //...
  module: {
    loaders: [
      { test: /\.js$/, loader: 'buble-loader' }
    ]
  }
};
```

_loaders_ are similar to using _gulp task_, something that can be plugged in and transform the code in someway.
_test_ are handled using _regular expressions_

## 13

_promise_ is a stand-in or placeholder for an action that has not yet taken place, a promise to perform an action.  Promises keeps our code from depending on too many callbacks.

_.then_ is an indication that the preceeding is a promise.

```javascript
var promise = this.$http.get('/some/path');// placeholder for an action that has not yet taken completed

promise.then(function(data) {
  //Once the promise is completed proceed...
  });

  promise.catch(function(err) {
    //Or return any errors...
    });
```

## 14

Additions to the string API:

- startsWith()
- endsWith()
- includes()
- repeat()

A second argument can be passed to these methods to specify an index to start from or focus at.

## 15

Additions to arrays.

- find
- findIndex
- includes

## 16

**Generators** Allow functions or a function to pause at a particular point and later resume and be paused again.

Creating a _generator_:

1. Begin function name with _*_ and contains _yield_ which indicates that the function is pausing or exiting early, similar to a _return_ but cyclable, meaning it can return to the exact same point.

```javascript
  function *numbers() {
    yield 1;
    yield 2;
    yield 3;
  }
```

2.

## 17

**set** an object that contains a collections of unique values of any type. Duplicates will be ignored.
API contains:
- `.size()`
- `.add()`
- `.delete()`
- `.has()`
- `.forEach()`
- `.clear()`
```javascript
```
