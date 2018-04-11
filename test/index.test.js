import moment from '../src'

test('toString', () => {
  expect(moment().toString()).toBe((new Date()).toString());
});