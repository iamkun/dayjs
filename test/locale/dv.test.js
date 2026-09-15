import MockDate from 'mockdate'
import dayjs from '../../src'
import '../../src/locale/dv'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Maldivian week starts on Sunday (weekStart must be within 0..6)', () => {
  const { weekStart } = dayjs().locale('dv').$locale()
  expect(weekStart).toBe(0)

  // every day of the week belongs to a week that starts on Sunday
  for (let i = 0; i < 7; i += 1) {
    const day = dayjs('2024-06-16').add(i, 'day') // 2024-06-16 is a Sunday
    expect(day.locale('dv').startOf('week').day()).toBe(0)
    expect(day.locale('dv').endOf('week').day()).toBe(6)
  }
})

it('Sunday itself is the first day of its week in dv locale', () => {
  const sunday = dayjs('2024-06-16').locale('dv')
  expect(sunday.startOf('week').format('YYYY-MM-DD')).toBe('2024-06-16')
  expect(sunday.endOf('week').format('YYYY-MM-DD')).toBe('2024-06-22')
})
