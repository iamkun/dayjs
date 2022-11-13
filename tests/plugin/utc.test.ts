import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { expectSame, expectSameResult } from '../_util'
import dayjs from '../../src'
import utc from '../../src/plugin/utc'

dayjs.extend(utc)

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date())
})

afterEach(() => {
  vi.useRealTimers()
})

describe('UTC Get', () => {
  test('long date string', () => {
    const date = dayjs('2021-02-03T12:13:14.543Z').utc().toString()
    expect(date.toString()).toBe('Wed, 03 Feb 2021 12:13:14 GMT')
  })

  test.each([
    '2021-02-03 12:13:14.543Z',
    '2021-06-21T01:02:03.456+01:00',
    '2021-11-13T15:26:37.890-0300',
  ])('converts date "%s" to utc', (dateString) => {
    expectSameResult((dayjs) => dayjs(dateString).utc())
  })

  test.each([
    '2021-02-03 12:13:14.543Z',
    '2021-06-21T01:02:03.456+01:00',
    '2021-11-13T15:26:37.890-0300',
  ])('converts "%s" to utc in strict mode', (dateString) => {
    expectSameResult((dayjs) => dayjs(dateString).utc(true))
  })

  test('UTC Year', () => {
    expectSame((dayjs) => dayjs.utc().year())
    expectSame((dayjs) => dayjs().utc().year())
  })

  test('UTC Month', () => {
    expectSame((dayjs) => dayjs.utc().month())
    expectSame((dayjs) => dayjs().utc().month())
  })

  test('UTC Day of Week', () => {
    expectSame((dayjs) => dayjs.utc().day())
    expectSame((dayjs) => dayjs().utc().day())
  })

  test('UTC Date', () => {
    expectSame((dayjs) => dayjs.utc().date())
    expectSame((dayjs) => dayjs().utc().date())
  })

  test('UTC Hour', () => {
    expectSame((dayjs) => dayjs.utc().hour())
    expectSame((dayjs) => dayjs().utc().hour())
  })

  test('UTC Minute', () => {
    expectSame((dayjs) => dayjs.utc().minute())
    expectSame((dayjs) => dayjs().utc().minute())
  })

  test('UTC Second', () => {
    expectSame((dayjs) => dayjs.utc().second())
    expectSame((dayjs) => dayjs().utc().second())
  })

  test('UTC Millisecond', () => {
    expectSame((dayjs) => dayjs.utc().millisecond())
    expectSame((dayjs) => dayjs().utc().millisecond())
  })
})

describe('UTC Set', () => {
  test('Set UTC Day', () => {
    expectSame((dayjs) => dayjs().utc().set('date', 30).valueOf())
  })

  test('Set UTC Day of Week', () => {
    expectSame((dayjs) => dayjs().utc().set('day', 0).valueOf())
  })

  test('Set UTC Month', () => {
    expectSame((dayjs) => dayjs().utc().set('month', 11).valueOf())
  })

  test('Set UTC Year', () => {
    expectSame((dayjs) => dayjs().utc().set('year', 2008).valueOf())
  })

  test('Set UTC Hour', () => {
    expectSame((dayjs) => dayjs().utc().set('hour', 6).valueOf())
  })

  test('Set UTC Minute', () => {
    expectSame((dayjs) => dayjs().utc().set('minute', 59).valueOf())
  })

  test('Set UTC Second', () => {
    expectSame((dayjs) => dayjs().utc().set('second', 59).valueOf())
  })

  test('Set UTC Millisecond', () => {
    expectSame((dayjs) => dayjs().utc().set('millisecond', 999).valueOf())
  })

  // the following tests are based on timezone 'CET'
  test('Set UTC Month - switching from DST', () => {
    expectSameResult((dayjs) =>
      dayjs('2022-10-15T14:15:16').utc().set('month', 11)
    )
  })

  test('Set UTC Month in months without DST', () => {
    expectSameResult((dayjs) =>
      dayjs('2022-11-15T14:15:16').utc().set('month', 11)
    )
  })

  test('Set UTC Month on day of end of DST', () => {
    expectSameResult((dayjs) =>
      dayjs('2022-10-30T14:15:16').utc().set('month', 11)
    )
  })

  test('Set UTC Month - switching to DST', () => {
    expectSameResult((dayjs) =>
      dayjs('2022-03-15T14:15:16').utc().set('month', 7)
    )
  })

  test('Set UTC Month in months with DST', () => {
    expectSameResult((dayjs) =>
      dayjs('2022-05-15T14:15:16').utc().set('month', 7)
    )
  })

  test('Set UTC Month on day of start of DST', () => {
    expectSameResult((dayjs) =>
      dayjs('2022-03-28T14:15:16').utc().set('month', 7)
    )
  })
})

