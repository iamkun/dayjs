import dayjs from '../../src'
import preciseDiff from '../../src/plugin/preciseDiff'

dayjs.extend(preciseDiff)

it('Diff of two time', () => {
  expect(dayjs.preciseDiff(dayjs('2014-01-01 12:00:00'), dayjs('2014-02-03 15:04:05'))).toBe('1 month 2 days 3 hours 4 minutes 5 seconds')
})

it('Diff of two same time', () => {
  expect(dayjs.preciseDiff(dayjs('2014-01-01 12:00:00'), dayjs('2014-01-01 12:00:00'))).toBe('')
})

it('Diff of two after time', () => {
  expect(dayjs.preciseDiff(dayjs('2014-02-03 15:04:05'), dayjs('2014-01-01 12:00:00'))).toBe('1 month 2 days 3 hours 4 minutes 5 seconds')
})

it('Diff of two time secDiff>0', () => {
  expect(dayjs.preciseDiff(dayjs('2014-01-01 12:00:06'), dayjs('2014-02-03 15:04:05'))).toBe('1 month 2 days 3 hours 3 minutes 59 seconds')
})

it('Diff of two time secDiff==0', () => {
  expect(dayjs.preciseDiff(dayjs('2014-01-01 12:00:06'), dayjs('2014-02-03 15:04:06'))).toBe('1 month 2 days 3 hours 4 minutes')
})


it('Diff of two time minDiff>0', () => {
  expect(dayjs.preciseDiff(dayjs('2014-01-01 12:05:00'), dayjs('2014-02-03 15:04:05'))).toBe('1 month 2 days 2 hours 59 minutes 5 seconds')
})

it('Diff of two time hourDiff==0', () => {
  expect(dayjs.preciseDiff(dayjs('2014-01-01 12:05:00'), dayjs('2014-02-03 12:05:00'))).toBe('1 month 2 days')
})

it('Diff of two time dDiff>0', () => {
  expect(dayjs.preciseDiff(dayjs('2014-01-04 12:00:00'), dayjs('2014-02-03 15:04:05'))).toBe('30 days 3 hours 4 minutes 5 seconds')
})

it('Diff of two time dDiff==0', () => {
  expect(dayjs.preciseDiff(dayjs('2014-02-03 12:00:00'), dayjs('2014-02-03 15:04:05'))).toBe('3 hours 4 minutes 5 seconds')
})

it('Diff of two time dDiff<0 && daysInLastFullMonth<m1.date', () => {
  expect(dayjs.preciseDiff(dayjs('2014-03-28 15:04:05'), dayjs('2014-01-29 12:00:00'))).toBe('1 month 28 days 3 hours 4 minutes 5 seconds')
})

it('Diff of two time mDiff<0', () => {
  expect(dayjs.preciseDiff(dayjs('2015-01-01 12:00:00'), dayjs('2014-02-03 15:04:05'))).toBe('10 months 28 days 20 hours 55 minutes 55 seconds')
})

it('Diff of two time yDiff>0', () => {
  expect(dayjs.preciseDiff(dayjs('2015-03-01 12:00:00'), dayjs('2014-02-03 15:04:05'))).toBe('1 year 25 days 20 hours 55 minutes 55 seconds')
})

it('Diff of two time returnValueObject=true', () => {
  expect(JSON.stringify(dayjs.preciseDiff(dayjs('2014-01-31 12:00:00'), dayjs('2014-02-03 15:04:05'), true))).toBe(JSON.stringify({
    years: 0, months: 0, days: 3, hours: 3, minutes: 4, seconds: 5, firstDateWasLater: false
  }))
})

it('Diff of two same time returnValueObject=true', () => {
  expect(JSON.stringify(dayjs.preciseDiff(dayjs('2014-02-03 15:04:05'), dayjs('2014-02-03 15:04:05'), true))).toBe(JSON.stringify({
    years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, firstDateWasLater: false
  }))
})
