import MockDate from 'mockdate'
import dayjs from '../../src'
import range from '../../src/plugin/range'

dayjs.extend(range)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('range isRange', () => {
  expect(dayjs.range('2021-07-15 19:01:00', null).isRange()).toBe(false)
  expect(dayjs.range('2021-07-15 19:01:00', '2021-07-16 10:00:00').isRange()).toBe(true)
})