describe('UTC Parse', () => {
  test('Parse Now', () => {
    expectSame((dayjs) => dayjs.utc().format())
    expectSame((dayjs) => dayjs().utc().format())
  })

  test.each([
    '2018-09-06',
    '2018-09',
    '2018',
    '2012-01-02T08:20:00',
    '2017-04-22 19:50:16',
    '2011-02-02T03:04:05+00:00',
    '2012-01-02T08:20:00+09:00',
    '2021-03-02T13:24:56-0700',
    '2018-09-06T19:34:28Z',
  ])('Parse date string "%s"', (dateString) => {
    expectSameResult((dayjs) => dayjs.utc(dateString))
    expectSameResult((dayjs) => dayjs(dateString).utc())
  })

  // The following test only runs with ISO strings (without the CustomParseFormat plugin)
  test('Parse date string with format', () => {
    const dateString = '2022-12-13T19:28:37'
    const formatString = 'YYYY-MM-DD[T]HH:mm:ss'
    expectSameResult((dayjs) => dayjs.utc(dateString, formatString))
  })

  // The following test only runs with ISO strings (without the CustomParseFormat plugin)
  test('Parse date string with format and strict', () => {
    const dateString = '2022-12-13T19:28:37'
    const formatString = 'YYYY-MM-DD[T]HH:mm:ss'
    expectSameResult((dayjs) => dayjs.utc(dateString, formatString, true))
  })

  test('Parse date string with strict in options', () => {
    const dateString = '2022-12-13T19:28:37'
    const dayjsObject = dayjs.utc(dateString, { strict: true })

    expect(dayjsObject.toISOString()).toBe('2022-12-13T19:28:37.000Z')
  })

  test.each(['2017-04-22 19:50:16', '2012-01-02T08:20:00'])(
    'Parse date string "%s" and set utc mode in options',
    (dateString) => {
      const dateUtcFromMethod = dayjs.utc(dateString)
      const dateUtcFromOption = dayjs(dateString, { utc: true })
      expect(dateUtcFromMethod.valueOf()).toBe(dateUtcFromOption.valueOf())
    }
  )

  test('parses unlimited millisecond in utc', () => {
    const dateString = '2019-03-25T06:41:00.999999999'
    expectSameResult((dayjs) => dayjs.utc(dateString))
    expectSame((dayjs) => dayjs.utc(dateString).millisecond())
  })
})

