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
4. 