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
  ['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL'].forEach(option =>
    expect(dayjs.en.formats[option]).toBeDefined())
})

it('Recognizes localized format options', () => {
  const { formats } = dayjs.en
  const date = dayjs();
  ['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL'].forEach(option =>
    expect(date.format(option)).toBe(date.format(formats[option])))
})

it('Uses correct English formats', () => {
  const date = new Date()
  const actualDate = dayjs(date)
  const expectedDate = moment(date);
  ['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL'].forEach(option =>
    expect(actualDate.format(option)).toBe(expectedDate.format(option)))
})

it('Uses English formats in other locales as default', () => {
  const date = new Date()
  const actualDate = dayjs(date)
  const expectedDate = moment(date)
  // todo: ar here isn't a good fix here
  expect(actualDate.locale(ar).format('L')).toBe(expectedDate.format('L'))
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
