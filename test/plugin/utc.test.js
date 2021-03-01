import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import customParseFormat from '../../src/plugin/customParseFormat'
import utc from '../../src/plugin/utc'

dayjs.extend(utc)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('UTC Get', () => {
  it('UTC Year', () => {
    expect(dayjs().utc().year()).toBe(moment().utc().year())
  })

  it('UTC Month', () => {
    expect(dayjs().utc().month()).toBe(moment().utc().month())
  })

  it('UTC Day of Week', () => {
    expect(dayjs().utc().day()).toBe(moment().utc().day())
  })

  it('UTC Date', () => {
    expect(dayjs().utc().date()).toBe(moment().utc().date())
  })

  it('UTC Hour', () => {
    expect(dayjs().utc().hour()).toBe(moment().utc().hour())
  })

  it('UTC Minute', () => {
    expect(dayjs().utc().minute()).toBe(moment().utc().minute())
  })

  it('UTC Second', () => {
    expect(dayjs().utc().second()).toBe(moment().utc().second())
  })

  it('UTC Millisecond', () => {
    expect(dayjs().utc().millisecond()).toBe(moment().utc().millisecond())
  })
})

describe('Parse UTC ', () => {
  it('Parse Now', () => {
    expect(dayjs.utc().format()).toBe(moment.utc().format())
    expect(dayjs().utc().format()).toBe(moment().utc().format())
  })

  it('Parse date string without timezone', () => {
    const d = '2018-09-06'
    expect(dayjs.utc(d).format()).toEqual(moment.utc(d).format())
    expect(dayjs.utc(d).format()).toEqual('2018-09-06T00:00:00Z')
    expect(dayjs(d).utc().format()).toEqual(moment(d).utc().format())
    const d2 = '2018-09'
    expect(dayjs.utc(d2).format()).toEqual(moment.utc(d2).format())
    expect(dayjs.utc(d2).format()).toEqual('2018-09-01T00:00:00Z')
    expect(dayjs(d2).utc().format()).toEqual(moment(d2).utc().format())
    const d3 = '2018'
    expect(dayjs.utc(d3).format()).toEqual(moment.utc(d3).format())
    expect(dayjs.utc(d3).format()).toEqual('2018-01-01T00:00:00Z')
    expect(dayjs(d3).utc().format()).toEqual(moment(d3).utc().format())
  })

  it('creating with utc with timezone', () => {
    const d = '2011-02-02T03:04:05+00:00'
    expect(dayjs.utc(d).format()).toEqual(moment.utc(d).format())
    const d2 = '2012-01-02T08:20:00+09:00'
    expect(dayjs.utc(d2).format()).toEqual(moment.utc(d2).format())
  })

  it('Parse date string without timezone', () => {
    const d = '2017-04-22 19:50:16'
    expect(dayjs.utc(d).format()).toEqual('2017-04-22T19:50:16Z')
    expect(dayjs.utc(d).format()).toEqual(moment.utc(d).format())
    expect(dayjs(d).utc().format()).toBe(moment(d).utc().format())
    const d2 = '2012-01-02T08:20:00'
    expect(dayjs.utc(d2).format()).toEqual(moment.utc(d2).format())
  })

  it('Parse date string set utc in config', () => {
    const d = '2018-09-06T19:34:28Z'
    expect(dayjs(d, { utc: true }).format()).toEqual('2018-09-06T19:34:28Z')
    expect(dayjs(d, { utc: true }).format()).toEqual(moment(d).utc().format())
    expect(dayjs(d).utc().format()).toEqual('2018-09-06T19:34:28Z')
    expect(dayjs(d).utc().format()).toEqual(moment(d).utc().format())
    expect(dayjs.utc(d).format()).toEqual('2018-09-06T19:34:28Z')
    expect(dayjs.utc(d).format()).toEqual(moment.utc(d).format())
  })

  it('parses unlimited millisecond in utc', () => {
    const date = '2019-03-25T06:41:00.999999999'
    const ds = dayjs.utc(date)
    const ms = moment.utc(date)
    expect(ds.valueOf()).toEqual(ms.valueOf())
    expect(ds.millisecond()).toEqual(ms.millisecond())
  })
})

it('Clone retains the UTC mode', () => {
  const instance = dayjs('2018-09-06').utc()
  const another = instance.clone()
  expect(another.$u).toBeTruthy()
})

it('UTC mode format tokens', () => {
  const d = '2018-09-06T19:34:28.657Z'
  const instance = dayjs(d).utc()
  const format = 'HH-hh-mm-ss-SSS-Z-ZZ'
  expect(instance.format(format)).toBe('19-07-34-28-657-+00:00-+0000')
  expect(instance.format(format)).toBe(moment.utc(d).format(format))
})

