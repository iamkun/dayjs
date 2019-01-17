import MockDate from 'mockdate'
import dayjs from '../../src'
import quarterOfYear from '../../src/plugin/quarterOfYear'

dayjs.extend(quarterOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('QuarterOfYear', () => {
  expect(dayjs('2013-01-01T00:00:00.000').quarter()).toBe(1)
  expect(dayjs('2013-04-01T00:00:00.000').subtract(1, 'ms').quarter()).toBe(1)
  expect(dayjs('2013-04-01T00:00:00.000').quarter()).toBe(2)
  expect(dayjs('2013-07-01T00:00:00.000').subtract(1, 'ms').quarter()).toBe(2)
  expect(dayjs('2013-07-01T00:00:00.000').quarter()).toBe(3)
  expect(dayjs('2013-10-01T00:00:00.000').subtract(1, 'ms').quarter()).toBe(3)
  expect(dayjs('2013-10-01T00:00:00.000').quarter()).toBe(4)
  expect(dayjs('2014-01-01T00:00:00.000').subtract(1, 'ms').quarter()).toBe(4)
})
