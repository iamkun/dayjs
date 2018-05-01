import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

const testArr = [dayjs, moment]

it('IsLeapYear', () => {
  expect(dayjs('20000101').isLeapYear()).toBe(true)
  expect(dayjs('2100-01-01').isLeapYear()).toBe(false)
})

it('Is Before Is After Is Same', () => {
  testArr.forEach((instance) => {
    const dayA = instance()
    const dayB = dayA.clone().add(1, 'day')
    const dayC = dayA.clone().subtract(1, 'day')
    expect(dayC.isBefore(dayA)).toBe(true)
    expect(dayC.isBefore(Date.now() + 1)).toBe(true)
    expect(dayA.isSame(instance())).toBe(true)
    expect(dayA.isSame(Date.now())).toBe(true)
    expect(dayB.isAfter(dayA)).toBe(true)
    expect(dayB.isAfter(Date.now() - 1)).toBe(true)
  })
})