describe('UTC methods', () => {
  test('isUTC', () => {
    expect(dayjs().isUTC()).toBe(false)
    expect(dayjs().utc().isUTC()).toBe(true)
    expect(dayjs.utc().isUTC()).toBe(true)
  })

  test('clone', () => {
    const instance = dayjs('2018-09-06').utc()
    const another = instance.clone()
    expect(instance).not.toBe(another)
    expect(another.isUTC()).toBeTruthy()
  })

  test('toDate with utcOffset', () => {
    const dateString = '2018-09-06T15:12:34Z'
    expectSameResult((dayjs) => dayjs(dateString).utcOffset(5))
  })

  test('toDate with utcOffset in utc mode', () => {
    const dateString = '2018-09-06T15:12:34Z'
    expectSameResult((dayjs) => dayjs(dateString).utc().utcOffset(5))
    expectSame((dayjs) => dayjs(dateString).utc().utcOffset(5).toISOString())
  })

  test('toDate with utcOffset in utc mode with "keepLocalTime"', () => {
    const dateString = '2018-09-06T15:12:34Z'
    expectSameResult((dayjs) => dayjs(dateString).utc(true).utcOffset(5))
    expectSame((dayjs) =>
      dayjs(dateString).utc(true).utcOffset(5).toISOString()
    )
  })

  test('toDate with utcOffset with "keepLocalTime"', () => {
    const dateString = '2018-09-06T15:12:34Z'
    expectSameResult((dayjs) => dayjs(dateString).utcOffset(5, true))
    expectSame((dayjs) => dayjs(dateString).utcOffset(5, true).toISOString())
  })

  test('toDate with utcOffset with "keepLocalTime" in utc mode', () => {
    const dateString = '2018-09-06T15:12:34Z'
    expectSameResult((dayjs) => dayjs(dateString).utc().utcOffset(5))
    expectSame((dayjs) => dayjs(dateString).utc().utcOffset(5).toISOString())
  })

  test('toDate with utcOffset with "keepLocalTime" in utc mode with "keepLocalTime"', () => {
    const dateString = '2018-09-06T15:12:34Z'
    expectSameResult((dayjs) => dayjs(dateString).utc().utcOffset(5))
    expectSame((dayjs) => dayjs(dateString).utc().utcOffset(5).toISOString())
  })

  test('format with format string', () => {
    const dateString = '2018-09-06T19:34:28.657Z'
    const instance = dayjs(dateString).utc()
    const formatString = 'HH-hh-mm-ss-SSS-Z-ZZ'
    expect(instance.format(formatString)).toBe('19-07-34-28-657-+00:00-+0000')
    expectSame((dayjs) => dayjs.utc(dateString).format(formatString))
  })

  test('diff edge case "undefined"', () => {
    expect(dayjs.utc().diff(undefined, 'seconds')).toBeDefined()
  })

  test.each([
    'year',
    'month',
    'day',
    'date',
    'week',
    'hour',
    'minute',
    'second',
  ] as const)('get startOf "%s" for current date', (unit) => {
    expectSameResult((dayjs) => dayjs().utc().startOf(unit))
  })

  test.each([
    'year',
    'month',
    'day',
    'date',
    'week',
    'hour',
    'minute',
    'second',
  ] as const)('get endOf "%s" for current date', (unit) => {
    expectSameResult((dayjs) => dayjs().utc().endOf(unit))
  })
})

describe('UTC conversion', () => {
  test('converts Date object to utc', () => {
    const baseDate = dayjs(Date.UTC(2011, 1, 2, 3, 4, 5, 6))
    const baseDateAsUtc = baseDate.utc()
    expect(baseDateAsUtc.year()).toBe(2011)
    expect(baseDateAsUtc.month()).toBe(1)
    expect(baseDateAsUtc.date()).toBe(2)
    expect(baseDateAsUtc.hour()).toBe(3)
    expect(baseDateAsUtc.minute()).toBe(4)
    expect(baseDateAsUtc.second()).toBe(5)
    expect(baseDateAsUtc.millisecond()).toBe(6)
    expect(baseDateAsUtc.day()).toBe(3)
  })

  test('converts local date and time to utc', () => {
    const dateString = '2016-05-03 22:15:01+02:00'
    const baseDateAsUtc = dayjs(dateString).utc()
    expect(baseDateAsUtc.year()).toBe(2016)
    expect(baseDateAsUtc.month()).toBe(4)
    expect(baseDateAsUtc.date()).toBe(3)
    expect(baseDateAsUtc.day()).toBe(2)
    expect(baseDateAsUtc.hour()).toBe(20)
    expect(baseDateAsUtc.minute()).toBe(15)
    expect(baseDateAsUtc.second()).toBe(1)
    expectSameResult((dayjs) => dayjs(dateString).utc())
  })

  test('with "keepLocalTime" keeps local time', () => {
    const dateString = '2016-05-03 22:15:01+02:00'
    const baseDateAsUtc = dayjs(dateString).utc(true)
    expect(baseDateAsUtc.year()).toBe(2016)
    expect(baseDateAsUtc.month()).toBe(4)
    expect(baseDateAsUtc.date()).toBe(3)
    expect(baseDateAsUtc.day()).toBe(2)
    expect(baseDateAsUtc.hour()).toBe(22)
    expect(baseDateAsUtc.minute()).toBe(15)
    expect(baseDateAsUtc.second()).toBe(1)
    expectSameResult((dayjs) => dayjs(dateString).utc(true))
  })
})

