import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/ru'
import locale from '../../src/locale/ar-ma'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Meridiem', () => {
  dayjs.locale(locale)
  expect(dayjs('2020-01-01 03:00:00').locale('ar-ma').format('A')).toEqual('ص')
  expect(dayjs('2020-01-01 11:00:00').locale('ar-ma').format('A')).toEqual('ص')
  expect(dayjs('2020-01-01 16:00:00').locale('ar-ma').format('A')).toEqual('م')
  expect(dayjs('2020-01-01 20:00:00').locale('ar-ma').format('A')).toEqual('م')
})

it('weekStart should be Monday (1)', () => {
  expect(locale.weekStart).toBe(1)
})

it('Week starts on Monday', () => {
  // 2024-01-01 is a Monday
  const monday = dayjs('2024-01-01').locale('ar-ma')
  // startOf('week') on a Monday should return the same day
  expect(monday.startOf('week').format('YYYY-MM-DD')).toBe('2024-01-01')

  // 2024-01-05 is a Friday — startOf('week') should go back to Monday Jan 1
  const friday = dayjs('2024-01-05').locale('ar-ma')
  expect(friday.startOf('week').format('YYYY-MM-DD')).toBe('2024-01-01')

  // endOf('week') on Monday should be Sunday
  expect(monday.endOf('week').format('YYYY-MM-DD')).toBe('2024-01-07')
})
