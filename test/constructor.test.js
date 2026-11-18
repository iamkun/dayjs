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

describe('disallowLenient configuration', () => {
  it('isValid should return false for invalid days using default ISO format', () => {
    const invalidDate = dayjs('2022-03-35T10:30:00', {
      disallowLenient: true
    })
    expect(invalidDate.isValid()).toBeFalsy()
  })

  it('isValid should return false for invalid month using default ISO format', () => {
    const invalidDate = dayjs('2022-13-20T10:30:00', {
      disallowLenient: true
    })
    expect(invalidDate.isValid()).toBeFalsy()
  })

  it('isValid should return true for valid days using default ISO format', () => {
    const validDate = dayjs('2022-03-25T10:30:00', {
      disallowLenient: true
    })
    expect(validDate.isValid()).toBeTruthy()
  })
})
