import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import weekOfYear from '../../src/plugin/weekOfYear'
import '../../src/locale/pt-br'

dayjs.extend(weekOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('yearStart: 4 - ISO 8601 week numbering (pt-br locale)', () => {
  // yearStart: 4 = first week contains Jan 4 (ISO 8601 rule)
  // pt-br has weekStart: 0 (Sunday), so weeks run Sunday -> Saturday
  // The week containing Jan 4, 2019 (Fri) is Sun Dec 30 2018 - Sat Jan 5 2019
  const cases = [
    ['2018-12-31', 1, 'Dec 31 2018 belongs to week 1 of 2019'],
    ['2019-01-01', 1, 'Jan 1 2019 is week 1'],
    ['2019-01-05', 1, 'Jan 5 2019 (Saturday) is the last day of week 1'],
    ['2019-01-06', 2, 'Jan 6 2019 (Sunday) starts week 2'],
    ['2019-01-07', 2, 'Jan 7 2019 (Monday) is in week 2'],
    ['2020-01-01', 1, 'Jan 1 2020 is week 1']
  ]

  cases.forEach(([date, expectedWeek, description]) => {
    it(description, () => {
      dayjs.locale('pt-br')
      moment.locale('pt-br')
      expect(dayjs(date).week()).toBe(expectedWeek)
      expect(dayjs(date).week()).toBe(moment(date).week())
    })
  })

  it('locale object exposes yearStart as 4', () => {
    const loc = dayjs().locale('pt-br').$locale()
    expect(loc.yearStart).toBe(4)
  })
})