describe('UTC local', () => {
  test('returns a new instance', () => {
    const instance = dayjs.utc('2018-09-06T19:34:28.657Z')
    expect(instance.local()).not.toBe(instance)
  })

  test('matches result of moment', () => {
    const dateString = '2018-09-06'
    expectSameResult((dayjs) => dayjs.utc(dateString).local())
  })

  test('creates correct date parts', () => {
    const baseDate = dayjs(Date.UTC(2011, 1, 2, 3, 4, 5, 6))
    const baseDateAsUtc = baseDate.utc()
    const localDateFromUtc = baseDateAsUtc.local()
    if (localDateFromUtc.utcOffset() < -180) {
      expect(localDateFromUtc.date()).toBe(1)
      expect(localDateFromUtc.day()).toBe(2)
    } else {
      expect(localDateFromUtc.date()).toBe(2)
      expect(localDateFromUtc.day()).toBe(3)
    }
  })

  test('creates correct utcOffset', () => {
    const baseDate = dayjs(Date.UTC(2011, 1, 2, 3, 4, 5, 6))
    const baseDateAsUtc = baseDate.utc()
    const localDateFromUtc = baseDateAsUtc.local()
    // const offset = Math.floor(localDateFromUtc.utcOffset() / 60)
    const offset = Math.floor(localDateFromUtc.utcOffset() / 60)
    const expected = (24 + 3 + offset) % 24

    expect(localDateFromUtc.hour()).toBe(expected)
    expect(dayjs().utc().utcOffset()).toBe(0)
  })
})

