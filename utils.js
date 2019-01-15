const leven = require('leven')
const stemmer = require('stemmer')
const soa = require('sort-objects-array')

const getStemmed = str => str.split(' ').map(x => stemmer(x)).join(' ')

const getExcept = (str, except) => str.split(' ').filter(
  x => except.indexOf(x) === -1).join(' ')

const getStr = (str, opts = {}) => {
  if (opts.ignorecase) str = str.toLowerCase()
  if (opts.stem) str = getStemmed(str)
  if (opts.except) str = getExcept(str, opts.except)
  return str
}

const getMaxLen = (arr, opts) => soa(
  arr.map(x => ({k: x, len: getStr(x, opts).length})), 'len', 'desc')

const getDistance = (str1, str2, maxlen, opts) => (
  maxlen - leven(getStr(str1, opts), getStr(str2, opts))) / maxlen

module.exports = {
  getStemmed,
  getExcept,
  getStr,
  getMaxLen,
  getDistance
}
