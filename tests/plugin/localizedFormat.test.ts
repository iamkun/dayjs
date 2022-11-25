import moment from 'moment'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import dayjs from '../../src'
import es from '../../src/locale/es'
import znCn from '../../src/locale/zh-cn'
import localizedFormat from '../../src/plugin/localizedFormat'
import type { Locale } from 'src/locale'

dayjs.extend(localizedFormat)

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date())
})

afterEach(() => {
  vi.useRealTimers()
})

test('Declares English localized formats', () => {
  expect(dayjs.en).toBeDefined()
  expect(dayjs.en.formats).toBeDefined()
  if (dayjs.en.formats !== undefined) {
    expect(dayjs.en.formats['LT']).toBeDefined()
    expect(dayjs.en.formats['LTS']).toBeDefined()
    expect(dayjs.en.formats['L']).toBeDefined()
    expect(dayjs.en.formats['LL']).toBeDefined()
    expect(dayjs.en.formats['LLL']).toBeDefined()
    expect(dayjs.en.formats['LLLL']).toBeDefined()
  }
})

test('Should not interpolate characters inside square brackets', () => {
  const date = new Date(0)
  const actualDate = dayjs(date)
  const expectedDate = moment(date)

  expect(actualDate.format('[l]')).toBe('l')
  expect(actualDate.format('YYYY [l] YYYY')).toBe('1970 l 1970')
  expect(actualDate.format('l [l] l')).toBe('1/1/1970 l 1/1/1970')
  expect(actualDate.format('[L LL LLL LLLL]')).toBe(
    expectedDate.format('[L LL LLL LLLL]')
  )

  const localeFormats = {
    L: '[MMMM MM DD dddd]',
  }
  const mockedDayJsLocale = {
    ...es,
    name: 'fake-locale',
    formats: {
      ...localeFormats,
    },
  } as Locale
  const fakeDate = dayjs(date, undefined, mockedDayJsLocale)

  expect(fakeDate.locale('fake-locale').format('l')).toEqual('MMMM MM DD dddd')
})

test('Recognizes localized format options', () => {
  const { formats } = dayjs.en
  if (formats !== undefined) {
    const date = dayjs()
    ;['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL'].forEach((option) =>
      expect(date.format(option)).toBe(
        date.format(formats[option as keyof object])
      )
    )
  } else {
    expect(formats).toBeDefined()
  }
})

test('Uses correct English formats', () => {
  const date = new Date()
  const actualDate = dayjs(date)
  const expectedDate = moment(date)
  ;['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL'].forEach((option) =>
    expect(actualDate.format(option)).toBe(expectedDate.format(option))
  )
})

test('Uses English formats in other locales as default', () => {
  const date = new Date()
  const actualDate = dayjs(date)
  const expectedDate = moment(date)
  const mockLocale = {
    name: 'mock',
    weekdays: [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    months: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  } as Locale
  expect(actualDate.locale(mockLocale).format('L')).toBe(
    expectedDate.format('L')
  )
})

test('Leaves the default format intact', () => {
  const date = new Date()
  const actualDate = dayjs(date)
  const expectedDate = moment(date)
  expect(actualDate.format()).toBe(expectedDate.format())
})

test('Uses the locale of the dayjs instance', () => {
  const date = new Date()
  const englishDate = dayjs(date)
  const spanishDate = dayjs(date, undefined, 'es')
  expect(englishDate.format('L LTS')).not.toBe(spanishDate.format('L LTS'))
})

test('Uses the localized lowercase formats if defined', () => {
  const date = new Date()
  const znDate = dayjs(date, undefined, znCn)
  const formats = znCn.formats
  if (formats !== undefined) {
    ;['l', 'll', 'lll', 'llll'].forEach((option) =>
      expect(znDate.format(option)).toBe(
        znDate.format(formats[option as keyof object])
      )
    )
  } else {
    expect(formats).toBeDefined()
  }
})

test('Uses fallback to xx if xx-yy not available', () => {
  expect(dayjs('2019-02-01').locale('en-yy').format('MMMM')).toBe('February')
})

test('Uses xx-yy if xx-YY is provided', () => {
  expect(dayjs('2019-02-01').locale('es-US').format('MMMM')).toBe('febrero')
})

test('Uses the localized uppercase formats as a base for lowercase formats, if not defined', () => {
  const date = new Date()
  const spanishDate = dayjs(date, undefined, 'es')
  const esFormats = es.formats

  if (esFormats !== undefined) {
    ;['l', 'll', 'lll', 'llll'].forEach((option) => {
      const upperCaseFormat: string =
        esFormats[option.toUpperCase() as keyof object]
      const adaptedFormat = upperCaseFormat.replace(
        /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
        (_, group1, group2) => group1 || group2.slice(1)
      )
      expect(spanishDate.format(option)).toBe(spanishDate.format(adaptedFormat))
    })
  } else {
    expect(esFormats).toBeDefined()
  }
})
