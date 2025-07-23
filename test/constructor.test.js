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
