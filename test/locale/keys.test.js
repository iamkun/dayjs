import fs from 'fs'
import path from 'path'

jest.mock('dayjs')

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
      name, ordinal, weekdays, months
    } = l
    expect(name).toEqual(expect.any(String))
    expect(weekdays).toEqual(expect.any(Array))
    expect(months).toEqual(expect.any(Array))
    // function pass date return string or number or null
    expect(ordinal(1)).toEqual(expect.anything())
  })
})