describe('local', () => {
  it('Returns a new instance', () => {
    const instance = dayjs.utc('2018-09-06T19:34:28.657Z')
    const local = instance.local()
    expect(local).not.toBe(instance)
  })

  it('UTC to local', () => {
    const d = '2018-09-06'
    expect(dayjs.utc(d).local().format()).toEqual(moment.utc(d).local().format())
  })
})

it('StartOf EndOf Year ... in UTC mode', () => {
  const testArr = ['year', 'month', 'day', 'date', 'week', 'hour', 'minute', 'second']
  testArr.forEach((d) => {
    expect(dayjs().utc().startOf(d).format()).toBe(moment().utc().startOf(d).format())
    expect(dayjs().utc().endOf(d).format()).toBe(moment().utc().endOf(d).format())
  })
})

describe('UTC Set', () => {
  it('Set UTC Day', () => {
    expect(dayjs().utc().set('date', 30).valueOf()).toBe(moment().utc().set('date', 30).valueOf())
  })

  it('Set UTC Day of Week', () => {
    expect(dayjs().utc().set('day', 0).valueOf()).toBe(moment().utc().set('day', 0).valueOf())
  })

  it('Set UTC Month', () => {
    expect(dayjs().utc().set('month', 11).valueOf()).toBe(moment().utc().set('month', 11).valueOf())
  })

  it('Set UTC Year', () => {
    expect(dayjs().utc().set('year', 2008).valueOf()).toBe(moment().utc().set('year', 2008).valueOf())
  })

  it('Set UTC Hour', () => {
    expect(dayjs().utc().set('hour', 6).valueOf()).toBe(moment().utc().set('hour', 6).valueOf())
  })

  it('Set UTC Minute', () => {
    expect(dayjs().utc().set('minute', 59).valueOf()).toBe(moment().utc().set('minute', 59).valueOf())
  })

  it('Set UTC Second', () => {
    expect(dayjs().utc().set('second', 59).valueOf()).toBe(moment().utc().set('second', 59).valueOf())
  })

  it('Set UTC Millisecond', () => {
    expect(dayjs().utc().set('millisecond', 999).valueOf()).toBe(moment().utc().set('millisecond', 999).valueOf())
  })
})

it('isUTC', () => {
  expect(dayjs().isUTC()).toBe(false)
  expect(dayjs().utc().isUTC()).toBe(true)
  expect(dayjs.utc().isUTC()).toBe(true)
})

describe('UTC and local', () => {
  const localDay = dayjs(Date.UTC(2011, 1, 2, 3, 4, 5, 6))
  const utcDay = localDay.utc()

  it('utc', () => {
    expect(utcDay.date()).toBe(2)
    expect(utcDay.day()).toBe(3)
    expect(utcDay.hour()).toBe(3)
  })

  const localAnainDay = utcDay.local()
  it('local', () => {
    if (localAnainDay.utcOffset() < -180) {
      expect(localAnainDay.date()).toBe(1)
      expect(localAnainDay.day()).toBe(2)
    } else {
      expect(localAnainDay.date()).toBe(2)
      expect(localAnainDay.day()).toBe(3)
    }
  })

  const offset = Math.floor(localAnainDay.utcOffset() / 60)
  const expected = (24 + 3 + offset) % 24
  it('utcOffset', () => {
    expect(localAnainDay.hour()).toBe(expected)
    expect(dayjs().utc().utcOffset()).toBe(0)
  })
})


describe('UTC with customParseFormat', () => {
  it('Custom Parse Format', () => {
    dayjs.extend(customParseFormat)
    const instant = dayjs.utc('2011-02-02 03:04:05', 'YYYY-MM-DD HH:mm:ss')
    const momentInstant = moment.utc('2011-02-02 03:04:05', 'YYYY-MM-DD HH:mm:ss')
    expect(instant.date()).toBe(2)
    expect(instant.hour()).toBe(3)
    expect(instant.format()).toBe('2011-02-02T03:04:05Z')
    expect(instant.format()).toBe(momentInstant.format())
  })
})

