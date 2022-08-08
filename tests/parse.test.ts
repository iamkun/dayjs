import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import dayjs from '../src'
import { REGEX_PARSE } from '../src/constants'
import { expectSameResult } from './_util'

describe('Parse', () => {
  beforeEach(() => {
    vi.setSystemTime(new Date())
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('Now', () => {
    expectSameResult((dayjs) => dayjs())
  })

  it('moment-js like formatted dates', () => {
    global.console.warn = vi.fn() // moment.js '2018-4-1 1:1:1:22' will throw warn

    let d = '20130108'
    expectSameResult((dayjs) => dayjs(d))

    d = '2018-04-24'
    expectSameResult((dayjs) => dayjs(d))

    d = '2018-04-24 11:12'
    expectSameResult((dayjs) => dayjs(d))

    d = '2018-05-02 11:12:13'
    expectSameResult((dayjs) => dayjs(d))

    d = '2018-05-02 11:12:13.998'
    expectSameResult((dayjs) => dayjs(d))

    d = '2018-4-1'
    expectSameResult((dayjs) => dayjs(d))

    d = '2018-4-1 11:12'
    expectSameResult((dayjs) => dayjs(d))

    d = '2018-4-1 1:1:1:223'
    expectSameResult((dayjs) => dayjs(d))

    d = '2018-01' // not recommend
    expectSameResult((dayjs) => dayjs(d))

    d = '2018' // not recommend
    expectSameResult((dayjs) => dayjs(d))

    d = '2018-05-02T11:12:13Z' // should go direct to new Date() rather our regex
    expectSameResult((dayjs) => dayjs(d))
  })

  it('String ISO 8601 date, time and zone', () => {
    const time = '2018-04-04T16:00:00.000Z'
    expectSameResult((dayjs) => dayjs(time))
  })

  it('String RFC 2822, time and zone', () => {
    const time = 'Mon, 11 Feb 2019 09:46:50 GMT+1'
    expectSameResult((dayjs) => dayjs(time))
  })

  it('String ECMAScript, time and zone', () => {
    // should parse dates formatted in ECMA script format
    // see https://www.ecma-international.org/ecma-262/9.0/index.html#sec-date.prototype.tostring
    const time =
      'Mon Feb 11 2019 11:01:37 GMT+0100 (Mitteleuropäische Normalzeit)'
    expectSameResult((dayjs) => dayjs(time))
  })

  it('rejects invalid values', () => {
    expectSameResult((dayjs) => dayjs({}))
    expectSameResult((dayjs) => dayjs(() => '2018-01-01'))
    expectSameResult((dayjs) => dayjs(Number.POSITIVE_INFINITY))
    expectSameResult((dayjs) => dayjs(Number.NaN))
    expectSameResult((dayjs) => dayjs([2018, 5, 1, 13, 52, 44])) // Arrays with time part
  })

  it('parses Arrays with date part', () => {
    expectSameResult((dayjs) => {
      const d = dayjs([2018, 5, 1])
      return d.add(d.utcOffset(), 'minutes')
    })
  })

  it('parses unlimited millisecond', () => {
    const date = '2019-03-25T06:41:00.999999999'
    expectSameResult((dayjs) => dayjs(date))
  })

  it('String Other, Undefined and Null and isValid', () => {
    const oldConsoleWarn = global.console.warn
    global.console.warn = vi.fn() // moment.js otherString will throw warn

    expectSameResult((dayjs) => dayjs('otherString'))
    expectSameResult((dayjs) => dayjs(undefined))
    expectSameResult((dayjs) => dayjs(null))

    global.console.warn = oldConsoleWarn

    expect(dayjs('').isValid()).toBe(false)
  })

  it('Unix Timestamp Number (milliseconds) 1523520536000', () => {
    const timestamp = 1523520536000
    expectSameResult((dayjs) => dayjs(timestamp))
  })

  it('Unix Timestamp Number (seconds) 1318781876', () => {
    const timestamp1 = 1318781876
    const timestamp2 = 1318781876.721
    expectSameResult((dayjs) => dayjs.unix(timestamp1))
    expectSameResult((dayjs) => dayjs.unix(timestamp2))
  })

  it('String and Number 20180101', () => {
    expectSameResult((dayjs) => dayjs(20180101))
    expectSameResult((dayjs) => dayjs('20180101'))
  })

  it('Number 0', () => {
    expectSameResult((dayjs) => dayjs(0))
  })
})

it('should parse from Date object', () => {
  expectSameResult((dayjs) => dayjs(new Date('2001-04-05')))
})

it('should parse from Dayjs instance', () => {
  expectSameResult((dayjs) => dayjs(dayjs()))
})

it('Clone not affect each other', () => {
  const base = dayjs(20170101)
  const year = base.year()
  const another = base.set('year', year + 1)
  expect(base.unix()).toBe(20170)
  expect(another.unix()).toBe(31556170)
})

it('Clone with same value', () => {
  const base = dayjs()
  const year = base.year()
  const newBase = base.set('year', year + 1)
  const another = newBase.clone()
  expect(newBase.toString()).toBe(another.toString())
})

describe('REGEX_PARSE', () => {
  it('2020/9/30', () => {
    const date = '2020/9/30'
    const d = date.match(REGEX_PARSE)!
    expectSameResult((dayjs) => dayjs(date))
    expect(d.join('-')).toBe('2020/9/30-2020-9-30----')
  })

  it('2019-03-25T06:41:00.999999999', () => {
    const date = '2019-03-25T06:41:00.999999999'
    const d = date.match(REGEX_PARSE)!
    expectSameResult((dayjs) => dayjs(date))
    expect(d.join('-')).toBe(
      '2019-03-25T06:41:00.999999999-2019-03-25-06-41-00-999999999'
    )
  })

  it('20210102T012345', () => {
    const date = '20210102T012345'
    const d = date.match(REGEX_PARSE)!
    expectSameResult((dayjs) => dayjs(date))
    expect(d.join('-')).toBe('20210102T012345-2021-01-02-01-23-45-')
  })

  it('2021-01-02T01:23', () => {
    const date = '2021-01-02T01:23'
    const d = date.match(REGEX_PARSE)!
    expectSameResult((dayjs) => dayjs(date))
    expect(d.join('-')).toBe('2021-01-02T01:23-2021-01-02-01-23--')
  })

  it('2021-01-02T01:23:45', () => {
    const date = '2021-01-02T01:23:45'
    const d = date.match(REGEX_PARSE)!
    expectSameResult((dayjs) => dayjs(date))
    expect(d.join('-')).toBe('2021-01-02T01:23:45-2021-01-02-01-23-45-')
  })

  it('2020-12-31T18:00:00.000-0500 (no regex match)', () => {
    const date = '2020-12-31T18:00:00.000-0500'
    const d = date.match(REGEX_PARSE)
    expectSameResult((dayjs) => dayjs(date))
    expect(d).toBe(null)
  })

  // format used in timezone plugin utcString
  it('2021-1-4 0:42:53:000', () => {
    const date = '2021-1-4 0:42:53:000'
    const d = date.match(REGEX_PARSE)!
    expectSameResult((dayjs) => dayjs(date))
    expect(d.join('-')).toBe('2021-1-4 0:42:53:000-2021-1-4-0-42-53-000')
  })

  it('2020-12-31T18:00:00-05:00 (no regex match)', () => {
    const date = '2020-12-31T18:00:00-05:00'
    const d = date.match(REGEX_PARSE)
    expectSameResult((dayjs) => dayjs(date))
    expect(d).toBe(null)
  })

  it('2021-01-02T01:23:45-0500 (no regex match)', () => {
    const date = '2021-01-02T01:23:45-0500'
    const d = date.match(REGEX_PARSE)
    expectSameResult((dayjs) => dayjs(date))
    expect(d).toBe(null)
  })
  it('2021-01-02T01:23:45Z (no regex match)', () => {
    const date = '2021-01-02T01:23:45Z'
    const d = date.match(REGEX_PARSE)
    expectSameResult((dayjs) => dayjs(date))
    expect(d).toBe(null)
  })

  // dots should not be matched, and fallback to Date
  it('2021.01.03', () => {
    const date = '2021.01.03'
    const d = date.match(REGEX_PARSE)
    expectSameResult((dayjs) => dayjs(date))
    expect(d).toBe(null)
  })
})