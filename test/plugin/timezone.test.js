import MockDate from 'mockdate'
import moment from 'moment-timezone'
import dayjs from '../../src'
import timezone from '../../src/plugin/timezone'
import customParseFormat from '../../src/plugin/customParseFormat'
import objectSupport from '../../src/plugin/objectSupport'
import utc from '../../src/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)
dayjs.extend(objectSupport)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

const NY = 'America/New_York'
const VAN = 'America/Vancouver'
const DEN = 'America/Denver'
const TOKYO = 'Asia/Tokyo'
const PARIS = 'Europe/Paris'
const GUADELOUPE = 'America/Guadeloupe'
const SYDNEY = 'Australia/Sydney'
const LONDON = 'Europe/London'

const matchMoment = (d, m) => {
  expect(d.format()).toBe(m.format())
  expect(d.valueOf()).toBe(m.valueOf())
  expect(d.utcOffset()).toBe(m.utcOffset())
}

describe('Guess', () => {
  it('return string', () => {
    expect(typeof dayjs.tz.guess()).toBe('string')
  })
})


describe('Parse', () => {
  it('parse target time string', () => {
    const newYork = dayjs.tz('2014-06-01 12:00', NY)
    const MnewYork = moment.tz('2014-06-01 12:00', NY)
    expect(newYork.format()).toBe('2014-06-01T12:00:00-04:00')
    expect(newYork.format()).toBe(MnewYork.format())
    expect(newYork.utcOffset()).toBe(-240)
    expect(newYork.utcOffset()).toBe(MnewYork.utcOffset())
    expect(newYork.valueOf()).toBe(1401638400000)
    expect(newYork.valueOf()).toBe(MnewYork.valueOf())
  })

  it('parse timestamp, js Date, Day.js object', () => {
    const d = new Date('2020-08-07T12:00-07:00')
    const result = '2020-08-07T12:00:00-07:00'
    const TjsDate = dayjs.tz(d, VAN)
    const Tdayjs = dayjs.tz(dayjs(d), VAN)
    const Timestamp = dayjs.tz(d.getTime(), VAN)
    const Tmoment = moment.tz(d, VAN)
    expect(TjsDate.format()).toBe(result)
    expect(Tdayjs.format()).toBe(result)
    expect(Timestamp.format()).toBe(result)
    expect(Tmoment.format()).toBe(result)
  })

  it('parse and convert between timezones', () => {
    const newYork = dayjs.tz('2014-06-01 12:00', NY)
    expect(newYork.tz('America/Los_Angeles').format()).toBe('2014-06-01T09:00:00-07:00')
    expect(newYork.tz('Europe/London').format()).toBe('2014-06-01T17:00:00+01:00')
  })

  it('preserve milliseconds', () => {
    const d = dayjs(1596735327399)
    const oldMs = d.millisecond()
    const dTz = d.tz('America/New_York')
    const newMs = dTz.millisecond()
    expect(oldMs).toEqual(newMs)
  })
})

describe('Convert', () => {
  it('convert to target time', () => {
    const losAngeles = dayjs('2014-06-01T12:00:00Z').tz('America/Los_Angeles')
    const MlosAngeles = moment('2014-06-01T12:00:00Z').tz('America/Los_Angeles')
    expect(losAngeles.format()).toBe('2014-06-01T05:00:00-07:00')
    expect(losAngeles.format()).toBe(MlosAngeles.format())
    expect(losAngeles.valueOf()).toBe(1401624000000)
    expect(losAngeles.valueOf()).toBe(MlosAngeles.valueOf())
    expect(losAngeles.utcOffset()).toBe(-420)
    expect(losAngeles.utcOffset()).toBe(MlosAngeles.utcOffset())
  })

  it('convert to target time', () => {
    [dayjs, moment].forEach((_) => {
      const losAngeles = _('2014-06-01T12:00:00Z').tz('America/Los_Angeles')
      expect(losAngeles.format()).toBe('2014-06-01T05:00:00-07:00')
      expect(losAngeles.valueOf()).toBe(1401624000000)
    })
  })

  it('convert from time with timezone to target time', () => {
    const losAngelesInUTC = dayjs('2014-06-01T05:00:00-07:00').tz('UTC')
    const MlosAngelesInUTC = moment('2014-06-01T05:00:00-07:00').tz('UTC')
    expect(losAngelesInUTC.format()).toBe('2014-06-01T12:00:00Z')
    expect(losAngelesInUTC.format()).toBe(MlosAngelesInUTC.format())
  })

  it('DST', () => {
    [dayjs, moment].forEach((_) => {
      const jun = _('2014-06-01T12:00:00Z')
      const dec = _('2014-12-01T12:00:00Z')
      expect(jun.tz('America/Los_Angeles').format('ha')).toBe('5am')
      expect(jun.tz('America/Los_Angeles').utcOffset()).toBe(-7 * 60)
      expect(dec.tz('America/Los_Angeles').format('ha')).toBe('4am')
      expect(dec.tz('America/Los_Angeles').utcOffset()).toBe(-8 * 60)
      expect(jun.tz(NY).format('ha')).toBe('8am')
      expect(dec.tz(NY).format('ha')).toBe('7am')
      expect(jun.tz(TOKYO).format('ha')).toBe('9pm')
      expect(dec.tz(TOKYO).format('ha')).toBe('9pm')
      expect(jun.tz('Australia/Sydney').format('ha')).toBe('10pm')
      expect(dec.tz('Australia/Sydney').format('ha')).toBe('11pm')
    })
  })

  it('format Z', () => {
    [dayjs, moment].forEach((_) => {
      const t = _('2020-08-06T03:48:10.258Z').tz(TOKYO)
      expect(t.format('Z')).toBe('+09:00')
    })
  })
})


