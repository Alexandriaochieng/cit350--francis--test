const { greeting } = require('./helloworld');
test('should print "Hello Francis"', () => {
  expect(greeting).toBe('Hello Francis');
});