import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import '../../src/locale/it-ch'
import relativeTime from '../../src/plugin/relativeTime'
import localizedFormat from '../../src/plugin/localizedFormat'

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

describe('Italian formats in Switzerland', () => {
  beforeEach(() => {
    dayjs.locale('it-ch')
    moment.locale('it-ch')

    MockDate.set(new Date())
  })

  afterEach(() => {
    MockDate.reset()
  })


  it('Format month with locale function', () => {
    for (let i = 0; i <= 7; i += 1) {
      const dayjsWithLocale = dayjs().add(i, 'day')
      const momentWithLocale = moment().add(i, 'day')
      const testFormat1 = 'DD MMMM YYYY MMM'
      const testFormat2 = 'dddd, MMMM D YYYY'
      const testFormat3 = 'MMMM'
      const testFormat4 = 'MMM'
      const testFormat5 = 'L'
      expect(dayjsWithLocale.format(testFormat1)).toEqual(momentWithLocale.format(testFormat1))
      expect(dayjsWithLocale.format(testFormat2)).toEqual(momentWithLocale.format(testFormat2))
      expect(dayjsWithLocale.format(testFormat3)).toEqual(momentWithLocale.format(testFormat3))
      expect(dayjsWithLocale.format(testFormat4)).toEqual(momentWithLocale.format(testFormat4))
      expect(dayjsWithLocale.format(testFormat5)).toEqual(momentWithLocale.format(testFormat5))
    }
  })

  it('RelativeTime: Time from X', () => {
    const T = [
      [44.4, 'second'], // a few seconds
      [89.5, 'second'], // a minute
      [2, 'minute'], // 2 minutes
      [5, 'minute'], // 5 minutes
      [43, 'minute'], // 44 minutes
      [45, 'minute'], // an hour
      [3, 'hour'], // 3 hours
      [21, 'hour'], // 21 hours
      [1, 'day'], // a day
      [3, 'day'], // 3 day
      [25, 'day'], // 25 days
      [1, 'month'], // a month
      [2, 'month'], // 2 month
      [10, 'month'], // 10 month
      [1, 'year'], // a year
      [2, 'year'], // 2 year
      [5, 'year'], // 5 year
      [18, 'month'] // 2 years
    ]


    T.forEach((t) => {
      expect(dayjs().from(dayjs().add(t[0], t[1])))
        .toBe(moment().from(moment().add(t[0], t[1])))
      expect(dayjs().from(dayjs().add(t[0], t[1]), true))
        .toBe(moment().from(moment().add(t[0], t[1]), true))
    })
  })
})
