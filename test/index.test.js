import moment from 'moment'
import dayjs from '../src'

test('toString', () => {
  expect(dayjs().toString()).toBe(moment().toString());
});