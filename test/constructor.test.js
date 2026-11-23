import MockDate from 'mockdate'
import dayjs from '../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('supports instanceof dayjs', () => {
  expect(dayjs() instanceof dayjs).toBeTruthy()
})

it('$isDayjsObject', () => {
  const mockOtherVersionDayjsObj = {
    $isDayjsObject: true
  }
  expect(dayjs.isDayjs(mockOtherVersionDayjsObj)).toBeTruthy()
})

it('does not break isDayjs', () => {
  expect(dayjs.isDayjs(dayjs())).toBeTruthy()
  expect(dayjs.isDayjs(new Date())).toBeFalsy()
})

it('dayjs() with no argument returns current date and is valid', () => {
  expect(dayjs().isValid()).toBe(true)
})

it('dayjs(undefined) returns Invalid Date', () => {
  expect(dayjs(undefined).isValid()).toBe(false)
  expect(dayjs(undefined).format()).toBe('Invalid Date')
})

it('dayjs(null) returns Invalid Date', () => {
  expect(dayjs(null).isValid()).toBe(false)
  expect(dayjs(null).format()).toBe('Invalid Date')
})

it('dayjs("") returns Invalid Date', () => {
  expect(dayjs('').isValid()).toBe(false)
  expect(dayjs('').format()).toBe('Invalid Date')
})

