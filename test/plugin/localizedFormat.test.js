import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import es from '../../src/locale/es'
import ar from '../../src/locale/ar'
import localizedFormat from '../../src/plugin/localizedFormat'

dayjs.extend(localizedFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Declares English localized formats', () => {
  expect(dayjs.en).toBeDefined()
  expect(dayjs.en.formats).toBeDefined();
  ['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL', 'l', 'll', 'lll', 'llll'].forEach(option =>
    expect(dayjs.en.formats[option]).toBeDefined())
})

it('Should not interpolate characters inside square brackets', () => {
  const date = new Date(0)
  const actualDate = dayjs(date)
  const expectedDate = moment(date)

  expect(actualDate.format('[l]')).toBe('l')
  expect(actualDate.format('YYYY [l] YYYY')).toBe('1970 l 1970')
  expect(actualDate.format('l [l] l')).toBe('1/1/1970 l 1/1/1970')
  expect(actualDate.format('[L LL LLL LLLL]')).toBe(expectedDate.format('[L LL LLL LLLL]'))
})

it('Recognizes localized format options', () => {
  const { formats } = dayjs.en
  const date = dayjs();
  ['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL', 'l', 'll', 'lll', 'llll'].forEach(option =>
    expect(date.format(option)).toBe(date.format(formats[option])))
})

it('Uses correct English formats', () => {
  const date = new Date()
  const actualDate = dayjs(date)
  const expectedDate = moment(date);
  ['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL', 'l', 'll', 'lll', 'llll'].forEach(option =>
    expect(actualDate.format(option)).toBe(expectedDate.format(option)))
})

it('Uses English formats in other locales as default', () => {
  const date = new Date()
  const actualDate = dayjs(date)
  const expectedDate = moment(date)
  // todo: ar here isn't a good fix here
  const arOldFormats = ar.formats
  ar.formats = {}
  expect(actualDate.locale(ar).format('L')).toBe(expectedDate.format('L'))
  ar.formats = arOldFormats
})

it('Leaves the default format intact', () => {
  const date = new Date()
  const actualDate = dayjs(date)
  const expectedDate = moment(date)
  expect(actualDate.format()).toBe(expectedDate.format())
})

it('Uses the locale of the dayjs instance', () => {
  const date = new Date()
  const englishDate = dayjs(date)
  const spanishDate = dayjs(date, { locale: es })
  expect(englishDate.format('L LTS')).not.toBe(spanishDate.format('L LTS'))
})
