import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import dayOfYear from '../../src/plugin/dayOfYear'

dayjs.extend(dayOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('DayOfYear get', () => {
  expect(dayjs().dayOfYear()).toBe(moment().dayOfYear())
  expect(dayjs('2015-01-01T00:00:00.000').dayOfYear()).toBe(1)
  expect(dayjs('2015-01-31T00:00:00.000').dayOfYear()).toBe(31)
  expect(dayjs('2015-02-01T00:00:00.000').dayOfYear()).toBe(32)
  expect(dayjs('2015-02-28T00:00:00.000').dayOfYear()).toBe(59)
  expect(dayjs('2015-12-31T00:00:00.000').dayOfYear()).toBe(365)
})

it('DayOfYear set', () => {
  expect(dayjs().dayOfYear(4).dayOfYear()).toBe(moment().dayOfYear(4).dayOfYear())
  expect(dayjs('2015-01-01T00:00:00.000')
    .dayOfYear(4)
    .dayOfYear()).toBe(4)

  expect(dayjs('2015-01-01T00:00:00.000')
    .dayOfYear(4)
    .format('YYYY-MM-DDTHH:mm:ss.SSS')).toBe('2015-01-04T00:00:00.000')

  expect(dayjs('2015-01-01T00:00:00.000')
    .dayOfYear(32)
    .dayOfYear()).toBe(32)

  expect(dayjs('2015-01-01T00:00:00.000')
    .dayOfYear(32)
    .format('YYYY-MM-DDTHH:mm:ss.SSS')).toBe('2015-02-01T00:00:00.000')

  expect(dayjs('2015-01-01T00:00:00.000')
    .dayOfYear(365)
    .dayOfYear()).toBe(365)

  expect(dayjs('2015-01-01T00:00:00.000')
    .dayOfYear(365)
    .format('YYYY-MM-DDTHH:mm:ss.SSS')).toBe('2015-12-31T00:00:00.000')
})
