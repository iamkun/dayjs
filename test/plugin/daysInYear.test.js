import MockDate from 'mockdate'
import dayjs from '../../src'
import daysInYear from '../../src/plugin/daysInYear'

dayjs.extend(daysInYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('DaysInYear', () => {
  expect(dayjs('2010-01-01').daysInYear()).toBe(365)
  expect(dayjs('2011-01-01').daysInYear()).toBe(365)
  expect(dayjs('2012-01-01').daysInYear()).toBe(366)
  expect(dayjs('2013-01-01').daysInYear()).toBe(365)
})