describe('DST, a time that never existed Spring Forward', () => {
  // 11 March 2012, 02:00:00 clocks were
  // turned forward 1 hour to 11 March 2012, 03:00:00 local
  // daylight time instead.
  // 02:00 -> 03:00
  // 02:59 -> 03:59

  it('2012-03-11 01:59:59', () => {
    const s = '2012-03-11 01:59:59'
    const d = dayjs.tz(s, NY)
    const m = moment.tz(s, NY)
    expect(d.format()).toBe('2012-03-11T01:59:59-05:00')
    expect(d.format()).toBe(m.format())
    expect(d.utcOffset()).toBe(-300)
    expect(d.utcOffset()).toBe(m.utcOffset())
    expect(d.valueOf()).toBe(1331449199000)
    expect(d.valueOf()).toBe(m.valueOf())
  })
  it('2012-03-11 02:00:00', () => {
    const s = '2012-03-11 02:00:00'
    const d = dayjs.tz(s, NY)
    const m = moment.tz(s, NY)
    expect(d.format()).toBe('2012-03-11T03:00:00-04:00')
    expect(d.format()).toBe(m.format())
    expect(d.valueOf()).toBe(m.valueOf())
    expect(d.valueOf()).toBe(1331449200000)
    expect(d.utcOffset()).toBe(-240)
    expect(d.utcOffset()).toBe(m.utcOffset())
  })
  it('2012-03-11 02:59:59', () => {
    const s = '2012-03-11 02:59:59'
    const d = dayjs.tz(s, NY)
    const m = moment.tz(s, NY)
    expect(d.format()).toBe('2012-03-11T03:59:59-04:00')
    expect(d.format()).toBe(m.format())
    expect(d.valueOf()).toBe(m.valueOf())
    expect(d.valueOf()).toBe(1331452799000)
    expect(d.utcOffset()).toBe(-240)
    expect(d.utcOffset()).toBe(m.utcOffset())
  })
  it('2012-03-11 03:00:00', () => {
    const s = '2012-03-11 03:00:00'
    const d = dayjs.tz(s, NY)
    const m = moment.tz(s, NY)
    expect(d.format()).toBe('2012-03-11T03:00:00-04:00')
    expect(d.format()).toBe(m.format())
    expect(d.valueOf()).toBe(m.valueOf())
    expect(d.valueOf()).toBe(1331449200000)
    expect(d.utcOffset()).toBe(-240)
    expect(d.utcOffset()).toBe(m.utcOffset())
  })
})

describe('DST, a time that never existed Fall Back', () => {
  // In the fall, at the end of DST

  it('2012-11-04 00:59:59', () => {
    const s = '2012-11-04 00:59:59';
    [dayjs, moment].forEach((_) => {
      const d = _.tz(s, NY)
      expect(d.format()).toBe('2012-11-04T00:59:59-04:00')
      expect(d.utcOffset()).toBe(-240)
      expect(d.valueOf()).toBe(1352005199000)
    })
  })
  it('2012-11-04 00:59:59', () => {
    const s = '2012-11-04 00:59:59';
    [dayjs, moment].forEach((_) => {
      const d = _.tz(s, NY)
      expect(d.format()).toBe('2012-11-04T00:59:59-04:00')
      expect(d.utcOffset()).toBe(-240)
      expect(d.valueOf()).toBe(1352005199000)
    })
  })

  // there's no sense to test "2012-11-04 01:59:59 America/New_York"
  // cause it's an invalid date and never exist
  // and dayjs result it as "2012-11-04T01:59:00-05:00"

  it('2012-11-04 02:00:00', () => {
    const s = '2012-11-04 02:00:00';
    [dayjs, moment].forEach((_) => {
      const d = _.tz(s, NY)
      expect(d.format()).toBe('2012-11-04T02:00:00-05:00')
      expect(d.utcOffset()).toBe(-300)
      expect(d.valueOf()).toBe(1352012400000)
    })
  })
})