describe('UTC utcOffset', () => {
  const testData = [
    {
      dateString: '2021-02-28 19:40:10-03:00',
      utcKeepLT: false,
      offset: -8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10Z',
      utcKeepLT: false,
      offset: -8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10+02:00',
      utcKeepLT: false,
      offset: -8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10+11:00',
      utcKeepLT: false,
      offset: -8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10-03:00',
      utcKeepLT: true,
      offset: -8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10Z',
      utcKeepLT: true,
      offset: -8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10+02:00',
      utcKeepLT: true,
      offset: -8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10+11:00',
      utcKeepLT: true,
      offset: -8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10-03:00',
      utcKeepLT: false,
      offset: 0,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10Z',
      utcKeepLT: false,
      offset: 0,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10+02:00',
      utcKeepLT: false,
      offset: 0,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10+11:00',
      utcKeepLT: false,
      offset: 0,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10-03:00',
      utcKeepLT: true,
      offset: 0,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10Z',
      utcKeepLT: true,
      offset: 0,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10+02:00',
      utcKeepLT: true,
      offset: 0,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10+11:00',
      utcKeepLT: true,
      offset: 0,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10-03:00',
      utcKeepLT: false,
      offset: 8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10Z',
      utcKeepLT: false,
      offset: 8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10+02:00',
      utcKeepLT: false,
      offset: 8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10+11:00',
      utcKeepLT: false,
      offset: 8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10-03:00',
      utcKeepLT: true,
      offset: 8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10Z',
      utcKeepLT: true,
      offset: 8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10+02:00',
      utcKeepLT: true,
      offset: 8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10+11:00',
      utcKeepLT: true,
      offset: 8,
      utcOffsetKeepLT: false,
    },
    {
      dateString: '2021-02-28 19:40:10-03:00',
      utcKeepLT: false,
      offset: -8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10Z',
      utcKeepLT: false,
      offset: -8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10+02:00',
      utcKeepLT: false,
      offset: -8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10+11:00',
      utcKeepLT: false,
      offset: -8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10-03:00',
      utcKeepLT: true,
      offset: -8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10Z',
      utcKeepLT: true,
      offset: -8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10+02:00',
      utcKeepLT: true,
      offset: -8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10+11:00',
      utcKeepLT: true,
      offset: -8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10-03:00',
      utcKeepLT: false,
      offset: 0,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10Z',
      utcKeepLT: false,
      offset: 0,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10+02:00',
      utcKeepLT: false,
      offset: 0,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10+11:00',
      utcKeepLT: false,
      offset: 0,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10-03:00',
      utcKeepLT: true,
      offset: 0,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10Z',
      utcKeepLT: true,
      offset: 0,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10+02:00',
      utcKeepLT: true,
      offset: 0,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10+11:00',
      utcKeepLT: true,
      offset: 0,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10-03:00',
      utcKeepLT: false,
      offset: 8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10Z',
      utcKeepLT: false,
      offset: 8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10+02:00',
      utcKeepLT: false,
      offset: 8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10+11:00',
      utcKeepLT: false,
      offset: 8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10-03:00',
      utcKeepLT: true,
      offset: 8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10Z',
      utcKeepLT: true,
      offset: 8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10+02:00',
      utcKeepLT: true,
      offset: 8,
      utcOffsetKeepLT: true,
    },
    {
      dateString: '2021-02-28 19:40:10+11:00',
      utcKeepLT: true,
      offset: 8,
      utcOffsetKeepLT: true,
    },
  ]

  test.each([
    '2021-02-03 12:13:14.543Z',
    '2021-06-21T01:02:03.456+01:00',
    '2021-11-13T15:26:37.890-0300',
  ])('gets utcOffset of date "%s"', (dateString) => {
    expectSame((dayjs) => dayjs(dateString).utcOffset())
  })

  test.each([
    '2021-02-03 12:13:14.543Z',
    '2021-06-21T01:02:03.456+01:00',
    '2021-11-13T15:26:37.890-0300',
  ])('gets utcOffset of date in utc mode for "%s"', (dateString) => {
    expectSame((dayjs) => dayjs(dateString).utc().utcOffset())
  })

  test.each([
    '2021-02-03 12:13:14.543Z',
    '2021-06-21T01:02:03.456+01:00',
    '2021-11-13T15:26:37.890-0300',
  ])(
    'gets utcOffset of date in utc mode with "keepLocalTime" for "%s"',
    (dateString) => {
      expectSame((dayjs) => dayjs(dateString).utc(true).utcOffset())
    }
  )

  test.each(testData.filter((parameters) => !parameters.utcKeepLT))(
    'sets utc offset from "%o"',
    (testParameters) => {
      // hoursOffset < 16 -> is interpreted as hours
      expectSameResult((dayjs) =>
        dayjs(testParameters.dateString).utcOffset(
          testParameters.offset,
          testParameters.utcOffsetKeepLT
        )
      )
    }
  )

  test.each(testData)(
    'sets utc offset in utc mode from "%o"',
    (testParameters) => {
      // hoursOffset < 16 -> is interpreted as hours
      expectSameResult((dayjs) =>
        dayjs(testParameters.dateString).utcOffset(
          testParameters.offset,
          testParameters.utcOffsetKeepLT
        )
      )
    }
  )

  test('sets utc offset with "keepLocalTime" with a positive valid string value in utc mode with "keepLocalTime", format: HH:mm', () => {
    const dateString = '2021-02-28 19:40:10'
    const hoursOffset = 8

    expectSameResult((dayjs) =>
      dayjs(dateString).utc().utcOffset(`+0${hoursOffset}:00`, true)
    )
  })

  test('sets utc offset with "keepLocalTime" with a negative valid string value in utc mode with "keepLocalTime", format: HH:mm', () => {
    const dateString = '2021-02-28 19:40:10'
    const hoursOffset = -8

    expectSameResult((dayjs) =>
      dayjs(dateString)
        .utc(true)
        .utcOffset(`-0${Math.abs(hoursOffset)}:00`, true)
    )
  })

  test('sets utc offset with "keepLocalTime" with a positive valid string value in utc mode with "keepLocalTime", format: HHmm - utc()', () => {
    const dateString = '2021-02-28 19:40:10'
    const hoursOffset = 8

    expectSameResult((dayjs) =>
      dayjs(dateString).utc().utcOffset(`+0${hoursOffset}00`, true)
    )
  })

  test('sets utc offset with "keepLocalTime" with a negative valid string value in utc mode with "keepLocalTime", format: HHmm', () => {
    const dateString = '2021-02-28 19:40:10'
    const hoursOffset = -8

    expectSameResult((dayjs) =>
      dayjs(dateString)
        .utc()
        .utcOffset(`-0${Math.abs(hoursOffset)}00`, true)
    )
  })

  test('sets utc offset with "keepLocalTime" with a positive valid string value in utc mode with "keepLocalTime", format: HHmm - utc(strict)', () => {
    const dateString = '2021-02-28 19:40:10'
    const hoursOffset = 8

    expectSameResult((dayjs) =>
      dayjs(dateString).utc().utcOffset(`+0${hoursOffset}00`, true)
    )
  })

  test('sets utc offset with an invalid string value, value: random', () => {
    const dateString = '2021-02-28 19:40:10'

    expectSameResult((dayjs) => dayjs(dateString).utc().utcOffset('random'))
  })

  test('sets utc offset with an invalid string value, value: 0', () => {
    const dateString = '2021-02-28 19:40:10'

    expectSameResult((dayjs) => dayjs(dateString).utc().utcOffset('random'))
  })
})

