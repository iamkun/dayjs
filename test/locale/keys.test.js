import fs from 'fs'
import path from 'path'
import dayjs from '../../src'

const localeDir = '../../src/locale'
const L = []

// load all locales from locale dir
fs.readdirSync(path.join(__dirname, localeDir))
  .forEach((file) => {
    // eslint-disable-next-line
    L.push(require(path.join(__dirname, localeDir, file)).default)
  })

it('Locale keys', () => {
  L.forEach((l) => {
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
    } = l
    expect(name).toEqual(expect.any(String))
    expect(weekdays).toEqual(expect.any(Array))

    if (weekdaysShort) expect(weekdaysShort).toEqual(expect.any(Array))
    if (monthsShort) expect(monthsShort).toEqual(expect.any(Array))
    if (weekdaysMin) expect(weekdaysMin).toEqual(expect.any(Array))
    if (weekStart) expect(weekStart).toEqual(expect.any(Number))

    expect(months).toEqual(expect.any(Array))
    // function pass date return string or number or null
    for (let i = 1; i <= 31; i += 1) {
      expect(ordinal(i)).toEqual(expect.anything())
    }
    expect(dayjs().locale(name).$locale().name).toBe(name)
    if (formats) {
      expect(Object.keys(formats).sort()).toEqual(['L', 'LL', 'LLL', 'LLLL', 'LT', 'LTS'].sort())
    }
    if (relativeTime) {
      expect(Object.keys(relativeTime).sort()).toEqual(['d', 'dd', 'future', 'h', 'hh', 'm', 'mm', 'M', 'MM',
        'past', 's', 'y', 'yy']
        .sort())
    }
  })
})
