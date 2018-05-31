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

describe('Is Before Is After Is Same', () => {
  it('Compare to dayjs object', () => {
    testArr.forEach((instance) => {
      const dayA = instance()
      const dayB = dayA.clone().add(1, 'day')
      const dayC = dayA.clone().subtract(1, 'day')
      expect(dayC.isBefore(dayA)).toBe(true)
      expect(dayA.isSame(instance())).toBe(true)
      expect(dayB.isAfter(dayA)).toBe(true)
      expect(dayA.isSame()).toBe(true)
      expect(dayB.isAfter()).toBe(true)
      expect(dayC.isBefore()).toBe(true)
    })
  })

  it('No value', () => {
    testArr.forEach((instance) => {
      const dayA = instance()
      const dayB = dayA.clone().add(1, 'day')
      const dayC = dayA.clone().subtract(1, 'day')
      expect(dayA.isSame()).toBe(true)
      expect(dayB.isAfter()).toBe(true)
      expect(dayC.isBefore()).toBe(true)
    })
  })

  it('With string', () => {
    testArr.forEach((instance) => {
      const dayD = instance()
      expect(dayD.isSame('20180101')).toBe(false)
      expect(dayD.isAfter('20180101')).toBe(true)
      expect(dayD.isBefore('20180101')).toBe(false)
    })
  })
})
