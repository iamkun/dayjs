import moment from 'moment'
import dayjs from '../../src'
import '../../src/locale/en'
import '../../src/locale/en-gb'
import '../../src/locale/en-in'
import '../../src/locale/en-tt'
import '../../src/locale/en-ca'
import '../../src/locale/en-ie'
import '../../src/locale/en-il'
import '../../src/locale/en-sg'
import localizedFormat from '../../src/plugin/localizedFormat'
import advancedFormat from '../../src/plugin/advancedFormat'

dayjs.extend(localizedFormat)
dayjs.extend(advancedFormat)

const locales = [
  { locale: 'en', expectedDate: '12/25/2019' },
  { locale: 'en-gb', expectedDate: '25/12/2019' },
  { locale: 'en-in', expectedDate: '25/12/2019' },
  { locale: 'en-tt', expectedDate: '25/12/2019' }
]

describe('English date formats', () => {
  locales.forEach((locale) => {
    it(`should correctly format date with locale - ${locale.locale}`, () => {
      const dayjsWithLocale = dayjs('2019-12-25').locale(locale.locale)
      expect(dayjsWithLocale.format('L')).toEqual(locale.expectedDate)
    })
  })
})

describe('English ordinal (Do) parity with moment', () => {
  const ordinalLocales = ['en-ca', 'en-ie', 'en-il', 'en-sg']
  ordinalLocales.forEach((locale) => {
    it(`should format the ordinal day of month like moment - ${locale}`, () => {
      for (let d = 1; d <= 31; d += 1) {
        const date = `2021-01-${String(d).padStart(2, '0')}`
        expect(dayjs(date).locale(locale).format('Do'))
          .toEqual(moment(date).locale(locale).format('Do'))
      }
    })
  })
})
