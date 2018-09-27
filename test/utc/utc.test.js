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
  const utc = instance.utc()
  expect(utc).not.toBe(instance)
})

it('Returns an UTC instance', () => {
  const instance = dayjs('2018-09-06T19:34:28.657Z').utc()
  expect(instance.$u).toBeTruthy()
  expect(instance.hour()).toEqual(19)
  expect(instance.minute()).toEqual(34)
})

it('Static method creates an UTC instance', () => {
  const instance = dayjs.utc('2018-09-06T19:34:28.657Z')
  expect(instance.$u).toBeTruthy()
  expect(instance.hour()).toEqual(19)
  expect(instance.minute()).toEqual(34)
})
