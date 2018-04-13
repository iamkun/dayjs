import moment from 'moment'
import dayjs from '../src'

test('Year', () => {
  expect(dayjs().year()).toBe(moment().year())
})

test('Month', () => {
  expect(dayjs().month()).toBe(moment().month())
})

test('Date', () => {
  expect(dayjs().date()).toBe(moment().date())
})

