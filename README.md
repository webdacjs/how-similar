# How Similar

This module compares two strings and returns a value on how similar they are from  0 - 1 (using a normalized levenshtein distance). The most basic use is:

```js
> const {similarity} = require('how-similar')
> similarity('Dublin', 'Doblin')
0.833
```

The module can also compare a string to an array of strings to find which one is the most similar one:

```js
> similarity('Dublin', ['Doblin', 'Devlin', 'Duuublin', 'Dublin'])
[ { key: 'Dublin', value: 1 },
  { key: 'Doblin', value: 0.875 },
  { key: 'Devlin', value: 0.75 },
  { key: 'Duuublin', value: 0.75 } ]
```

## Install

You can install with [npm]:

```sh
$ npm install --save how-similar
```
