import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import weekOfYear from '../../src/plugin/weekOfYear'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/sr-cyrl'

dayjs.extend(relativeTime)
dayjs.extend(weekOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Serbian cyrillic locale relative time in past and future', () => {
  const cases = [
    [1, 's', 'за неколико секунди', 'неколико секунди'],
    [-1, 's', 'пре неколико секунди', 'неколико секунди'],
    [4, 's', 'за неколико секунди', 'неколико секунди'],
    [1, 'm', 'за један минут', 'један минут'],
    [-1, 'm', 'пре једног минута', 'један минут'],
    [4, 'm', 'за 4 минута', '4 минута'],
    [5, 'm', 'за 5 минута', '5 минута'],
    [21, 'm', 'за 21 минут', '21 минут'],
    [1, 'h', 'за један сат', 'један сат'],
    [-1, 'h', 'пре једног сата', 'један сат'],
    [4, 'h', 'за 4 сата', '4 сата'],
    [5, 'h', 'за 5 сати', '5 сати'],
    [21, 'h', 'за 21 сат', '21 сат'],
    [1, 'd', 'за један дан', 'један дан'],
    [-1, 'd', 'пре једног дана', 'један дан'],
    [4, 'd', 'за 4 дана', '4 дана'],
    [5, 'd', 'за 5 дана', '5 дана'],
    [21, 'd', 'за 21 дан', '21 дан'],
    [1, 'M', 'за један месец', 'један месец'],
    [-1, 'M', 'пре једног месеца', 'један месец'],
    [4, 'M', 'за 4 месеца', '4 месеца'],
    [5, 'M', 'за 5 месеци', '5 месеци'],
    [10, 'M', 'за 10 месеци', '10 месеци'],
    [1, 'y', 'за једну годину', 'једна година'],
    [-1, 'y', 'пре једне године', 'једна година'],
    [4, 'y', 'за 4 године', '4 године'],
    [5, 'y', 'за 5 година', '5 година'],
    [21, 'y', 'за 21 годину', '21 година']
  ]

  cases.forEach((c) => {
    expect(dayjs().add(c[0], c[1]).locale('sr-cyrl').fromNow()).toBe(c[2])
    expect(dayjs().add(c[0], c[1]).locale('sr-cyrl').fromNow(true)).toBe(c[3])
    // TODO: compare to momentjs once logic and grammar are fixed there
  })
})

describe('yearStart: 4 - ISO 8601 week numbering (sr-cyrl locale)', () => {
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
      dayjs.locale('sr-cyrl')
      moment.locale('sr-cyrl')
      expect(dayjs(date).week()).toBe(expectedWeek)
      expect(dayjs(date).week()).toBe(moment(date).week())
    })
  })

  it('locale object exposes yearStart as 4', () => {
    const srLocale = dayjs()
      .locale('sr-cyrl')
      .$locale()
    expect(srLocale.yearStart).toBe(4)
  })
})
