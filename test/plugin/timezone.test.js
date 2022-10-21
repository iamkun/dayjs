import MockDate from 'mockdate'
import moment from 'moment-timezone'
import dayjs from '../../src'
import timezone from '../../src/plugin/timezone'
import customParseFormat from '../../src/plugin/customParseFormat'
import utc from '../../src/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

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
const UTC = 'UTC'
const GMT = 'GMT'

function expectDayjsEqualsMoment(dayjsDate, momentDate) {
  expect(dayjsDate.isValid()).toBe(momentDate.isValid())
  expect(dayjsDate.valueOf()).toBe(momentDate.valueOf())
  expect(dayjsDate.utcOffset()).toBe(momentDate.utcOffset())
  expect(Math.abs(dayjsDate.millisecond() - momentDate.millisecond())).toBeLessThanOrEqual(1)
  expect(dayjsDate.toDate()).toEqual(momentDate.toDate())
  expect(dayjsDate.toJSON()).toEqual(momentDate.toJSON())
  expect(dayjsDate.toISOString()).toBe(momentDate.toISOString())
  expect(dayjsDate.format()).toBe(momentDate.format())
}

describe('Guess', () => {
  it('return string', () => {
    expect(typeof dayjs.tz.guess()).toBe('string')
  })
})

describe('Parse', () => {
  afterEach(() => {
    dayjs.tz.setDefault()
    moment.tz.setDefault()
  })

  it('parse target date string without timezone', () => {
    dayjs.tz.setDefault(PARIS)
    moment.tz.setDefault(PARIS)

    const d1 = dayjs.tz('2022-01-22')
    const d1Added = dayjs.tz('2022-01-22').add(1, 'month')
    const m1 = moment('2022-01-22')
    const m1Added = moment('2022-01-22').add(1, 'month')

    expect(d1Added.format()).toBe('2022-02-22T00:00:00+01:00')
    expectDayjsEqualsMoment(d1, m1)
    expectDayjsEqualsMoment(d1Added, m1Added)
  })

  it('parse target date string with timezone LA', () => {
    const d1 = dayjs.tz('2022-01-22', NY)
    const d1Added = d1.add(1, 'month')
    const m1 = moment.tz('2022-01-22', NY)
    const m1Added = moment.tz('2022-01-22', NY).add(1, 'month')

    expect(d1Added.format()).toBe('2022-02-22T00:00:00-05:00')
    expectDayjsEqualsMoment(d1, m1)
    expectDayjsEqualsMoment(d1Added, m1Added)
  })

  it('parse target date string with timezone UTC', () => {
    const d1 = dayjs.tz('2022-01-22', UTC)
    const d1Added = d1.add(1, 'month')
    const m1 = moment.tz('2022-01-22', UTC)
    const m1Added = moment.tz('2022-01-22', UTC).add(1, 'month')

    expect(d1Added.format()).toBe('2022-02-22T00:00:00Z')
    expectDayjsEqualsMoment(d1, m1)
    expectDayjsEqualsMoment(d1Added, m1Added)
  })

  it('parse target date and time string without timezone', () => {
    dayjs.tz.setDefault(PARIS)
    moment.tz.setDefault(PARIS)

    const d1 = dayjs.tz('2022-01-22T13:24:35')
    const d1Added = d1.add(1, 'month')
    const m1 = moment('2022-01-22T13:24:35')
    const m1Added = moment('2022-01-22T13:24:35').add(1, 'month')

    expect(d1.format()).toBe('2022-01-22T13:24:35+01:00')
    expectDayjsEqualsMoment(d1, m1)
    expect(d1Added.format()).toBe('2022-02-22T13:24:35+01:00')
    expectDayjsEqualsMoment(d1Added, m1Added)
  })

  it('parse target date and time string with timezone NY', () => {
    const newYork = dayjs.tz('2014-06-01 12:00', NY)
    const newYorkAdded = newYork.add(1, 'month')
    const MnewYork = moment.tz('2014-06-01 12:00', NY)
    const MnewYorkAdded = moment.tz('2014-06-01 12:00', NY).add(1, 'month')

    expect(newYork.format()).toBe('2014-06-01T12:00:00-04:00')
    expect(newYork.utcOffset()).toBe(-240)
    expect(newYork.valueOf()).toBe(1401638400000)
    expectDayjsEqualsMoment(newYork, MnewYork)
    expectDayjsEqualsMoment(newYorkAdded, MnewYorkAdded)
  })

  it('parse target date and time string with timezone UTC', () => {
    const newYork = dayjs.tz('2022-01-22T14:15:16', UTC)
    const newYorkAdded = newYork.add(1, 'month')
    const MnewYork = moment.tz('2022-01-22T14:15:16', UTC)
    const MnewYorkAdded = moment.tz('2022-01-22T14:15:16', UTC).add(1, 'month')

    expect(newYork.format()).toBe('2022-01-22T14:15:16Z')
    expect(newYork.utcOffset()).toBe(0)
    expect(newYork.valueOf()).toBe(1642860916000)
    expectDayjsEqualsMoment(newYork, MnewYork)
    expectDayjsEqualsMoment(newYorkAdded, MnewYorkAdded)
  })

  it('parse target date and time string with offset and timezone', () => {
    const newYork = dayjs.tz('2014-06-01 12:00:03+03:00', NY)
    const MnewYork = moment.tz('2014-06-01 12:00:03+03:00', NY)
    expect(newYork.format()).toBe('2014-06-01T05:00:03-04:00')
    expect(newYork.format()).toBe(MnewYork.format())
    expect(newYork.utcOffset()).toBe(-240)
    expect(newYork.utcOffset()).toBe(MnewYork.utcOffset())
    expect(newYork.valueOf()).toBe(1401613203000)
    expect(newYork.valueOf()).toBe(MnewYork.valueOf())
  })

  it('parse timestamp (js Date)', () => {
    const d = new Date('2020-08-07T12:00-07:00')
    const result = '2020-08-07T12:00:00-07:00'
    const TjsDate = dayjs.tz(d, VAN)
    const TjsDateMoment = moment.tz(d, VAN)

    expect(TjsDate.format()).toBe(result)
    expect(TjsDate.format()).toBe(TjsDateMoment.format())
  })

  it('parse timestamp (js Date.getTime)', () => {
    const d = new Date('2020-08-07T12:00-07:00')
    const result = '2020-08-07T12:00:00-07:00'

    const Timestamp = dayjs.tz(d.getTime(), VAN)
    expect(Timestamp.format()).toBe(result)
  })

  it('parse timestamp (Day.js object)', () => {
    const d = new Date('2020-08-07T12:00-07:00')
    const result = '2020-08-07T12:00:00-07:00'

    const Tdayjs = dayjs.tz(dayjs(d), VAN)
    expect(Tdayjs.format()).toBe(result)
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

  it('convert to target time (dayjs vs. moment)', () => {
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

describe('CustomParseFormat', () => {
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
describe('set default timezone', () => {
  beforeEach(() => {
    MockDate.set(new Date())
  })

  afterEach(() => {
    MockDate.reset()
    dayjs.tz.setDefault()
    moment.tz.setDefault()
  })

  it('with "NYC" - dayjs("2022-12-03T20:14:43") should return correct date', () => {
    dayjs.tz.setDefault(NY)
    moment.tz.setDefault(NY)

    const dateValue = '2022-12-03T20:14:43'
    const dayjsDate = dayjs.tz(dateValue)
    const momentDate = moment(dateValue)

    expect(dayjsDate.format()).toBe('2022-12-03T20:14:43-05:00')
    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('with "NYC" - dayjs(0) should return correct date', () => {
    dayjs.tz.setDefault(NY)
    moment.tz.setDefault(NY)

    const dateValue = 0
    const dayjsDate = dayjs.tz(dateValue)
    const momentDate = moment(dateValue)

    expect(dayjsDate.format()).toBe('1969-12-31T19:00:00-05:00')
    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('with "UTC" - dayjs(0) should return correct date', () => {
    dayjs.tz.setDefault(UTC)
    moment.tz.setDefault(UTC)

    const dateValue = 0
    const dayjsDate = dayjs.tz(dateValue)
    const momentDate = moment(dateValue)

    expect(dayjsDate.format()).toBe('1970-01-01T00:00:00Z')
    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('with "UTC" - dayjs(0).add(0, "minutes") should return correct date', () => {
    dayjs.tz.setDefault('UTC')
    moment.tz.setDefault('UTC')

    const dateValue = 0
    const dayjsDate = dayjs.tz(dateValue).add(0, 'minutes')
    const momentDate = moment(dateValue).add(0, 'minutes')

    expect(dayjsDate.format()).toBe('1970-01-01T00:00:00Z')
    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })
})

describe('issue 2037 about parse with "add"', () => {
  it('tz(0, "UTC") should return correct date', () => {
    const dayjsDate = dayjs.tz(0, 'UTC')
    const momentDate = moment.tz(0, 'UTC')

    expect(dayjsDate.format()).toBe('1970-01-01T00:00:00Z')
    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('tz(60000, "UTC") should return correct date', () => {
    const dayjsDate = dayjs.tz(60000, 'UTC')
    const momentDate = moment.tz(60000, 'UTC')

    expect(dayjsDate.format()).toBe('1970-01-01T00:01:00Z')
    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('dayjs.tz("1970-01-01T00:00:00" ,"UTC") should return same value as moment', () => {
    const dateValue = '1970-01-01T00:00:00'
    const tz = UTC
    const dayjsDate = dayjs.tz(dateValue, tz)
    const momentDate = moment.tz(dateValue, tz)

    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('tz(0, "UTC").add(0, "minutes") should return correct date', () => {
    const dayjsDate = dayjs.tz(0, 'UTC').add(0, 'minutes')
    const momentDate = moment.tz(0, 'UTC').add(0, 'minutes')

    expect(dayjsDate.format()).toBe('1970-01-01T00:00:00Z')
    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('tz(0, "UTC").add(1, "minutes") should return correct date', () => {
    const dayjsDate = dayjs.tz(0, 'UTC').add(1, 'minutes')
    const momentDate = moment.tz(0, 'UTC').add(1, 'minutes')

    expect(dayjsDate.format()).toBe('1970-01-01T00:01:00Z')
    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('dayjs.tz("1970-01-01T00:00:00" ,"UTC") with "+ 0min" should return correct date', () => {
    const dateValue = '1970-01-01T00:00:00'
    const tz = UTC
    const dayjsDateAdded = dayjs.tz(dateValue, tz).add(0, 'minutes')
    const momentDateAdded = moment.tz(dateValue, tz).add(0, 'minutes')

    expectDayjsEqualsMoment(dayjsDateAdded, momentDateAdded)
  })

  it('dayjs(0).tz("UTC") with "+ 0min" should return correct date', () => {
    const dayjsDate = dayjs(0).tz(UTC).add(0, 'minutes')
    const momentDate = moment(0).tz(UTC).add(0, 'minutes')

    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('dayjs(60000).tz("UTC") with "+ 0min" should return correct date', () => {
    const dayjsDate = dayjs(60000).tz(UTC).add(0, 'minutes')
    const momentDate = moment(60000).tz(UTC).add(0, 'minutes')

    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  // Another timezone with offset '0'
  it('dayjs(0).tz("GMT", true) of "+ 0min" should return correct date', () => {
    const keepLocalTime = true
    const dayjsDate = dayjs(0).tz(GMT, keepLocalTime).add(0, 'minutes')
    const momentDate = moment(0).tz(GMT, keepLocalTime).add(0, 'minutes')

    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('dayjs.tz(0, "America/New_York") with "+ 0min" should return correct date', () => {
    const dateValue = 0
    const dayjsDateAdded = dayjs.tz(dateValue, NY).add(0, 'minutes')
    const momentDateAdded = moment.tz(dateValue, NY).add(0, 'minutes')

    expectDayjsEqualsMoment(dayjsDateAdded, momentDateAdded)
  })

  it('dayjs.tz("1970-01-01T00:00:00" ,"America/New_York") with "+ 0min" should return correct date', () => {
    const dateValue = '1970-01-01T00:00:00'
    const dayjsDateAdded = dayjs.tz(dateValue, NY).add(0, 'minutes')
    const momentDateAdded = moment.tz(dateValue, NY).add(0, 'minutes')

    expectDayjsEqualsMoment(dayjsDateAdded, momentDateAdded)
  })
})

describe('issue 2037 about convert with "add"', () => {
  it('dayjs(0).tz("UTC") with "+ 0min" should return correct date', () => {
    const dayjsDate = dayjs(0).tz(UTC).add(0, 'minutes')
    const momentDate = moment.tz(0, UTC).add(0, 'minutes')

    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('dayjs(0).tz("America/New_York") with "+ 0min" should return correct date', () => {
    const dayjsDate = dayjs(0).tz(NY).add(0, 'minutes')
    const momentDate = moment.tz(0, NY).add(0, 'minutes')

    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('dayjs(60000).tz("UTC") with "+ 0min" should return correct date', () => {
    const dateValue = 60000
    const dayjsDate = dayjs(dateValue).tz(UTC).add(0, 'minutes')
    const momentDate = moment.tz(dateValue, UTC).add(0, 'minutes')

    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })

  it('dayjs(60000).tz("America/New_York") with "+ 0min" should return correct date', () => {
    const dateValue = 60000
    const dayjsDate = dayjs(dateValue).tz(NY).add(0, 'minutes')
    const momentDate = moment.tz(dateValue, NY).add(0, 'minutes')

    expectDayjsEqualsMoment(dayjsDate, momentDate)
  })
})

describe('issue 1860 - setting month in UTC timezone', () => {
  beforeEach(() => {
    MockDate.set(new Date())
    dayjs.tz.setDefault('CDT')
    moment.tz.setDefault('CDT')
  })

  afterEach(() => {
    MockDate.reset()
  })

  it('setting month using timezone "America/Godthab" should return correct date', () => {
    const dateValue = '2022-04-19T03:00:00-02:00'
    const tz = 'America/Godthab'
    const dayjsDate = dayjs(dateValue).tz(tz)
    const dayjsDateWithMonth = dayjs(dayjsDate).month(3)
    const momentDate = moment(dateValue).tz(tz)
    const momentDateWithMonth = moment(dateValue).tz(tz).month(3)

    expect(dayjsDateWithMonth.format()).toBe('2022-04-19T03:00:00-02:00')
    expectDayjsEqualsMoment(dayjsDate, momentDate)
    expectDayjsEqualsMoment(dayjsDateWithMonth, momentDateWithMonth)
  })

  it('setting month using timezone "GMT" should return correct date', () => {
    const dateValue = '2022-04-19T03:00:00-02:00'
    const tz = GMT
    const dayjsDate = dayjs(dateValue).tz(tz)
    const dayjsDateUTC = dayjs(dayjsDate).tz(GMT)
    const dayjsDateUTCWithMonth = dayjs(dayjsDateUTC).month(3)
    const momentDate = moment(dateValue).tz(tz)
    const momentDateUTC = moment(moment(dateValue).tz(tz)).tz(GMT)
    const momentDateUTCWithMonth = moment(moment(dateValue).tz(tz)).tz(GMT).month(3)

    expect(dayjsDateUTCWithMonth.format()).toBe('2022-04-19T05:00:00Z')
    expectDayjsEqualsMoment(dayjsDate, momentDate)
    expectDayjsEqualsMoment(dayjsDateUTC, momentDateUTC)
    expectDayjsEqualsMoment(dayjsDateUTCWithMonth, momentDateUTCWithMonth)
  })
})
