import MockDate from 'mockdate'
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
  expect(dayjs('2015-01-01T00:00:00.000').dayOfYear()).toBe(1)
  expect(dayjs('2015-01-31T00:00:00.000').dayOfYear()).toBe(31)
  expect(dayjs('2015-02-01T00:00:00.000').dayOfYear()).toBe(32)
  expect(dayjs('2015-02-28T00:00:00.000').dayOfYear()).toBe(59)
  expect(dayjs('2015-12-31T00:00:00.000').dayOfYear()).toBe(365)
})

it('DayOfYear set', () => {
  expect(dayjs('2015-01-01T00:00:00.000Z')
    .dayOfYear(4)
    .dayOfYear()).toBe(4)

  expect(dayjs('2015-01-01T00:00:00.000Z')
    .dayOfYear(4)
    .toISOString()).toBe('2015-01-04T00:00:00.000Z')

  expect(dayjs('2015-01-01T00:00:00.000Z')
    .dayOfYear(32)
    .dayOfYear()).toBe(32)

  expect(dayjs('2015-01-01T00:00:00.000Z')
    .dayOfYear(32)
    .toISOString()).toBe('2015-02-01T00:00:00.000Z')

  expect(dayjs('2015-01-01T00:00:00.000Z')
    .dayOfYear(365)
    .dayOfYear()).toBe(365)

  expect(dayjs('2015-01-01T00:00:00.000Z')
    .dayOfYear(365)
    .toISOString()).toBe('2015-12-31T00:00:00.000Z')
})
