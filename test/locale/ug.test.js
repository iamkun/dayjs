import MockDate from 'mockdate'
import dayjs from '../../src'
import '../../src/locale/ug'
import relativeTime from '../../src/plugin/relativeTime'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('formats dates in Uyghur', () => {
  const date = dayjs('2026-01-15').locale('ug')
  expect(date.format('D MMMM YYYY')).toBe('15 يانۋار 2026')
  expect(date.format('dddd')).toBe('پەيشەنبە')
  expect(date.format('MMMM')).toBe('يانۋار')
  expect(date.format('MMM')).toBe('يانۋار')
  expect(date.format('dd')).toBe('پ')
  expect(dayjs('2026-01-15 09:30').locale('ug').format('h A')).toBe('9 چ.ب')
  expect(dayjs('2026-01-15 15:30').locale('ug').format('h A')).toBe('3 چ.ك')
})

it('relative time in Uyghur', () => {
  const cases = [
    [1, 's', 'نەچچە سېكونت كېيىن', 'نەچچە سېكونت'],
    [-1, 's', 'نەچچە سېكونت بۇرۇن', 'نەچچە سېكونت'],
    [1, 'm', 'بىر مىنۇت كېيىن', 'بىر مىنۇت'],
    [-1, 'm', 'بىر مىنۇت بۇرۇن', 'بىر مىنۇت'],
    [2, 'm', '2 مىنۇت كېيىن', '2 مىنۇت'],
    [1, 'h', 'بىر سائەت كېيىن', 'بىر سائەت'],
    [-3, 'h', '3 سائەت بۇرۇن', '3 سائەت'],
    [1, 'd', 'بىر كۈن كېيىن', 'بىر كۈن'],
    [-5, 'd', '5 كۈن بۇرۇن', '5 كۈن'],
    [1, 'M', 'بىر ئاي كېيىن', 'بىر ئاي'],
    [-2, 'M', '2 ئاي بۇرۇن', '2 ئاي'],
    [1, 'y', 'بىر يىل كېيىن', 'بىر يىل'],
    [-3, 'y', '3 يىل بۇرۇن', '3 يىل']
  ]
  cases.forEach(([amount, unit, withSuffix, withoutSuffix]) => {
    expect(dayjs().add(amount, unit).locale('ug').fromNow()).toBe(withSuffix)
    expect(dayjs().add(amount, unit).locale('ug').fromNow(true)).toBe(withoutSuffix)
  })
})
