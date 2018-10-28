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
      relativeTime,
      weekdaysShort,
      monthsShort,
      weekdaysMin
    } = l
    expect(name).toEqual(expect.any(String))
    expect(weekdays).toEqual(expect.any(Array))

    if (weekdaysShort) expect(weekdaysShort).toEqual(expect.any(Array))
    if (monthsShort) expect(monthsShort).toEqual(expect.any(Array))
    if (weekdaysMin) expect(weekdaysMin).toEqual(expect.any(Array))

    expect(months).toEqual(expect.any(Array))
    // function pass date return string or number or null
    expect(ordinal(1)).toEqual(expect.anything())
    expect(ordinal(3)).toEqual(expect.anything())
    expect(dayjs().locale(name).$locale().name).toBe(name)
    if (relativeTime) {
      if (relativeTime.s) {
        // Old locale object structure
        expect(Object.keys(relativeTime).sort())
          .toEqual(['d', 'dd', 'future', 'h', 'hh', 'm', 'mm', 'M', 'MM', 'past', 's', 'y', 'yy'].sort())
        expect(Object.keys(relativeTime).every(key =>
          // eslint-disable-next-line implicit-arrow-linebreak
          typeof relativeTime[key] === 'string')).toBeTruthy()
      } else if (relativeTime.duration.mmm) {
        // Improved locale object structure
        expect(Object.keys(relativeTime).sort()).toEqual(['duration', 'future', 'past'].sort());
        ['duration', 'future', 'past'].forEach(key =>
          // eslint-disable-next-line implicit-arrow-linebreak
          expect(Object.keys(relativeTime[key]).sort())
            .toEqual(['d', 'dd', 'ddd', 'h', 'hh', 'hhh', 'm', 'mm', 'mmm',
              'M', 'MM', 'MMM', 's', 'y', 'yy', 'yyy'].sort()));
        ['duration', 'future', 'past'].forEach(key =>
          // eslint-disable-next-line implicit-arrow-linebreak
          Object.keys(relativeTime[key]).forEach(key2 =>
            // eslint-disable-next-line implicit-arrow-linebreak
            expect(typeof relativeTime[key][key2]).toEqual('string')))
      } else {
        // Ultimate locale object structure
        expect(Object.keys(relativeTime).sort()).toEqual(['duration', 'future', 'past'].sort());
        ['duration', 'future', 'past'].forEach(key =>
          // eslint-disable-next-line implicit-arrow-linebreak
          expect(Object.keys(relativeTime[key]).sort())
            .toEqual(['M', 'MM', 'd', 'dd', 'h', 'hh', 'm', 'mm', 's', 'y', 'yy'].sort()));
        ['duration', 'future', 'past'].forEach(key =>
          // eslint-disable-next-line implicit-arrow-linebreak
          Object.keys(relativeTime[key]).forEach((key2) => {
            if (key2.length === 1) {
              expect(typeof relativeTime[key][key2]).toEqual('string')
            } else {
              expect(Array.isArray(relativeTime[key][key2])).toBeTruthy()
            }
          }))
      }
    }
  })
})
