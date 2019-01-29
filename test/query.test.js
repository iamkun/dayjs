import MockDate from 'mockdate'
import dayjs from '../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})


describe('Is Before Is After Is Same', () => {
  it('Compare to dayjs object', () => {
    const dayA = dayjs()
    const dayB = dayA.clone().add(1, 'day')
    const dayC = dayA.clone().subtract(1, 'day')
    expect(dayC.isBefore(dayA)).toBe(true)
    expect(dayA.isSame(dayjs())).toBe(true)
    expect(dayB.isAfter(dayA)).toBe(true)
    expect(dayA.isSame()).toBe(true)
    expect(dayB.isAfter()).toBe(true)
    expect(dayC.isBefore()).toBe(true)
  })

  it('No value', () => {
    const dayA = dayjs()
    const dayB = dayA.clone().add(1, 'day')
    const dayC = dayA.clone().subtract(1, 'day')
    expect(dayA.isSame()).toBe(true)
    expect(dayB.isAfter()).toBe(true)
    expect(dayC.isBefore()).toBe(true)
  })

  it('With string', () => {
    const dayD = dayjs()
    expect(dayD.isSame('20180101')).toBe(false)
    expect(dayD.isAfter('20180101')).toBe(true)
    expect(dayD.isBefore('20180101')).toBe(false)
  })
})
