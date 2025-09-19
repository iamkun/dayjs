import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import '../../src/locale/be'
import relativeTime from '../../src/plugin/relativeTime'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Belarusian locale relative time in past and future with suffix', () => {
  const cases = [
    [1, 's', 'праз некалькі секунд'],
    [-1, 's', 'некалькі секунд таму'],
    [1, 'm', 'праз хвіліну'],
    [-1, 'm', 'хвіліну таму'],
    [1, 'h', 'праз гадзіну'],
    [-1, 'h', 'гадзіну таму'],
    [1, 'd', 'праз дзень'],
    [-1, 'd', 'дзень таму'],
    [1, 'M', 'праз месяц'],
    [-1, 'M', 'месяц таму'],
    [2, 'd', 'праз 2 дні'],
    [-2, 'd', '2 дні таму'],
    [10, 'd', 'праз 10 дзён'],
    [-10, 'd', '10 дзён таму'],
    [6, 'm', 'праз 6 хвілін'],
    [-6, 'm', '6 хвілін таму'],
    [5, 'h', 'праз 5 гадзін'],
    [-5, 'h', '5 гадзін таму'],
    [3, 'M', 'праз 3 месяцы'],
    [-3, 'M', '3 месяцы таму'],
    [4, 'y', 'праз 4 гады'],
    [-4, 'y', '4 гады таму']
  ]

  const locales = ['be']
  locales.forEach((locale) => {
    cases.forEach((c) => {
      expect(dayjs()
        .add(c[0], c[1])
        .locale(locale)
        .fromNow()).toBe(c[2])
      expect(dayjs()
        .add(c[0], c[1])
        .locale(locale)
        .fromNow()).toBe(moment()
        .add(c[0], c[1])
        .locale(locale)
        .fromNow())
    })
  })
})

it('Belarusian locale relative time in past and future without suffix', () => {
  const cases = [
    [1, 's', 'некалькі секунд'],
    [-1, 's', 'некалькі секунд'],

    [1, 'm', 'хвіліна'],
    [-1, 'm', 'хвіліна'],
    [1, 'h', 'гадзіна'],
    [-1, 'h', 'гадзіна'],

    // Test all plural forms for days
    [1, 'd', 'дзень'],
    [21, 'd', '21 дзень'],
    [31, 'd', 'месяц'],
    // 2-4 form
    [2, 'd', '2 дні'],
    [3, 'd', '3 дні'],
    [4, 'd', '4 дні'],
    // 5-20 and other cases
    [5, 'd', '5 дзён'],
    [6, 'd', '6 дзён'],
    // 11-14 special case
    [11, 'd', '11 дзён'],
    [12, 'd', '12 дзён'],
    [13, 'd', '13 дзён'],
    [14, 'd', '14 дзён'],
    // 22-24
    [22, 'd', '22 дні'],
    [23, 'd', '23 дні'],
    [24, 'd', '24 дні'],

    // Test all plural forms for months
    [1, 'M', 'месяц'],
    [2, 'M', '2 месяцы'],
    [5, 'M', '5 месяцаў'],

    // Test all plural forms for years
    [1, 'y', 'год'],
    [2, 'y', '2 гады'],
    [5, 'y', '5 гадоў'],
    [11, 'y', '11 гадоў'],
    [21, 'y', '21 год']
  ]

  const locales = ['be']
  locales.forEach((locale) => {
    cases.forEach((c) => {
      expect(dayjs()
        .add(c[0], c[1])
        .locale(locale)
        .fromNow(true)).toBe(c[2])
      expect(dayjs()
        .add(c[0], c[1])
        .locale(locale)
        .fromNow(true)).toBe(moment()
        .add(c[0], c[1])
        .locale(locale)
        .fromNow(true))
    })
  })
})

it('Belarusian locale formats dates with correct month forms', () => {
  const tests = [
    // Full month names
    { date: '2022-01-19', format: 'dd, D MMMM YYYY г.', expected: 'ср, 19 студзеня 2022 г.' },
    { date: '2022-01-01', format: 'MMMM', expected: 'студзень' },

    // Short month names in format form (with day)
    { date: '2022-01-15', format: 'D MMM', expected: '15 студ' },
    { date: '2022-02-15', format: 'D MMM', expected: '15 лют' },

    // Short month names in standalone form
    { date: '2022-01-01', format: 'MMM', expected: 'студ' },
    { date: '2022-02-01', format: 'MMM', expected: 'лют' }
  ]

  tests.forEach(({ date, format, expected }) => {
    const dayjsWithLocale = dayjs(date).locale('be')
    expect(dayjsWithLocale.format(format)).toEqual(expected)
  })
})