it('DST valueOf', () => {
  const day1 = '2021-11-17T09:45:00.000Z'
  const d1 = dayjs.utc(day1).tz(PARIS)
  const m1 = moment.tz(day1, PARIS)
  expect(d1.valueOf()).toBe(m1.valueOf())

  const day2 = '2021-05-17T09:45:00.000Z'
  const d2 = dayjs.utc(day2).tz(PARIS)
  const m2 = moment.tz(day2, PARIS)
  expect(d2.valueOf()).toBe(m2.valueOf())
})

describe('set Default', () => {
  it('default timezone', () => {
    const dateStr = '2014-06-01 12:00'
    dayjs.tz.setDefault(NY)
    const newYork = dayjs.tz(dateStr)
    expect(newYork.format()).toBe('2014-06-01T12:00:00-04:00')
    expect(newYork.utcOffset()).toBe(-240)
    expect(newYork.valueOf()).toBe(1401638400000)

    expect(dayjs(dateStr).tz().format()).toBe(dayjs(dateStr).tz(NY).format())
  })

  it('empty timezone means local timezone', () => {
    const LOCAL_TZ = dayjs.tz.guess()
    const dateStr = '2014-06-01 12:00'
    dayjs.tz.setDefault()
    expect(dayjs(dateStr).tz().valueOf()).toBe(dayjs(dateStr).tz(LOCAL_TZ).valueOf())
    expect(dayjs.tz(dateStr).valueOf()).toBe(dayjs.tz(dateStr, LOCAL_TZ).valueOf())
  })

  it('change default timezone', () => {
    dayjs.tz.setDefault(NY)
    const newYork = dayjs.tz('2014-06-01 12:00')
    expect(newYork.utcOffset()).toBe(-240)

    dayjs.tz.setDefault(TOKYO)
    const tokyo = dayjs.tz('2014-06-01 12:00')
    expect(tokyo.format()).toBe('2014-06-01T12:00:00+09:00')
    expect(tokyo.format('Z')).toBe('+09:00')
    expect(tokyo.valueOf()).toBe(1401591600000)
  })

  it('override default timezone in proto.tz', () => {
    dayjs.tz.setDefault(NY)
    const tokyo = dayjs.tz('2014-06-01 12:00', TOKYO)
    expect(tokyo.format()).toBe('2014-06-01T12:00:00+09:00')
    expect(tokyo.format('Z')).toBe('+09:00')
    expect(tokyo.valueOf()).toBe(1401591600000)
  })

  it('override default timezone in d.tz', () => {
    dayjs.tz.setDefault(NY)
    const tokyo = dayjs.tz('2014-06-01 12:00', TOKYO)
    expect(tokyo.format()).toBe('2014-06-01T12:00:00+09:00')
    expect(tokyo.format('Z')).toBe('+09:00')
    expect(tokyo.valueOf()).toBe(1401591600000)
  })
})

describe('keepLocalTime', () => {
  const base = dayjs.tz('2013-11-18 11:55', 'America/Toronto')
  it('keepLocalTime', () => {
    expect(base.tz('Europe/Berlin').format()).toBe('2013-11-18T17:55:00+01:00')
    expect(base.tz('Europe/Berlin', true).format()).toBe('2013-11-18T11:55:00+01:00')
  })

  it('keeps local time when converting between DST-desynced zones', () => {
    const d = dayjs.tz('2024-03-20 12:00', NY).tz(PARIS, true)
    expect(d.utcOffset()).toBe(60)
    expect(d.format()).toBe('2024-03-20T12:00:00+01:00')
    const m = moment.tz('2024-03-20 12:00', NY).tz(PARIS, true)
    expect(d.format()).toBe(m.format())
    expect(d.utcOffset()).toBe(m.utcOffset())
  })
})

describe('Get offsetName', () => {
  const dtz = dayjs.tz('2012-03-11 01:59:59', NY)
  it('short', () => {
    const d = dtz.offsetName('short')
    const m = moment.tz('2012-03-11 01:59:59', NY).format('z')
    expect(d).toBe(m)
    expect(d).toBe('EST')
  })
  it('long', () => {
    const d = dtz.offsetName('long')
    expect(d).toBe('Eastern Standard Time')
  })
})

describe('CustomPraseFormat', () => {
  const result = 1602786600
  it('normal', () => {
    expect(dayjs.tz('2020/10/15 12:30', DEN).unix()).toBe(result)
  })
  it('custom', () => {
    expect(dayjs.tz('10/15/2020 12:30', 'MM/DD/YYYY HH:mm', DEN).unix()).toBe(result)
  })
})

