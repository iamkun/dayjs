import MockDate from 'mockdate'
import dayjs from '../../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Returns a new instance', () => {
  const instance = dayjs('2018-09-06T19:34:28.657Z')
  const local = instance.local()
  expect(local).not.toBe(instance)
})

it('Returns a local instance', () => {
  const instance = dayjs('2018-09-06 19:34:28.657').local()
  expect(instance.$u).toBeFalsy()
  expect(instance.hour()).toEqual(19)
  expect(instance.minute()).toEqual(34)
})
