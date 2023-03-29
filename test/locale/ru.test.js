import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/ru'
import '../../src/locale/ru-ru'

dayjs.extend(relativeTime)

const locales = ['ru', 'ru-ru']

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('Russian date formats', () => {
  locales.forEach((locale) => {
    it('Format Month with locale function', () => {
      for (let i = 0; i <= 7; i += 1) {
        const dayjsRU = dayjs().locale(locale).add(i, 'day')
        const momentRU = moment().locale(locale).add(i, 'day')
        const testFormat1 = 'DD MMMM YYYY MMM'
        const testFormat2 = 'MMMM'
        const testFormat3 = 'MMM'
        expect(dayjsRU.format(testFormat1)).toEqual(momentRU.format(testFormat1))
        expect(dayjsRU.format(testFormat2)).toEqual(momentRU.format(testFormat2))
        expect(dayjsRU.format(testFormat3)).toEqual(momentRU.format(testFormat3))
      }
    })

    it('RelativeTime: Time from X', () => {
      const T = [
        [44.4, 'second'], // a few seconds
        [89.5, 'second'], // a minute
        [43, 'minute'], // 43 minutes
        [21, 'hour'], // 21 hours
        [25, 'day'], // 25 days
        [10, 'month'], // 2 month
        [18, 'month'] // 2 years
      ]

      T.forEach((t) => {
        dayjs.locale(locale)
        moment.locale(locale)
        expect(dayjs().from(dayjs().add(t[0], t[1])))
          .toBe(moment().from(moment().add(t[0], t[1])))
        expect(dayjs().from(dayjs().add(t[0], t[1]), true))
          .toBe(moment().from(moment().add(t[0], t[1]), true))
      })
    })

    it('Meridiem', () => {
      expect(dayjs('2020-01-01 03:00:00').locale(locale).format('A')).toEqual('ночи')
      expect(dayjs('2020-01-01 11:00:00').locale(locale).format('A')).toEqual('утра')
      expect(dayjs('2020-01-01 16:00:00').locale(locale).format('A')).toEqual('дня')
      expect(dayjs('2020-01-01 20:00:00').locale(locale).format('A')).toEqual('вечера')
    })
  })
})

