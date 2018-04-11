import moment from 'moment'
import dayjs from '../src'

test('StartOf Year', () => {
  expect(dayjs().startOf('year').unix()).toBe(moment().startOf('year').unix())
})

test('StartOf Month', () => {
  expect(dayjs().startOf('month').unix()).toBe(moment().startOf('month').unix())
})

test('StartOf Other', () => {
  expect(dayjs().startOf('otherString').unix()).toBe(moment().startOf('otherString').unix())
})

