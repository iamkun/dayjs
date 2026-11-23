import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import weekOfYear from '../../src/plugin/weekOfYear'
import '../../src/locale/uz'

dayjs.extend(weekOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('yearStart: 4 - ISO 8601 week numbering (uz locale)', () => {
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
      dayjs.locale('uz')
      moment.locale('uz')
      expect(dayjs(date).week()).toBe(expectedWeek)
      expect(dayjs(date).week()).toBe(moment(date).week())
    })
  })

  it('locale object exposes yearStart as 4', () => {
    const uzLocale = dayjs().locale('uz').$locale()
    expect(uzLocale.yearStart).toBe(4)
  })
})
