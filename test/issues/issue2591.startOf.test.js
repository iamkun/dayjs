import dayjs from '../../src'
import utc from '../../src/plugin/utc'
import '../../src/locale/en-gb'

dayjs.extend(utc)

const makeDate = (year, month, date, isUTC) => {
  const result = new Date(0)
  const prefix = isUTC ? 'UTC' : ''
  result[`set${prefix}FullYear`](year, month, date)
  result[`set${prefix}Hours`](12, 34, 56, 789)
  return result
}

const modes = [false, true]
modes.forEach((isUTC) => {
  const create = date => (isUTC ? dayjs.utc(date) : dayjs(date))
  const prefix = isUTC ? 'UTC' : ''
  const boundary = (year, month, date, end) => {
    const result = makeDate(year, month, date, isUTC)
    result[`set${prefix}Hours`](...(end ? [23, 59, 59, 999] : [0, 0, 0, 0]))
    return result.valueOf()
  }

  describe(`small-year boundaries in ${isUTC ? 'UTC' : 'local'} mode`, () => {
    it('preserves the year for year and month boundaries', () => {
      [0, 1, 4, 68, 99, 100, 400, 1900, 2000].forEach((year) => {
        const value = create(makeDate(year, 1, 15, isUTC))
        const original = value.valueOf()
        expect(value.startOf('year').valueOf()).toBe(boundary(year, 0, 1, false))
        expect(value.endOf('year').valueOf()).toBe(boundary(year, 11, 31, true))
        expect(value.startOf('month').valueOf()).toBe(boundary(year, 1, 1, false))
        expect(value.endOf('month').valueOf()).toBe(boundary(year, 2, 0, true))
        expect(value.valueOf()).toBe(original)
        expect(value.isSame(value, 'year')).toBe(true)
        expect(value.isSame(value, 'month')).toBe(true)
      })
    })

    it('keeps leap days in year zero and year four', () => {
      [0, 4].forEach((year) => {
        const value = create(makeDate(year, 1, 29, isUTC))
        expect(value.endOf('month').date()).toBe(29)
        expect(value.endOf('month').year()).toBe(year)
        expect(value.daysInMonth()).toBe(29)
      })
    })

    it('normalizes week boundaries across years zero and one hundred', () => {
      [[0, 0, 1], [99, 11, 31]].forEach(([year, month, date]) => {
        ['en', 'en-gb'].forEach((locale) => {
          const value = create(makeDate(year, month, date, isUTC)).locale(locale)
          const start = locale === 'en-gb' ? 1 : 0
          const gap = ((value.day() + 7) - start) % 7
          expect(value.startOf('week').valueOf())
            .toBe(boundary(year, month, date - gap, false))
          expect(value.endOf('week').valueOf())
            .toBe(boundary(year, month, (date + 6) - gap, true))
        })
      })
    })
  })
})
