const {
  getStemmed,
  getExcept,
  getStr,
  getMaxLen,
  getDistance
} = require('./utils.js')

test('Testing stemmer function', () => {
  const stemmed = getStemmed('trying')
  expect(stemmed).toBe('try')
})

test('Testing except words function', () => {
  const exceptstr = getExcept('this is a test with except words', ['a', 'test'])
  expect(exceptstr).toBe('this is with except words')
})

test('Testing getDistance length', () => {
  const equal = getDistance('a', 'a', 1)
  const notequal = getDistance('aaaa', 'aaab', 4)
  expect(equal).toBe(1)
  expect(notequal).toBe(0.75)
})

test('Testing max length', () => {
  const maxlen = getMaxLen(['a', 'test'])
  expect(maxlen[0].len).toBe(4)
})

test('Testing getStr functions', () => {
  const testStr = 'This Is trying a Test'
  expect(getStr(testStr)).toBe('This Is trying a Test')
  expect(getStr(testStr, {ignorecase: true})).toBe('this is trying a test')
  expect(getStr(testStr, {ignorecase: true, stem: true})).toBe('thi is try a test')
})
