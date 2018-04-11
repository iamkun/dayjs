import moment from 'moment'
import dayjs from '../src'

test('StartOfYear', () => {
  expect(dayjs().startOf('year').unix()).toBe(moment().startOf('year').unix())
})

test('StartOfMonth', () => {
  expect(dayjs().startOf('month').unix()).toBe(moment().startOf('month').unix())
})

test('StartOfOther', () => {
  expect(dayjs().startOf('otherString').unix()).toBe(moment().startOf('otherString').unix())
})

