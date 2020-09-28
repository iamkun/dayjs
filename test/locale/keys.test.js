import fs from 'fs'
import path from 'path'
import dayjs from '../../src'

const localeDir = '../../src/locale'
const Locale = []
const localeNameRegex = /\/\/ (.*) \[/

// load all locales from locale dir
fs.readdirSync(path.join(__dirname, localeDir))
  .forEach((file) => {
    const fPath = path.join(__dirname, localeDir, file)
    Locale.push({
      name: file,
      // eslint-disable-next-line import/no-dynamic-require, global-require
      content: require(fPath).default,
      file: fs.readFileSync(fPath, 'utf-8')
    })
  })

Locale.forEach((locale) => {
  it(`Locale keys for ${locale.content.name}`, () => {
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
      weekStart,
      yearStart,
      meridiem
    } = locale.content
    // comments required
    const commentsMatchResult = locale.file.match(localeNameRegex)
    expect(commentsMatchResult[1]).not.toBeUndefined()

    expect(name).toEqual(locale.name.replace('.js', ''))
    expect(name).toBe(name.toLowerCase())
    expect(weekdays).toEqual(expect.any(Array))

    if (weekdaysShort) expect(weekdaysShort).toEqual(expect.any(Array))
    if (weekdaysMin) expect(weekdaysMin).toEqual(expect.any(Array))
    if (weekStart) expect(weekStart).toEqual(expect.any(Number))
    if (yearStart) expect(yearStart).toEqual(expect.any(Number))

    // months could be a function or array
    if (Array.isArray(months)) {
      expect(months).toEqual(expect.any(Array))
    } else {
      expect(months(dayjs(), 'str')).toEqual(expect.any(String))
      expect(months.f).toEqual(expect.any(Array))
      expect(months.s).toEqual(expect.any(Array))
    }
    // monthsShort could be a function or array
    if (monthsShort) {
      if (Array.isArray(monthsShort)) {
        expect(monthsShort).toEqual(expect.any(Array))
      } else {
        expect(monthsShort(dayjs(), 'str')).toEqual(expect.any(String))
        expect(monthsShort.f).toEqual(expect.any(Array))
        expect(monthsShort.s).toEqual(expect.any(Array))
      }
    }
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

    if (meridiem) {
      for (let i = 1; i <= 23; i += 1) {
        expect(meridiem(i)).toEqual(expect.anything())
      }
    }
  })
})
