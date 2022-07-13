import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import dayjs from '../../src'

import isYesterday from '../../src/plugin/isYesterday'

dayjs.extend(isYesterday)

describe('Plugin isYesterday', () => {
  beforeEach(() => {
    vi.setSystemTime(new Date())
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows that date is yesterday', () => {
    const testDate = dayjs().subtract(1, 'day')
    expect(testDate.isYesterday()).toBeTruthy()
  })

  it('shows that date is not yesterday', () => {
    const testDate = dayjs('2017-01-01')
    expect(testDate.isYesterday()).toBeFalsy()
  })
})
