const {similarity} = require('./index')

test('Testing similarity function', () => {
  expect(similarity('Dublin', 'Dublin')).toBe(1)
  expect(similarity('Dublin', 'Doblin')).toBe(0.833)
  expect(similarity('Dublin', 'dublin')).toBe(0.833)
})

test('Testing similarity ignoring case', () => {
  expect(similarity('Dublin', 'dublin', {ignorecase: true})).toBe(1)
  expect(similarity('eire', 'Eire', {ignorecase: true})).toBe(1)
})

test('Testing similarity stemming case', () => {
  expect(similarity('Trying', 'Try', {stem: true})).toBe(1)
})

test('Testing similarity except words', () => {
  expect(similarity('should be equal', 'should equal', {except: ['be']})).toBe(1)
})

test('Testing all options together', () => {
  expect(similarity('Trying to Be equal', 'try equal', {
    except: ['to', 'be'], ignorecase: true, stem: true})).toBe(1)
})

test('Testing string, array comparison', () => {
  expect(similarity('Dublin', ['Dublin'])[0].value).toBe(1)
  expect(similarity('Dublin', ['Doblin'])[0].value).toBe(0.833)
})
