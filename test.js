test('should throws', () => {
  expect(() => {
    require.resolve('test');
  }).toThrow()
})

test('should throws too', () => {
  expect(() => {
    require.resolve('test', {paths: [process.cwd()]});
  }).toThrow()
})

test('should not equal', () => {
  expect(
    require.resolve('test', {paths: [process.cwd()]})
  ).toBe('?????????')
})