describe('startOf and endOf', () => {
  it('corrects for timezone offset in startOf', () => {
    const originalDay = dayjs.tz('2010-01-01 00:00:00', NY)
    const startOfDay = originalDay.startOf('day')
    expect(startOfDay.valueOf()).toEqual(originalDay.valueOf())
  })

  it('corrects for timezone offset in endOf', () => {
    const originalDay = dayjs.tz('2009-12-31 23:59:59.999', NY)
    const endOfDay = originalDay.endOf('day')
    expect(endOfDay.valueOf()).toEqual(originalDay.valueOf())
  })

  it('preserves locality when tz is called', () => {
    const tzWithoutLocality = dayjs.tz('2023-02-17 00:00:00', NY)
    const tzWithLocality = dayjs.tz('2023-02-17 00:00:00', NY).locale({
      name: 'locale_test',
      weekStart: 3
    })

    expect(tzWithoutLocality.startOf('week').format('YYYY-MM-DD')).toEqual('2023-02-12')
    expect(tzWithLocality.startOf('week').format('YYYY-MM-DD')).toEqual('2023-02-15')
  })
})


describe('UTC timezone', () => {
  it('TZ with UTC with Locale', () => {
    const test1 = dayjs('2000-01-01T09:00:00+09:00').tz('Asia/Seoul').locale('en')
    expect(test1.hour()).toBe(9)
    const test2 = dayjs('2000-01-01T09:00:00+09:00').tz('Asia/Hong_Kong').locale('en')
    expect(test2.hour()).toBe(8)
    const test3 = dayjs('2000-01-01T09:00:00+09:00').tz('Etc/UTC').locale('en')
    expect(test3.hour()).toBe(0)
  })

  it('TZ with UTC', () => {
    const dayjs1 = dayjs('2000-01-01T09:01:00+09:00').tz('Etc/UTC', false)
    expect(dayjs1.format()).toBe('2000-01-01T00:01:00Z')
    const moment1 = moment('2000-01-01T09:01:00+09:00').tz('Etc/UTC', false)
    expect(moment1.format()).toBe('2000-01-01T00:01:00Z')
    const dayjs2 = dayjs('2000-01-01T09:01:00+09:00').tz('Etc/UTC', true)
    const moment2 = moment('2000-01-01T09:01:00+09:00').tz('Etc/UTC', true)
    expect(dayjs2.format()).toBe(moment2.format())
  })
})

// America/Guadeloupe observes a fixed UTC−4 offset (no DST). Converting an instant with
// .tz() must not inherit the host timezone's DST transition. Fails on hosts with EU-style
// spring DST (e.g. Europe/Paris, Europe/London); covered by npm run test-tz-plugin.
// https://github.com/iamkun/dayjs/issues/1260
describe('Fixed-offset zone across host DST (America/Guadeloupe)', () => {
  // EU spring-forward Sunday in 2050; Guadeloupe local midnight is 04:00Z.
  const instant = '2050-03-27T04:00:00.000Z'

  it('keeps UTC−4 when converting an instant around host spring DST', () => {
    const d = dayjs(instant).tz(GUADELOUPE)
    expect(d.utcOffset()).toBe(-240)
    expect(d.format()).toBe('2050-03-27T00:00:00-04:00')
  })

  it('matches moment for America/Guadeloupe around host spring DST', () => {
    const d = dayjs(instant).tz(GUADELOUPE)
    const m = moment(instant).tz(GUADELOUPE)
    expect(d.format()).toBe(m.format())
    expect(d.utcOffset()).toBe(m.utcOffset())
  })

  it('advances the calendar day when adding 1 day across host spring DST', () => {
    let date = new Date('2050-03-26T04:00:00.000Z')
    const days = []
    for (let i = 0; i < 3; i += 1) {
      const cur = dayjs(date).tz(GUADELOUPE)
      days.push({
        day: cur.format('YYYY-MM-DD'),
        offset: cur.utcOffset()
      })
      date = cur.add(1, 'day').toDate()
    }
    expect(days.map(d => d.day)).toEqual([
      '2050-03-26',
      '2050-03-27',
      '2050-03-28'
    ])
    expect(days.map(d => d.offset)).toEqual([-240, -240, -240])
  })
})