describe('UTC diff', () => {
  const dateString1 = '2021-06-07'
  const dateString2 = '2021-06-06'

  const unitsShort = ['y', 'M', 'd', 'h', 'm', 's', 'ms', 'w'] as const
  const unitsLong = [
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
    'week',
  ] as const

  test('default diff', () => {
    expect(dayjs().diff).toBeDefined()
  })

  test('gets difference between utc dates for all units', () => {
    const testDate1 = dayjs.utc(dateString1)
    const testDate2 = dayjs.utc(dateString2)
    expect(testDate1.diff(testDate2, 'years')).toBe(0)
    expect(testDate1.diff(testDate2, 'months')).toBe(0)
    expect(testDate1.diff(testDate2, 'days')).toBe(1)
    expect(testDate1.diff(testDate2, 'hours')).toBe(24)
    expect(testDate1.diff(testDate2, 'minutes')).toBe(1440)
    expect(testDate1.diff(testDate2, 'seconds')).toBe(86400)
  })

  test.each(unitsShort)(
    'gets difference between utc dates for short unit "%s"',
    (unit) => {
      expectSame((dayjs) =>
        dayjs.utc(dateString1).diff(dayjs.utc(dateString2), unit)
      )
    }
  )

  test.each(unitsLong)(
    'gets difference between utc dates for long unit "%s"',
    (unit) => {
      expectSame((dayjs) =>
        dayjs.utc(dateString1).diff(dayjs.utc(dateString2), unit)
      )
    }
  )

  test.each(unitsShort)(
    'gets difference between date and utc date for short unit "%s"',
    (unit) => {
      expectSame((dayjs) =>
        dayjs(dateString1).diff(dayjs.utc(dateString2), unit)
      )
    }
  )

  test.each(unitsLong)(
    'gets difference between date and utc date for long unit "%s"',
    (unit) => {
      expectSame((dayjs) =>
        dayjs(dateString1).diff(dayjs.utc(dateString2), unit)
      )
    }
  )

  test.each(unitsShort)(
    'gets difference between utc date and date for short unit "%s"',
    (unit) => {
      expectSame((dayjs) => dayjs.utc(dateString1).diff(dateString2, unit))
    }
  )

  test.each(unitsLong)(
    'gets difference between utc date and date for long unit "%s"',
    (unit) => {
      expectSame((dayjs) => dayjs.utc(dateString1).diff(dateString2, unit))
    }
  )
})

describe('UTC Immutability', () => {
  test('utcOffset - issue 1803', () => {
    const baseDate = dayjs('2022-02-10T10:00:00Z')
    // const dateWithZero = baseDate.utcOffset(0, true)
    const dateWithZero = baseDate.utcOffset(0, true)

    expect(dateWithZero.format()).toBe('2022-02-10T11:00:00Z')
    expect(baseDate.format(), 'original date modified by utcOffset').toBe(
      '2022-02-10T11:00:00+01:00'
    )
    expect(baseDate, 'dayjs not immutable').not.toBe(dateWithZero)
  })
})
