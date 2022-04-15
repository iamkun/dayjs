import MockDate from 'mockdate'
import dayjs from '../../src'
import monthsOneIndexed from '../../src/plugin/monthsOneIndexed'

dayjs.extend(monthsOneIndexed)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('is correct month', () => {
  for (let i = 1; i <= 12; i += 1) {
    expect(dayjs().month(i).format('M')).toBe(i.toString())
  }
})

it('returns correct month', () => {
  expect(dayjs().month()).toBeGreaterThanOrEqual(1)
  expect(dayjs().month()).toBeLessThanOrEqual(12)
})
