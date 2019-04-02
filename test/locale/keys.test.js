import fs from 'fs'
import path from 'path'
import dayjs from '../../src'

const localeDir = '../../src/locale'
const Locale = []

// load all locales from locale dir
fs.readdirSync(path.join(__dirname, localeDir))
  .forEach((file) => {
    Locale.push({
      name: file,
      // eslint-disable-next-line import/no-dynamic-require, global-require
      content: require(path.join(__dirname, localeDir, file)).default
    })
  })

it('Locale keys', () => {
  Locale.forEach((locale) => {
    const {
      name,
      ordinal,
      weekdays,
      months,
      formats,
      relativeTime,
      weekdaysShort,
      monthsShort,
      weekdaysMin,
      weekStart
    } = locale.content

    expect(name).toEqual(locale.name.replace('.js', ''))
    expect(weekdays).toEqual(expect.any(Array))

    if (weekdaysShort) expect(weekdaysShort).toEqual(expect.any(Array))
    if (monthsShort) expect(monthsShort).toEqual(expect.any(Array))
    if (weekdaysMin) expect(weekdaysMin).toEqual(expect.any(Array))
    if (weekStart) expect(weekStart).toEqual(expect.any(Number))

    expect(months).toEqual(expect.any(Array))
    // function pass date return string or number or null
    if (name !== 'en') { // en ordinal set in advancedFormat
      for (let i = 1; i <= 31; i += 1) {
        expect(ordinal(i)).toEqual(expect.anything())
      }
    }

    expect(dayjs().locale(name).$locale().name).toBe(name)
    if (formats) {
      const {
        LT,
        LTS,
        L,
        LL,
        LLL,
        LLLL,
        l,
        ll,
        lll,
        llll,
        ...remainingFormats
      } = formats
      expect(formats).toEqual(expect.objectContaining({
        L: expect.any(String),
        LL: expect.any(String),
        LLL: expect.any(String),
        LLLL: expect.any(String),
        LT: expect.any(String),
        LTS: expect.any(String)
      }))
      expect(Object.keys(remainingFormats).length).toEqual(0)
      if (l) expect(l).toEqual(expect.any(String))
      if (ll) expect(ll).toEqual(expect.any(String))
      if (lll) expect(lll).toEqual(expect.any(String))
      if (llll) expect(llll).toEqual(expect.any(String))
    }
    if (relativeTime) {
      expect(Object.keys(relativeTime).sort()).toEqual(['d', 'dd', 'future', 'h', 'hh', 'm', 'mm', 'M', 'MM',
        'past', 's', 'y', 'yy']
        .sort())
    }
  })
})
