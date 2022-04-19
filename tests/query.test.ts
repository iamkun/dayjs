import dayjs from '../src'
import { describe, it, expect, vi } from 'vitest'

describe('Is Before Is After Is Same', () => {
  const now = new Date()
  const dayA = dayjs(now)
  const dayB = dayA.clone().add(1, 'day')
  const dayC = dayA.clone().subtract(1, 'day')

  it('Compare to dayjs object', () => {
    vi.setSystemTime(now)
    expect(dayA.isSame(dayjs())).toBe(true)
    expect(dayA.isSame()).toBe(true)
    vi.useRealTimers()

    expect(dayB.isAfter(dayA)).toBe(true)
    expect(dayB.isAfter()).toBe(true)

    expect(dayC.isBefore(dayA)).toBe(true)
    expect(dayC.isBefore()).toBe(true)
  })

  it('No value', () => {
    vi.setSystemTime(now)
    expect(dayA.isSame()).toBe(true)
    vi.useRealTimers()

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
