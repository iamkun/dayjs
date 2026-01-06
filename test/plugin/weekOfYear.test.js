import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import weekOfYear from '../../src/plugin/weekOfYear'
import advancedFormat from '../../src/plugin/advancedFormat'
import '../../src/locale/en-gb'

dayjs.extend(advancedFormat)
dayjs.extend(weekOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Week of year', () => {
  dayjs.locale('en')

  const day = '2018-12-31T10:59:09+08:00'
  const week = 27
  expect(dayjs(day).week()).toBe(moment(day).week())
  expect(dayjs().week()).toBe(moment().week())
  expect(dayjs().week(week).week()).toBe(moment().week(week).week())
  expect(dayjs().weeks(week).week()).toBe(moment().weeks(week).week())
  expect(dayjs().weeks(-week).week()).toBe(moment().weeks(-week).week())
  expect(dayjs().weeks(55).week()).toBe(moment().weeks(55).week())
  expect(dayjs().weeks()).toBe(moment().weeks())
})

it('Week of year with locale', () => {
  dayjs.locale('en-gb')
  moment.locale('en-gb')
  const day = '2019-07-28'
  expect(dayjs(day).week()).toBe(moment(day).week())
})

describe('Week of year with locale edges', () => {
  const testCases = [
    '2018-12-30',
    '2018-12-31',
    '2019-12-29',
    '2019-12-30',
    '2016-01-01',
    '2016-01-04'
  ]
  testCases.forEach((t) => {
    it(`Edges ${t}`, () => {
      expect(dayjs(t).week())
        .toBe(moment(t).week())
    })
  })
})

it('Format w ww wo', () => {
  const day = '2019-07-28'
  const D = dayjs(day)
  const M = moment(day)
  expect(D.format('w ww wo')).toBe(M.format('w ww wo'))
})

it('Issue #2987: Week number after subtracting one week from January 4, 2026', () => {
  dayjs.locale('en')
  moment.locale('en')
  // Subtracting one week from January 4, 2026 should give December 28, 2025
  const result = dayjs('2026-01-04').subtract(1, 'w')

  // Check the format matches moment.js
  expect(result.format('YYYY年w周')).toBe('2025年53周')
})

it('Issue #2987: Week number with en-gb locale (yearStart: 4)', () => {
  dayjs.locale('en-gb')
  moment.locale('en-gb')
  // With yearStart: 4, December 28, 2025 should be week 52 of 2025, not week 1
  const result = dayjs('2026-01-04').subtract(1, 'w')
  const momentResult = moment('2026-01-04').subtract(1, 'w')

  // Check the week number matches moment.js
  expect(result.week()).toBe(momentResult.week())

  // Check the format matches moment.js
  expect(result.format('YYYY年w周')).toBe(momentResult.format('YYYY年w周'))

  // With en-gb locale, it should be 2025年52周, not 2025年1周
  const formatted = result.format('YYYY年w周')
  expect(formatted).toBe('2025年52周')
})
