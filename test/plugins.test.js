import MockDate from 'mockdate'
import dayjs from '../src'
import relativeTime from '../src/plugin/relativeTime'
import isLeapYear from '../src/plugin/isLeapYear'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('should allow multiple plugin chaining', () => {
  const now = dayjs()
  expect(now.fromNow).not.toBeDefined()
  expect(now.isLeapYear).not.toBeDefined()

  const extendedDayjs = dayjs.extend(relativeTime).extend(isLeapYear)
  const extendedNow = extendedDayjs()
  expect(typeof extendedNow.fromNow).toBe('function')
  expect(typeof extendedNow.isLeapYear).toBe('function')
})