describe('UTC Offset', () => {
  it('get utcOffset', () => {
    expect(dayjs().utcOffset()).toBe(moment().utcOffset())
    expect(dayjs().utc().utcOffset()).toBe(moment().utc().utcOffset())
  })

  it('get utc offset with a number value', () => {
    const time = '2021-02-28 19:40:10'
    const hoursOffset = -8
    const daysJS = dayjs(time).utc().utcOffset(hoursOffset * 60, true)
    const momentJS = moment(time).utc(true).utcOffset(hoursOffset, true)

    expect(daysJS.toISOString()).toEqual(momentJS.toISOString())
    expect(daysJS.utcOffset()).toEqual(hoursOffset * 60)
    expect(daysJS.utcOffset()).toEqual(momentJS.utcOffset())
  })

  it('get utc offset with a negative valid string value, format: HH:mm', () => {
    const time = '2021-02-28 19:40:10'
    const hoursOffset = -8
    const daysJS = dayjs(time).utc().utcOffset(`-0${Math.abs(hoursOffset)}:00`, true)
    const momentJS = moment(time).utc(true).utcOffset(`-0${Math.abs(hoursOffset)}:00`, true)

    expect(daysJS.toISOString()).toEqual(momentJS.toISOString())
    expect(daysJS.utcOffset()).toEqual(hoursOffset * 60)
    expect(daysJS.utcOffset()).toEqual(momentJS.utcOffset())
  })

  it('get utc offset with a positive valid string value, format: HH:mm', () => {
    const time = '2021-02-28 19:40:10'
    const hoursOffset = 8
    const daysJS = dayjs(time).utc().utcOffset(`+0${hoursOffset}:00`, true)
    const momentJS = moment(time).utc(true).utcOffset(`+0${hoursOffset}:00`, true)

    expect(daysJS.toISOString()).toEqual(momentJS.toISOString())
    expect(daysJS.utcOffset()).toEqual(hoursOffset * 60)
    expect(daysJS.utcOffset()).toEqual(momentJS.utcOffset())
  })

  it('get utc offset with a negative valid string value, format: HHmm', () => {
    const time = '2021-02-28 19:40:10'
    const hoursOffset = -8
    const daysJS = dayjs(time).utc().utcOffset(`-0${Math.abs(hoursOffset)}00`, true)
    const momentJS = moment(time).utc(true).utcOffset(`-0${Math.abs(hoursOffset)}00`, true)

    expect(daysJS.toISOString()).toEqual(momentJS.toISOString())
    expect(daysJS.utcOffset()).toEqual(hoursOffset * 60)
    expect(daysJS.utcOffset()).toEqual(momentJS.utcOffset())
  })

  it('get utc offset with a positive valid string value, format: HHmm', () => {
    const time = '2021-02-28 19:40:10'
    const hoursOffset = 8
    const daysJS = dayjs(time).utc().utcOffset(`+0${hoursOffset}00`, true)
    const momentJS = moment(time).utc(true).utcOffset(`+0${hoursOffset}00`, true)

    expect(daysJS.toISOString()).toEqual(momentJS.toISOString())
    expect(daysJS.utcOffset()).toEqual(hoursOffset * 60)
    expect(daysJS.utcOffset()).toEqual(momentJS.utcOffset())
  })

  it('get utc offset with an invalid string value, value: random', () => {
    const time = '2021-02-28 19:40:10'
    const daysJS = dayjs(time, { utc: true }).utc(true).utcOffset('random')
    const momentJS = moment(time).utc(true).utcOffset('random')

    expect(daysJS.toISOString()).toEqual(momentJS.toISOString())
    expect(daysJS.utcOffset()).toEqual(0)
    expect(daysJS.utcOffset()).toEqual(momentJS.utcOffset())
  })
})

describe('Diff', () => {
  const d1 = '2021-06-07'
  const d2 = '2021-06-06'
  it('utc.diff(utc)', () => {
    [dayjs, moment].forEach((_) => {
      expect(_.utc(d1).diff(_.utc(d2), 'days')).toBe(1)
      expect(_.utc(d1).diff(_.utc(d2), 'm')).toBe(1440)
    })
  })
  it('default diff', () => {
    expect(dayjs().diff()).toBeDefined()
  })
  it('local.diff(utc)', () => {
    expect(dayjs(d1).diff(dayjs.utc(d2), 'days'))
      .toBe(moment(d1).diff(moment.utc(d2), 'days'))
    expect(dayjs(d1).diff(dayjs.utc(d2), 'm'))
      .toBe(moment(d1).diff(moment.utc(d2), 'm'))
  })
  it('utc.diff(local)', () => {
    expect(dayjs.utc(d1).diff(d2, 'days'))
      .toBe(moment.utc(d1).diff(d2, 'days'))
    expect(dayjs.utc(d1).diff(d2, 'm'))
      .toBe(moment.utc(d1).diff(d2, 'm'))
  })
})

it('utc keepLocalTime', () => {
  const t = '2016-05-03 22:15:01'
  const d = dayjs(t).utc(true)
  const m = moment(t).utc(true)
  const fd = d.format()
  const dd = d.toDate()
  const vd = d.valueOf()
  const fm = m.format()
  const dm = m.toDate()
  const vm = m.valueOf()
  expect(fd).toEqual(fm)
  expect(fd).toEqual('2016-05-03T22:15:01Z')
  expect(dd).toEqual(dm)
  expect(vd).toEqual(vm)
})

it('utc diff undefined edge case', () => {
  expect(dayjs().diff(undefined, 'seconds')).toBeDefined()
})
