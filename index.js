const {getMaxLen, getDistance, checkArgs} = require('./utils')
const soa = require('sort-objects-array')

const stringSimilarity = (str1, str2, opts) => checkArgs(str1, str2) === 'string'
  ? getDistance(str1, str2, getMaxLen([str1, str2], opts)[0].len, opts)
  : 'Both arguments need to be String for stringSimilarity'

const stringArraySimilarity = (str1, arr1, opts) => {
  if (checkArgs(str1, arr1) === 'array') {
    const maxlen = getMaxLen([str1, ...arr1], opts)[0].len
    const similarities = arr1.map(x => (
      {key: x, value: getDistance(str1, x, maxlen, opts)}))
    return soa(similarities, 'value', 'desc')
  }
  return 'First argument need to be a string a second an array for stringArraySimilarity'
}

const similarity = (arg1, arg2, opts) => checkArgs(
  arg1, arg2) === 'string'
  ? stringSimilarity(arg1, arg2, opts)
  : stringArraySimilarity(arg1, arg2, opts)

module.exports = {
  stringSimilarity,
  stringArraySimilarity,
  similarity
}
