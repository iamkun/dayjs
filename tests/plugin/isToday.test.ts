import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import dayjs from '../../src'

import isToday from '../../src/plugin/isToday'

dayjs.extend(isToday)

describe('Plugin isToday', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date())
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('shows that current date is today', () => {
    const testDate = dayjs()
    expect(testDate.isToday()).toBeTruthy()
  })

  test('shows that date is not today', () => {
    const testDate = dayjs('2017-01-01')
    expect(testDate.isToday()).toBeFalsy()
  })
})
