const {getMaxLen, getDistance} = require('./utils')
const soa = require('sort-objects-array')

const stringSimilarity = (str1, str2, opts) => {
  const maxlen = getMaxLen([str1, str2], opts)[0].len
  return getDistance(str1, str2, maxlen, opts)
}

const stringArraySimilarity = (str1, arr1, opts) => {
  const maxlen = getMaxLen([str1, ...arr1], opts)[0].len
  const similarities = arr1.map(x => (
    {key: x, value: getDistance(str1, x, maxlen, opts)}))
  return soa(similarities, 'value', 'desc')
}

module.exports = {
  stringSimilarity,
  stringArraySimilarity
}
