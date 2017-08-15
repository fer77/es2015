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