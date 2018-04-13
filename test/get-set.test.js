import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

test('Year', () => {
  expect(dayjs().year()).toBe(moment().year())
})

test('Month', () => {
  expect(dayjs().month()).toBe(moment().month())
})

test('Date', () => {
  expect(dayjs().date()).toBe(moment().date())
})