// Target zones that observe DST must not inherit the host timezone's DST state.
// US and EU calendars are out of sync in mid-March (US already DST, EU still standard)
// and late October (EU already standard, US still DST). Southern-hemisphere DST is
// inverted year-round. Covered by npm run test-tz-plugin across host timezones.
// https://github.com/iamkun/dayjs/issues/1260
describe('DST-observing zone across host DST', () => {
  const springDesync = '2024-03-20T12:00:00.000Z'
  const fallDesync = '2024-10-30T12:00:00.000Z'
  const southernSummer = '2024-01-15T12:00:00.000Z'

  it('converts to America/New_York while US is in DST and EU is not', () => {
    const d = dayjs(springDesync).tz(NY)
    expect(d.utcOffset()).toBe(-240)
    expect(d.format()).toBe('2024-03-20T08:00:00-04:00')
    const m = moment(springDesync).tz(NY)
    expect(d.format()).toBe(m.format())
    expect(d.utcOffset()).toBe(m.utcOffset())
  })

  it('converts to Europe/Paris while EU is still on standard time', () => {
    const d = dayjs(springDesync).tz(PARIS)
    expect(d.utcOffset()).toBe(60)
    expect(d.format()).toBe('2024-03-20T13:00:00+01:00')
    const m = moment(springDesync).tz(PARIS)
    expect(d.format()).toBe(m.format())
    expect(d.utcOffset()).toBe(m.utcOffset())
  })

  it('converts to America/New_York while US is still in DST and EU has fallen back', () => {
    const d = dayjs(fallDesync).tz(NY)
    expect(d.utcOffset()).toBe(-240)
    expect(d.format()).toBe('2024-10-30T08:00:00-04:00')
    const m = moment(fallDesync).tz(NY)
    expect(d.format()).toBe(m.format())
    expect(d.utcOffset()).toBe(m.utcOffset())
  })

  it('converts to Europe/Paris after EU has fallen back', () => {
    const d = dayjs(fallDesync).tz(PARIS)
    expect(d.utcOffset()).toBe(60)
    expect(d.format()).toBe('2024-10-30T13:00:00+01:00')
    const m = moment(fallDesync).tz(PARIS)
    expect(d.format()).toBe(m.format())
    expect(d.utcOffset()).toBe(m.utcOffset())
  })

  it('converts to Australia/Sydney while southern hemisphere is in DST', () => {
    const d = dayjs(southernSummer).tz(SYDNEY)
    expect(d.utcOffset()).toBe(660)
    expect(d.format()).toBe('2024-01-15T23:00:00+11:00')
    const m = moment(southernSummer).tz(SYDNEY)
    expect(d.format()).toBe(m.format())
    expect(d.utcOffset()).toBe(m.utcOffset())
  })

  it('converts to Europe/Paris while northern hemisphere is on standard time', () => {
    const d = dayjs(southernSummer).tz(PARIS)
    expect(d.utcOffset()).toBe(60)
    expect(d.format()).toBe('2024-01-15T13:00:00+01:00')
    const m = moment(southernSummer).tz(PARIS)
    expect(d.format()).toBe(m.format())
    expect(d.utcOffset()).toBe(m.utcOffset())
  })
})

// Conversion and parse cases that pass with tzOffset() in proto.tz.
// Calendar arithmetic (startOf / set / add) stays in the follow-up PR.
describe('DST edge cases vs moment', () => {
  it('parses the fall-back overlap the same way as moment', () => {
    ['01:00', '01:30', '01:59'].forEach((time) => {
      const s = `2012-11-04 ${time}`
      matchMoment(dayjs.tz(s, NY), moment.tz(s, NY))
    })
  })

  it('keeps the two 01:30 instants distinct when converting', () => {
    matchMoment(
      dayjs('2012-11-04T05:30:00.000Z').tz(NY),
      moment('2012-11-04T05:30:00.000Z').tz(NY)
    )
    matchMoment(
      dayjs('2012-11-04T06:30:00.000Z').tz(NY),
      moment('2012-11-04T06:30:00.000Z').tz(NY)
    )
  })

  it('converts through the host fall-back overlap', () => {
    const iso = '2024-10-27T05:30:00.000Z'
    matchMoment(dayjs(iso).tz(GUADELOUPE), moment(iso).tz(GUADELOUPE))
  })

  it('converts 30-minute DST (Australia/Lord_Howe)', () => {
    matchMoment(
      dayjs('2024-01-15T12:00:00.000Z').tz('Australia/Lord_Howe'),
      moment('2024-01-15T12:00:00.000Z').tz('Australia/Lord_Howe')
    )
    matchMoment(
      dayjs('2024-07-15T12:00:00.000Z').tz('Australia/Lord_Howe'),
      moment('2024-07-15T12:00:00.000Z').tz('Australia/Lord_Howe')
    )
  })

  it('converts Europe/London in winter (UTC+0)', () => {
    matchMoment(
      dayjs('2024-01-15T12:00:00.000Z').tz(LONDON),
      moment('2024-01-15T12:00:00.000Z').tz(LONDON)
    )
    matchMoment(
      dayjs.tz('2024-01-15 12:00', LONDON),
      moment.tz('2024-01-15 12:00', LONDON)
    )
  })

  it('handles the 30-minute Lord Howe gap and both sides of its overlap', () => {
    const zone = 'Australia/Lord_Howe'
    matchMoment(
      dayjs.tz('2024-10-06 02:15', zone),
      moment.tz('2024-10-06 02:15', zone)
    )
    const overlapInstants = [
      '2024-04-06T14:45:00.000Z',
      '2024-04-06T15:15:00.000Z'
    ]
    overlapInstants.forEach((instant) => {
      matchMoment(dayjs(instant).tz(zone), moment(instant).tz(zone))
    })
  })

  it('keeps local time when converting a host-local instance', () => {
    const input = '2024-03-20 12:34:56.789'
    matchMoment(
      dayjs(input).tz(GUADELOUPE, true),
      moment(input).tz(GUADELOUPE, true)
    )
  })

  it('diffs elapsed hours and calendar days across target DST', () => {
    const dBefore = dayjs.tz('2012-03-10 12:00', NY)
    const dAfter = dayjs.tz('2012-03-11 12:00', NY)
    const mBefore = moment.tz('2012-03-10 12:00', NY)
    const mAfter = moment.tz('2012-03-11 12:00', NY)
    expect(dAfter.diff(dBefore, 'hour')).toBe(mAfter.diff(mBefore, 'hour'))
    expect(dAfter.diff(dBefore, 'day', true)).toBe(mAfter.diff(mBefore, 'day', true))
  })

  it('handles quarter-hour and date-line offsets', () => {
    const instant = '2024-01-01T12:00:00.000Z'
    const zones = ['Asia/Kathmandu', 'Pacific/Chatham', 'Pacific/Kiritimati']
    zones.forEach((zone) => {
      matchMoment(dayjs(instant).tz(zone), moment(instant).tz(zone))
      matchMoment(
        dayjs.tz('2024-01-01 00:15', zone),
        moment.tz('2024-01-01 00:15', zone)
      )
    })
  })
})

