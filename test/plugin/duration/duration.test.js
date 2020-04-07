import MockDate from 'mockdate'
import dayjs from '../../../src'
import duration from '../../../src/plugin/duration'

dayjs.extend(duration)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Is duration', () => {
  expect(dayjs.isDuration(dayjs.duration(1))).toBe(true)
  expect(dayjs.isDuration({})).toBe(false)
})
