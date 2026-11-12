import moment from 'moment'
import dayjs from '../../src'
import isoWeeksInYear from '../../src/plugin/isoWeeksInYear'
import isLeapYear from '../../src/plugin/isLeapYear'
import badMutable from '../../src/plugin/badMutable'
import utc from '../../src/plugin/utc'

dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)
dayjs.extend(utc)
dayjs.extend(badMutable)

const modes = [false, true]
const inputs = ['2004-06-15T12:34:56.789', '2005-06-15T12:34:56.789',
  '2020-12-31T23:59:59.999']
modes.forEach((useUTC) => {
  inputs.forEach((input) => {
    it(`preserves the date when reading ISO weeks (${input}, UTC=${useUTC})`, () => {
      const date = useUTC ? dayjs.utc(input) : dayjs(input)
      const reference = useUTC ? moment.utc(input) : moment(input)
      const value = date.valueOf()
      const formatted = date.format()
      expect(date.isoWeeksInYear()).toBe(reference.isoWeeksInYear())
      expect(date.valueOf()).toBe(value)
      expect(date.format()).toBe(formatted)
      expect(date.isoWeeksInYear()).toBe(reference.isoWeeksInYear())
      expect(date.valueOf()).toBe(value)
      expect(date.isUTC()).toBe(useUTC)
    })
  })

  it(`keeps badMutable setters mutable (UTC=${useUTC})`, () => {
    const date = useUTC ? dayjs.utc('2004-06-15') : dayjs('2004-06-15')
    const value = date.valueOf()
    expect(date.add(1, 'day')).toBe(date)
    expect(date.valueOf()).not.toBe(value)
    expect(date.endOf('year')).toBe(date)
    expect(date.format('MM-DD')).toBe('12-31')
  })
})