it('does not throw for invalid Day.js values (regression #111.22)', () => {
  const invalid = dayjs('invalid')
  expect(invalid.isValid()).toBe(false)
  expect(() => invalid.tz('Europe/Skopje')).not.toThrow()
  expect(invalid.tz('Europe/Skopje').isValid()).toBe(false)
})

it('does not throw for invalid string in d.tz()', () => {
  expect(() => dayjs.tz('invalid', 'Europe/Skopje')).not.toThrow()
  expect(dayjs.tz('invalid', 'Europe/Skopje').isValid()).toBe(false)
})

// Adding, setting and startOf on a zoned instance kept the offset of the instant it started from,
// so a step across the zone's DST change showed the right wall clock at the wrong instant, or the
// right instant with the old offset. https://github.com/iamkun/dayjs/issues/1271
describe('Arithmetic on zoned instances across DST', () => {
  const LA = 'US/Pacific'
  const TEL_AVIV = 'Asia/Tel_Aviv'

  it('add(day) across spring forward keeps the wall clock and takes the new offset', () => {
    const d = dayjs.tz('2021-03-13 12:00', NY).add(1, 'day')
    expect(d.format()).toBe('2021-03-14T12:00:00-04:00')
    matchMoment(d, moment.tz('2021-03-13 12:00', NY).add(1, 'day'))
  })

  it('add(day) across fall back lands on the next calendar day (#1271)', () => {
    const d = dayjs.tz('2020-10-24', LONDON).add(2, 'day')
    expect(d.toISOString()).toBe('2020-10-26T00:00:00.000Z')
    matchMoment(d, moment.tz('2020-10-24', LONDON).add(2, 'day'))
  })

  it('add(week) on a converted instance takes the new offset', () => {
    const d = dayjs.utc('2020-03-04T10:00:00Z').tz(NY).add(1, 'week')
    expect(d.format()).toBe('2020-03-11T05:00:00-04:00')
    matchMoment(d, moment.utc('2020-03-04T10:00:00Z').tz(NY).add(1, 'week'))
  })

  it('add(day) over a 25-hour day gives the instant that re-parsing gives (#2957)', () => {
    const start = 1762066800000 // 2025-11-02 00:00 PDT
    const a = dayjs.tz(start, LA).add(1, 'day')
    expect(a.valueOf()).toBe(1762156800000)
    expect(a.format('YYYY-MM-DD HH:mm:ss')).toBe('2025-11-03 00:00:00')
    expect(dayjs.tz(a.valueOf(), LA).format()).toBe(a.format())
    matchMoment(a, moment.tz(start, LA).add(1, 'day'))
  })

  it('add(hour) is elapsed time and takes the offset at the new instant (#1622)', () => {
    let d = dayjs.tz('2021-10-31', TEL_AVIV).startOf('day')
    let m = moment.tz('2021-10-31', TEL_AVIV).startOf('day')
    const seen = []
    for (let i = 0; i < 5; i += 1) {
      seen.push(d.format('HH:mmZ'))
      matchMoment(d, m)
      d = d.add(1, 'hour')
      m = m.clone().add(1, 'hour')
    }
    expect(seen).toEqual(['00:00+03:00', '01:00+03:00', '01:00+02:00', '02:00+02:00', '03:00+02:00'])
  })

  it('add(24, hour) and add(1, day) differ across a transition', () => {
    const base = dayjs.tz('2021-03-13 12:00', NY)
    expect(base.add(24, 'hour').format()).toBe('2021-03-14T13:00:00-04:00')
    expect(base.add(1, 'day').format()).toBe('2021-03-14T12:00:00-04:00')
    expect(base.add(1, 'day').valueOf() - base.valueOf()).toBe(23 * 60 * 60 * 1000)
  })

  it('add(month) and add(year) take the offset of the target date', () => {
    matchMoment(
      dayjs.tz('2021-02-14 12:00', NY).add(1, 'month'),
      moment.tz('2021-02-14 12:00', NY).add(1, 'month')
    )
    matchMoment(
      dayjs.tz('2020-07-01 09:30', NY).add(5, 'month'),
      moment.tz('2020-07-01 09:30', NY).add(5, 'month')
    )
    matchMoment(
      dayjs.tz('2020-11-01 00:30', NY).add(1, 'year'),
      moment.tz('2020-11-01 00:30', NY).add(1, 'year')
    )
  })

  it('subtract(day) back across spring forward', () => {
    matchMoment(
      dayjs.tz('2021-03-15 12:00', NY).subtract(1, 'day'),
      moment.tz('2021-03-15 12:00', NY).subtract(1, 'day')
    )
  })

  it('add(millisecond) with and without a unit is elapsed time', () => {
    const edge = dayjs.tz('2021-11-07 01:59:59.999', NY)
    expect(edge.format('HH:mm:ss.SSS Z')).toBe('01:59:59.999 -04:00')
    expect(edge.add(1).format('HH:mm:ss.SSS Z')).toBe('01:00:00.000 -05:00')
    expect(edge.add(1, 'ms').valueOf()).toBe(edge.valueOf() + 1)
    expect(edge.add(1, 'second').format('HH:mm:ss.SSS Z')).toBe('01:00:00.999 -05:00')
    expect(edge.add(1, 'minute').format('HH:mm:ss.SSS Z')).toBe('01:00:59.999 -05:00')
  })

  it('set() and the setters take the offset of the new wall clock', () => {
    matchMoment(
      dayjs.tz('2021-03-13 12:00', NY).set('date', 14),
      moment.tz('2021-03-13 12:00', NY).set('date', 14)
    )
    matchMoment(
      dayjs.tz('2021-11-07 00:30', NY).hour(5),
      moment.tz('2021-11-07 00:30', NY).hour(5)
    )
    matchMoment(
      dayjs.tz('2024-03-31 03:00', PARIS).year(2023),
      moment.tz('2024-03-31 03:00', PARIS).year(2023)
    )
    expect(dayjs.tz('2021-03-13 12:00', NY).date(14).format()).toBe('2021-03-14T12:00:00-04:00')
  })

  it('startOf and endOf on the days of a transition', () => {
    matchMoment(
      dayjs.tz('2021-11-07 12:00', NY).startOf('day'),
      moment.tz('2021-11-07 12:00', NY).startOf('day')
    )
    matchMoment(
      dayjs.tz('2021-03-14 12:00', NY).endOf('day'),
      moment.tz('2021-03-14 12:00', NY).endOf('day')
    )
    matchMoment(
      dayjs.tz('2021-03-31 12:00', NY).startOf('month').add(1, 'month'),
      moment.tz('2021-03-31 12:00', NY).startOf('month').add(1, 'month')
    )
    expect(dayjs.tz('2021-11-07 12:00', NY).startOf('day').format()).toBe('2021-11-07T00:00:00-04:00')
    expect(dayjs.tz('2021-03-14 12:00', NY).endOf('day').format()).toBe('2021-03-14T23:59:59-04:00')
  })

  it('startOf(day) on a day that begins inside a gap lands on its first instant', () => {
    // Chile springs forward at midnight, so 2021-09-05 starts at 01:00
    const d = dayjs.tz('2021-09-05 12:00', 'America/Santiago').startOf('day')
    expect(d.format()).toBe('2021-09-05T01:00:00-03:00')
    expect(d.valueOf()).toBe(Date.UTC(2021, 8, 5, 4))
  })

  it('add(day) into a gap moves forward, as dayjs.tz(string) does', () => {
    const d = dayjs.tz('2021-03-13 02:30', NY).add(1, 'day')
    expect(d.format()).toBe('2021-03-14T03:30:00-04:00')
    expect(d.format()).toBe(dayjs.tz('2021-03-14 02:30', NY).format())
  })

  it('keeps the side of a fall-back overlap it started on', () => {
    const fromDaylight = dayjs.tz('2021-11-06 01:30', NY).add(1, 'day')
    expect(fromDaylight.format()).toBe('2021-11-07T01:30:00-04:00')
    const fromStandard = dayjs.tz('2021-11-08 01:30', NY).subtract(1, 'day')
    expect(fromStandard.format()).toBe('2021-11-07T01:30:00-05:00')
    expect(fromStandard.valueOf() - fromDaylight.valueOf()).toBe(60 * 60 * 1000)
  })

  it('works the same on instances from .tz() and from dayjs.tz()', () => {
    const converted = dayjs('2021-03-13T17:00:00Z').tz(NY)
    const parsed = dayjs.tz('2021-03-13 12:00', NY)
    expect(converted.add(1, 'day').format()).toBe(parsed.add(1, 'day').format())
    expect(converted.add(1, 'day').valueOf()).toBe(parsed.add(1, 'day').valueOf())
    expect(converted.set('hour', 1).format()).toBe(parsed.set('hour', 1).format())
    expect(converted.add(3, 'hour').format()).toBe(parsed.add(3, 'hour').format())
  })

  it('moves between a zero offset and a daylight offset', () => {
    const winter = dayjs.tz('2021-11-01 12:00', LONDON)
    expect(winter.utcOffset()).toBe(0)
    matchMoment(winter.subtract(2, 'day'), moment.tz('2021-11-01 12:00', LONDON).subtract(2, 'day'))
    matchMoment(winter.subtract(2, 'day').add(2, 'day'), moment.tz('2021-11-01 12:00', LONDON))
    const summer = dayjs.tz('2021-10-30 12:00', LONDON)
    matchMoment(summer.add(2, 'day'), moment.tz('2021-10-30 12:00', LONDON).add(2, 'day'))
  })

  // objectSupport splits an object into one call per unit, each of which reaches the override
  // because objectSupport is installed after timezone
  it('takes object arguments through objectSupport', () => {
    const base = dayjs.tz('2021-03-13 12:00', NY)
    expect(base.add({ days: 1 }).format()).toBe('2021-03-14T12:00:00-04:00')
    expect(base.add({ hours: 24 }).format()).toBe('2021-03-14T13:00:00-04:00')
    expect(base.subtract({ days: -1, hours: 1 }).format()).toBe('2021-03-14T11:00:00-04:00')
    expect(base.set({ date: 14, hour: 1 }).format()).toBe('2021-03-14T01:00:00-05:00')
    expect(base.set({ date: 14, hour: 3 }).format()).toBe('2021-03-14T03:00:00-04:00')
  })

  it('keeps the locale and the week start', () => {
    const d = dayjs.tz('2023-02-17 00:00:00', NY).locale({ name: 'tz_locale', weekStart: 3 })
    expect(d.add(1, 'day').locale()).toBe('tz_locale')
    expect(d.add(1, 'hour').locale()).toBe('tz_locale')
    expect(d.startOf('week').format('YYYY-MM-DD')).toBe('2023-02-15')
    expect(d.add(7, 'day').startOf('week').format('YYYY-MM-DD')).toBe('2023-02-22')
  })

  it('leaves invalid instances invalid', () => {
    const invalid = dayjs.tz('invalid', NY)
    expect(invalid.add(1, 'day').isValid()).toBe(false)
    expect(invalid.add(1, 'hour').isValid()).toBe(false)
    expect(invalid.set('date', 1).isValid()).toBe(false)
    expect(invalid.startOf('day').isValid()).toBe(false)
    const valid = dayjs.tz('2021-03-13 12:00', NY)
    expect(valid.set('date', NaN).isValid()).toBe(false)
    expect(valid.add(NaN, 'hour').isValid()).toBe(false)
    expect(valid.add(Infinity, 'day').isValid()).toBe(false)
  })

  // dayjs.tz(string) built its result by shifting a host-local Date, so on a host inside the hours
  // before its own DST change the fields came out an hour off while valueOf() was right.
  it('dayjs.tz(string) shows the wall clock it was given on a host near its own DST change', () => {
    expect(dayjs.tz('2021-03-14 12:00', TOKYO).format()).toBe('2021-03-14T12:00:00+09:00')
    expect(dayjs.tz('2021-11-07 12:00', TOKYO).format()).toBe('2021-11-07T12:00:00+09:00')
    expect(dayjs.tz('2021-03-28 12:00', TOKYO).format()).toBe('2021-03-28T12:00:00+09:00')
    expect(dayjs.tz('2021-10-31 12:00', TOKYO).format()).toBe('2021-10-31T12:00:00+09:00')
    expect(dayjs.tz('2021-09-26 12:00', 'Pacific/Kiritimati').format()).toBe('2021-09-26T12:00:00+14:00')
  })
})
