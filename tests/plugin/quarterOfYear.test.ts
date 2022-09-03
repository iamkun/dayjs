import { afterEach, beforeEach, describe, test, vi } from 'vitest'
import dayjs from '../../src'
import { expectSame } from '../_util'

import quarterOfYear from '../../src/plugin/quarterOfYear'

dayjs.extend(quarterOfYear)

describe('Plugin QuarterOfYear', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date())
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test.each([
    '2013-01-01T00:00:00.000',
    '2013-04-01T00:00:00.000',
    '2013-07-01T00:00:00.000',
    '2013-10-01T00:00:00.000',
  ])('gets quarter from a date for "%s"', (dateString) => {
    expectSame((dayjs) => dayjs(dateString).quarter())
  })

  test.each([
    '2013-04-01T00:00:00.001',
    '2013-07-01T00:00:00.001',
    '2013-10-01T00:00:00.001',
    '2014-01-01T00:00:00.001',
  ])('gets quarter for previous day for "%s"', (dateString) => {
    expectSame((dayjs) => dayjs(dateString).subtract(1, 'ms').quarter())
  })

  test.each([
    '2013-01-01T00:00:00.000',
    '2013-05-06T05:06:07.000',
    '2013-08-21T08:00:00.000',
    '2018-11-25T05:06:07.000',
  ])('sets date to the quarter for "%s"', (dateString) => {
    expectSame((dayjs) => dayjs(dateString).quarter(2).format())
  })
})
