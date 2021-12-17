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
  for (let i = 1; i <= 12; i++) {
    expect(dayjs().month(i).format('M')).toBe(i.toString())
  }
})
