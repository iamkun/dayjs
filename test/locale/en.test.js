import dayjs from '../../src'
import '../../src/locale/en'
import '../../src/locale/en-gb'
import '../../src/locale/en-in'
import '../../src/locale/en-tt'
import localizedFormat from '../../src/plugin/localizedFormat'

dayjs.extend(localizedFormat)

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
