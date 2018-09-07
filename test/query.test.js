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

describe('isBefore| isAfter| isSame | isSameOrBefore | isSameOrAfter', () => {
  it('Compare to dayjs object', () => {
    testArr.forEach((instance) => {
      const dayNow = instance()
      const dayAfter = dayNow.clone().add(1, 'day')
      const dayBefore = dayNow.clone().subtract(1, 'day')
      const daySame = dayNow.clone()
      expect(dayBefore.isBefore(dayNow)).toBe(true)
      expect(dayNow.isSame(instance())).toBe(true)
      expect(dayAfter.isAfter(dayNow)).toBe(true)
      expect(dayBefore.isSameOrBefore(dayNow)).toBe(true)
      expect(daySame.isSameOrBefore(dayNow)).toBe(true)
      expect(dayAfter.isSameOrAfter(dayNow)).toBe(true)
      expect(daySame.isSameOrAfter(dayNow)).toBe(true)
    })
  })

  it('Compare to dayjs object with default value', () => {
    testArr.forEach((instance) => {
      const dayNow = instance()
      const dayAfter = dayNow.clone().add(1, 'day')
      const dayBefore = dayNow.clone().subtract(1, 'day')
      const daySame = dayNow.clone()
      expect(dayNow.isSame()).toBe(true)
      expect(dayAfter.isAfter()).toBe(true)
      expect(dayBefore.isBefore()).toBe(true)
      expect(dayBefore.isSameOrBefore()).toBe(true)
      expect(daySame.isSameOrBefore()).toBe(true)
      expect(dayAfter.isSameOrAfter()).toBe(true)
      expect(daySame.isSameOrAfter()).toBe(true)
    })
  })

  it('With string', () => {
    testArr.forEach((instance) => {
      const dayD = instance()
      expect(dayD.isSame('20180101')).toBe(false)
      expect(dayD.isAfter('20180101')).toBe(true)
      expect(dayD.isBefore('20180101')).toBe(false)
      expect(dayD.isSameOrBefore('20180101')).toBe(false)
      expect(dayD.isSameOrAfter('20180101')).toBe(true)
    })
  })
})
