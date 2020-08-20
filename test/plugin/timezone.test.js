import MockDate from 'mockdate'
import moment from 'moment-timezone'
import dayjs from '../../src'
import utc from '../../src/plugin/utc'
import timezone from '../../src/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

const NY = 'America/New_York'
const VAN = 'America/Vancouver'
const TOKYO = 'Asia/Tokyo'

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

  it('DST', () => {
    [dayjs, moment].forEach((_) => {
      const jun = _('2014-06-01T12:00:00Z')
      const dec = _('2014-12-01T12:00:00Z')
      expect(jun.tz('America/Los_Angeles').format('ha')).toBe('5am')
      expect(dec.tz('America/Los_Angeles').format('ha')).toBe('4am')
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
  it('2012-11-04 01:00:00', () => {
    const s = '2012-11-04 01:00:00';
    [dayjs, moment].forEach((_) => {
      const d = _.tz(s, NY)
      expect(d.format()).toBe('2012-11-04T01:00:00-04:00')
      expect(d.utcOffset()).toBe(-240)
      expect(d.valueOf()).toBe(1352005200000)
    })
  })
  it('2012-11-04 01:59:59', () => {
    const s = '2012-11-04 01:59:59';
    [dayjs, moment].forEach((_) => {
      const d = _.tz(s, NY)
      expect(d.format()).toBe('2012-11-04T01:59:59-04:00')
      expect(d.utcOffset()).toBe(-240)
      expect(d.valueOf()).toBe(1352008799000)
    })
  })
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
