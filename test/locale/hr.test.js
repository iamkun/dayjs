import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import weekOfYear from '../../src/plugin/weekOfYear'
import '../../src/locale/hr'

dayjs.extend(weekOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format month with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    const dayjsUK = dayjs().locale('hr').add(i, 'day')
    const momentUK = moment().locale('hr').add(i, 'day')
    const testFormat1 = 'DD MMMM YYYY MMM'
    const testFormat2 = 'dddd, MMMM D YYYY'
    const testFormat3 = 'MMMM'
    const testFormat4 = 'MMM'
    expect(dayjsUK.format(testFormat1)).toEqual(momentUK.format(testFormat1))
    expect(dayjsUK.format(testFormat2)).toEqual(momentUK.format(testFormat2))
    expect(dayjsUK.format(testFormat3)).toEqual(momentUK.format(testFormat3))
    expect(dayjsUK.format(testFormat4)).toEqual(momentUK.format(testFormat4))
  }
})
describe('yearStart: 4 - ISO 8601 week numbering (hr locale)', () => {
  // yearStart: 4 means the first week of the year is the one containing Jan 4
  // (ISO 8601: week 1 is the week with the year's first Thursday)
  const cases = [
    // date          expected week  description
    ['2018-12-31', 1, 'Dec 31 2018 belongs to week 1 of 2019'],
    ['2019-01-01', 1, 'Jan 1 2019 is week 1'],
    ['2019-01-06', 1, 'Jan 6 2019 (Sunday) is still week 1'],
    ['2019-01-07', 2, 'Jan 7 2019 (Monday) starts week 2'],
    ['2019-12-30', 1, 'Dec 30 2019 rolls into week 1 of 2020'],
    ['2020-01-01', 1, 'Jan 1 2020 is week 1']
  ]

  cases.forEach(([date, expectedWeek, description]) => {
    it(description, () => {
      dayjs.locale('hr')
      moment.locale('hr')
      expect(dayjs(date).week()).toBe(expectedWeek)
      expect(dayjs(date).week()).toBe(moment(date).week())
    })
  })

  it('locale object exposes yearStart as 4', () => {
    const hrLocale = dayjs()
      .locale('hr')
      .$locale()
    expect(hrLocale.yearStart).toBe(4)
  })
})
