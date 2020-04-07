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

it('Duration', () => {
  expect(true).toBe(true)
})
