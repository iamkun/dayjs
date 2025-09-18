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
    [1, 'd', 'дзень'],
    [-1, 'd', 'дзень'],
    [2, 'd', '2 дні'],
    [-2, 'd', '2 дні'],
    [10, 'd', '10 дзён'],
    [-10, 'd', '10 дзён'],
    [6, 'm', '6 хвілін'],
    [-6, 'm', '6 хвілін'],
    [5, 'h', '5 гадзін'],
    [-5, 'h', '5 гадзін'],
    [3, 'M', '3 месяцы'],
    [-3, 'M', '3 месяцы'],
    [4, 'y', '4 гады'],
    [-4, 'y', '4 гады']
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

it('Belarusian locale uses region specific month name', () => {
  const locales = [
    { locale: 'be', expectedFormattedDate: 'ср, 19 студзеня 2022 г.' }
  ]

  locales.forEach((locale) => {
    const dayjsWithLocale = dayjs('2022-01-19').locale(locale.locale)
    expect(dayjsWithLocale.format('dd, D MMMM YYYY г.')).toEqual(locale.expectedFormattedDate)
  })
})
