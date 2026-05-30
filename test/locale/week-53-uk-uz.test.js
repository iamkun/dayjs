import dayjs from '../../src'
import weekOfYear from '../../src/plugin/weekOfYear'
import '../../src/locale/uk'
import '../../src/locale/uz'
import '../../src/locale/uz-latn'

dayjs.extend(weekOfYear)

const locales = ['uk', 'uz', 'uz-latn']

locales.forEach((locale) => {
  it(`week 53 for ${locale} on 2020-12-31`, () => {
    dayjs.locale(locale)

    expect(dayjs('2020-12-31').week()).toBe(53)
  })
})
