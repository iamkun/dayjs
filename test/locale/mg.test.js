import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import calendar from '../../src/plugin/calendar'
import '../../src/locale/mg'

dayjs.extend(relativeTime)
dayjs.extend(calendar)

beforeEach(() => {
  MockDate.set(new Date('2022-01-19T12:00:00'))
})

afterEach(() => {
  MockDate.reset()
})

it('Malagasy locale relative time in past and future with suffix', () => {
  const cases = [
    [1, 's', 'afaka segondra vitsy'],
    [-1, 's', 'segondra vitsy lasa'],
    [1, 'm', 'afaka iray minitra'],
    [-1, 'm', 'iray minitra lasa'],
    [1, 'h', 'afaka ora iray'],
    [-1, 'h', 'ora iray lasa'],
    [1, 'd', 'afaka iray andro'],
    [-1, 'd', 'iray andro lasa'],
    [2, 'd', 'afaka 2 andro'],
    [-2, 'd', '2 andro lasa'],
    [10, 'd', 'afaka 10 andro'],
    [-10, 'd', '10 andro lasa'],
    [6, 'm', 'afaka 6 minitra'],
    [-6, 'm', '6 minitra lasa'],
    [5, 'h', 'afaka 5 ora'],
    [-5, 'h', '5 ora lasa'],
    [3, 'M', 'afaka 3 volana'],
    [-3, 'M', '3 volana lasa'],
    [4, 'y', 'afaka 4 taona'],
    [-4, 'y', '4 taona lasa']
  ]

  cases.forEach(([amount, unit, expected]) => {
    expect(dayjs()
      .add(amount, unit)
      .locale('mg')
      .fromNow()).toBe(expected)
  })
})

it('Malagasy locale relative time in past and future without suffix', () => {
  const cases = [
    [1, 's', 'segondra vitsy'],
    [-1, 's', 'segondra vitsy'],
    [1, 'm', 'iray minitra'],
    [-1, 'm', 'iray minitra'],
    [1, 'h', 'ora iray'],
    [-1, 'h', 'ora iray'],
    [1, 'd', 'iray andro'],
    [-1, 'd', 'iray andro'],
    [2, 'd', '2 andro'],
    [-2, 'd', '2 andro'],
    [10, 'd', '10 andro'],
    [-10, 'd', '10 andro'],
    [6, 'm', '6 minitra'],
    [-6, 'm', '6 minitra'],
    [5, 'h', '5 ora'],
    [-5, 'h', '5 ora'],
    [3, 'M', '3 volana'],
    [-3, 'M', '3 volana'],
    [4, 'y', '4 taona'],
    [-4, 'y', '4 taona']
  ]

  cases.forEach(([amount, unit, expected]) => {
    expect(dayjs()
      .add(amount, unit)
      .locale('mg')
      .fromNow(true)).toBe(expected)
  })
})

it('Malagasy locale calendar format', () => {
  const base = dayjs('2022-01-19T12:00:00')
  const cases = [
    { diff: -1, unit: 'd', expected: "Omaly tamin'ny 12:00" },
    { diff: 0, unit: 'd', expected: "Anio amin'ny 12:00" },
    { diff: 1, unit: 'd', expected: "Rahampitso amin'ny 12:00" }
  ]

  cases.forEach(({ diff, unit, expected }) => {
    const result = base
      .add(diff, unit)
      .locale('mg')
      .calendar(base)
    expect(result).toBe(expected)
  })
})

it('Malagasy locale long date format (DD/MM/YYYY)', () => {
  const date = dayjs('2022-01-19')
  const expected = '19/01/2022'
  expect(date.locale('mg').format('DD/MM/YYYY')).toBe(expected)
})

it('Malagasy locale weekday and month name', () => {
  const date = dayjs('2022-01-19') // alarobia

  const expectedWeekday = 'alarobia'
  const expectedShortWeekday = 'lrb.'
  const expectedMonth = 'janoary'

  const d = date.locale('mg')
  expect(d.format('dddd')).toBe(expectedWeekday)
  expect(d.format('ddd')).toBe(expectedShortWeekday)
  expect(d.format('MMMM')).toBe(expectedMonth)
})
