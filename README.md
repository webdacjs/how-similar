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
## Usage

The module provides functions to deal with string / string comparison and string / array comparison. Still the easiest way to use it is to import `similarity`:

```js
> const {similarity} = require('how-similar')
```

Then as shown above you can pass two strings or an string and an array of strings. You can also pass a third parameter with options (it will be explained next).

The following use cases can be solved with the module:

1. How similar are two different strings:

```js
> similarity('Dublin', 'Doblin')
0.833
```

2. What is the most similar string in an array to another string:

```js
> similarity('Dublin', ['Doblin', 'Devlin', 'Duuublin', 'Dublin'])
[ { key: 'Dublin', value: 1 },
  { key: 'Doblin', value: 0.875 },
...
```

3. How similar ignoring the case (`{ignorecase: true}`):

```js
> similarity('Dublin', 'dUblIn', {ignorecase: true})
1
```

4. How similar stemming the words (`{stem: true}`):

```js
> similarity('This is Dublin', 'Thi is Dublin', {stem: true})
1
```

5. How similar with exceptions (`{except: [word1, word2, ...]}`)

```js
> similarity('This is Dublin in Ireland', 'This is Dublin', {except: ['in', 'Ireland']})
1
```

### License

Copyright © 2019, [Juan Convers](https://juanconvers.com).
Released under the [MIT License](LICENSE).
