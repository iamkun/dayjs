import dayjs from '../../src'
import localeData from '../../src/plugin/localeData'
import customParseFormat from '../../src/plugin/customParseFormat'
import preParsePostFormat from '../../src/plugin/preParsePostFormat'
import utc from '../../src/plugin/utc'
import ar from '../../src/locale/ar'
import bn from '../../src/locale/bn'
import en from '../../src/locale/en'

jest.resetModules()
const isolated = require('../../src').default
isolated.extend(require('../../src/plugin/customParseFormat').default)

dayjs.extend(localeData)
dayjs.extend(customParseFormat)
dayjs.extend(preParsePostFormat)
dayjs.extend(utc)

beforeEach(() => {
  dayjs.locale('ar')
})

afterEach(() => {
  dayjs.locale('en')
})

it('strictly parses localized numerals after preparse', () => {
  const input = ar.postformat('2026-10-09')
  const parsed = dayjs(input, 'YYYY-MM-DD', true)
  expect(parsed.isValid()).toBe(true)
  expect(parsed.format('YYYY-MM-DD')).toBe(input)
  expect(parsed.year()).toBe(2026)
  expect(parsed.month()).toBe(9)
  expect(parsed.date()).toBe(9)
  expect(dayjs(input, 'YYYY-MM-DD', 'ar', true).isValid()).toBe(true)
  expect(dayjs(input, ['DD/MM/YYYY', 'YYYY-MM-DD'], true).isValid()).toBe(true)
  expect(dayjs('2026-10-09', 'YYYY-MM-DD', true).isValid()).toBe(true)
})

it('strictly parses localized numerals in UTC', () => {
  const input = ar.postformat('2026-10-09 15:24:36')
  const parsed = dayjs.utc(input, 'YYYY-MM-DD HH:mm:ss', true)
  expect(parsed.isValid()).toBe(true)
  expect(parsed.toISOString()).toBe('2026-10-09T15:24:36.000Z')
  expect(parsed.format('YYYY-MM-DD HH:mm:ss')).toBe(input)
})

it('keeps strict date and delimiter checks after preparse', () => {
  const inputs = [
    '2026-02-30',
    '2026-00-09',
    '2026-10-00',
    '2026/10/09',
    '2026-1-09',
    '2026-10-09extra'
  ]
  inputs.forEach((input) => {
    expect(dayjs(ar.postformat(input), 'YYYY-MM-DD', true).isValid()).toBe(false)
    expect(dayjs.utc(ar.postformat(input), 'YYYY-MM-DD', true).isValid()).toBe(false)
  })
})

it('strictly parses Bengali numerals', () => {
  dayjs.locale('bn')
  const input = bn.postformat('2026-10-09')
  const parsed = dayjs(input, 'YYYY-MM-DD', true)
  expect(parsed.isValid()).toBe(true)
  expect(parsed.format('YYYY-MM-DD')).toBe(input)
})

it('uses the selected output locale for strict comparison', () => {
  const input = ar.postformat('2026-10-09')
  const parsed = dayjs(input, 'YYYY-MM-DD', 'en', true)
  expect(parsed.isValid()).toBe(true)
  expect(parsed.format('YYYY-MM-DD')).toBe('2026-10-09')
})

it('preserves strict parsing with a preparse-only locale', () => {
  dayjs.locale({
    ...en,
    name: 'preparse-only',
    preparse: input => input.replace(/^date:/, '')
  })
  const parsed = dayjs('date:2026-10-09', 'YYYY-MM-DD', true)
  expect(parsed.isValid()).toBe(true)
  expect(parsed.format('YYYY-MM-DD')).toBe('2026-10-09')
})

it('preserves a direct strict match when hooks are not inverse functions', () => {
  dayjs.locale({
    ...en,
    name: 'noninverse-hooks',
    preparse: input => `x${input}`,
    postformat: output => `x${output}`
  })
  const parsed = dayjs('2026-10-09', 'YYYY-MM-DD', true)
  expect(parsed.isValid()).toBe(true)
  expect(parsed.format('YYYY-MM-DD')).toBe('x2026-10-09')
})

it('does not apply locale hooks when preParsePostFormat is not installed', () => {
  isolated.locale({
    ...en,
    name: 'inactive-hooks',
    preparse: input => `x${input}`,
    postformat: output => `x${output}`
  })
  const parsed = isolated('2026-10-09', 'YYYY-MM-DD', true)
  expect(parsed.isValid()).toBe(true)
  expect(parsed.format('YYYY-MM-DD')).toBe('2026-10-09')
})
