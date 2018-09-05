import MockDate from 'mockdate'
import dayjs from '../../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Returns false by default', () => {
  const instance = dayjs()
  expect(instance.isUTC()).toBeFalsy()
})

it('Returns true for UTC instances', () => {
  const instance = dayjs(undefined, { utc: true })
  expect(instance.isUTC()).toBeTruthy()
})
