import moment from 'moment'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import dayjs from '../../src'

import toArray from '../../src/plugin/toArray'

dayjs.extend(toArray)

describe('Plugin toArray', () => {
  beforeEach(() => {
    vi.setSystemTime(new Date())
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('converts date to identical array as moment', () => {
    expect(dayjs().toArray()).toEqual(moment().toArray())
  })
})
