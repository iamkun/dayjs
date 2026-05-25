import moment from 'moment'
import dayjs from '../../src'
import weekOfYear from '../../src/plugin/weekOfYear'
import '../../src/locale/de-at'
import '../../src/locale/de-ch'
import '../../src/locale/nl-be'

dayjs.extend(weekOfYear)

const locales = ['de-at', 'de-ch', 'nl-be']

locales.forEach((locale) => {
  it(`week 53 for ${locale} matches moment on 2020-12-31`, () => {
    dayjs.locale(locale)
    moment.locale(locale)

    expect(dayjs('2020-12-31').week()).toBe(53)
    expect(dayjs('2020-12-31').week()).toBe(moment('2020-12-31').week())
  })
})
