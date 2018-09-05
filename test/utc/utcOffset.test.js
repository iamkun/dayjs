import MockDate from 'mockdate'
import dayjs from '../../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Returns the UTC offset for local instances', () => {
  const instance = dayjs('2018-09-06T19:34:28.657Z')
  const date = instance.toDate()
  expect(instance.utcOffset()).toEqual(date.getTimezoneOffset())
})

it('Returns zero for UTC instances', () => {
  const instance = dayjs(undefined, { utc: true })
  expect(instance.utcOffset()).toEqual(0)
})
