import Utils from '../src/utils'
import dayjs from '../src'

const {
  prettyUnit,
  padZoneStr,
  padStart,
  monthDiff
} = Utils

it('PrettyUnit', () => {
  expect(prettyUnit('Days')).toBe('day')
  expect(prettyUnit('days')).toBe('day')
  expect(prettyUnit('day')).toBe('day')
  expect(prettyUnit()).toBe('')
})

it('PadZoneStr', () => {
  expect(padZoneStr(0)).toBe('+00:00')
  expect(padZoneStr(1 * 60)).toBe('-01:00')
  expect(padZoneStr(-1 * 60)).toBe('+01:00')
  expect(padZoneStr(-10 * 60)).toBe('+10:00')
  expect(padZoneStr(10 * 60)).toBe('-10:00')
  expect(padZoneStr((-5 * 60) - 30)).toBe('+05:30')
})

it('PadStart', () => {
  expect(padStart(1, 2, '0')).toBe('01')
  expect(padStart(0, 2, '0')).toBe('00')
})


it('MonthDiff', () => {
  let dateOne = dayjs('2018-08-08')
  let dateTwo = dayjs('2018-08-08')
  expect(monthDiff(dateOne, dateTwo)).toEqual(0)

  dateOne = dayjs('2018-09-08')
  dateTwo = dayjs('2018-08-08')
  expect(monthDiff(dateOne, dateTwo)).toEqual(1)

  dateOne = dayjs('2018-08-08')
  dateTwo = dayjs('2018-09-08')
  expect(monthDiff(dateOne, dateTwo)).toEqual(-1)
})
