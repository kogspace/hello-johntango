const hello = require( "./hello");
describe('My hello', () => {
    test('works', () => {
      expect(hello.hello('World')).toEqual('Hello World')
    })
    test('not works', () => {
      expect(hello.hello('Hello')).toEqual('World')
    })
  })