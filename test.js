const path = require('path')

test('should throws', () => {
  expect(() => {
    require.resolve('foo/node_modules/bar');
  }).toThrow()
})

test('should throws too', () => {
  expect(() => {
    require.resolve('foo/node_modules/bar', {paths: [process.cwd()]});
  }).toThrow()
})

test('should not equal', () => {
  expect(
    require.resolve('foo/node_modules/bar', {paths: [process.cwd()]})
  ).toBe('?????????')
})