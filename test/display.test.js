import moment from 'moment'
import MockDate from 'mockdate'
import timeago from 'timeago.js'
import dayjs from '../src'
import en from '../src/locale/en'
import es from '../src/locale/es'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format no formatStr', () => {
  expect(dayjs().format()).toBe(moment().format())
})

it('Format Year YY YYYY', () => {
  expect(dayjs().format('YY')).toBe(moment().format('YY'))
  expect(dayjs().format('YYYY')).toBe(moment().format('YYYY'))
})

it('Format Month M MM MMM MMMM', () => {
  expect(dayjs().format('M')).toBe(moment().format('M'))
  expect(dayjs().format('MM')).toBe(moment().format('MM'))
  expect(dayjs().format('MMM')).toBe(moment().format('MMM'))
  expect(dayjs().format('MMMM')).toBe(moment().format('MMMM'))
})

it('Format Day of Month D DD 1 - 31', () => {
  expect(dayjs().format('D')).toBe(moment().format('D'))
  expect(dayjs().format('DD')).toBe(moment().format('DD'))
})

it('Format Day of Week d Sun - Sat', () => {
  expect(dayjs().format('d')).toBe(moment().format('d'))
  expect(dayjs().format('dddd')).toBe(moment().format('dddd'))
})

it('Format Hour H HH 24-hour', () => {
  expect(dayjs().format('H')).toBe(moment().format('H'))
  expect(dayjs().format('HH')).toBe(moment().format('HH'))
})

it('Format Hour h hh 12-hour', () => {
  MockDate.set(new Date('2018-05-02T00:00:00.000'))
  expect(dayjs().format('h')).toBe(moment().format('h'))
  expect(dayjs().format('hh')).toBe(moment().format('hh'))

  MockDate.set(new Date('2018-05-02T01:00:00.000'))
  expect(dayjs().format('h')).toBe(moment().format('h'))
  expect(dayjs().format('hh')).toBe(moment().format('hh'))

  MockDate.set(new Date('2018-05-02T23:00:00.000'))
  expect(dayjs().format('h')).toBe(moment().format('h'))
  expect(dayjs().format('hh')).toBe(moment().format('hh'))
})

it('Format meridiens a A am / pm', () => {
  MockDate.set(new Date('2018-05-02T01:00:00.000'))
  expect(dayjs().format('a')).toBe(moment().format('a'))
  expect(dayjs().format('A')).toBe(moment().format('A'))

  MockDate.set(new Date('2018-05-02T23:00:00.000'))
  expect(dayjs().format('a')).toBe(moment().format('a'))
  expect(dayjs().format('A')).toBe(moment().format('A'))
})

it('Format Minute m mm', () => {
  expect(dayjs().format('m')).toBe(moment().format('m'))
  expect(dayjs().format('mm')).toBe(moment().format('mm'))
})

it('Format Second s ss SSS', () => {
  expect(dayjs().format('s')).toBe(moment().format('s'))
  expect(dayjs().format('ss')).toBe(moment().format('ss'))
  expect(dayjs().format('SSS')).toBe(moment().format('SSS'))
  const date = '2011-11-05T14:48:01.002Z'
  expect(dayjs(date).format('s-ss-SSS')).toBe(moment(date).format('s-ss-SSS'))
})


it('Format Time Zone ZZ', () => {
  MockDate.set(new Date('2018-05-02T23:00:00.000'), 60 * 8)
  expect(dayjs().format('Z')).toBe(moment().format('Z'))
  expect(dayjs().format('ZZ')).toBe(moment().format('ZZ'))
  MockDate.set(new Date('2018-05-02T23:00:00.000'), 60 * 8 * -1)
  expect(dayjs().format('ZZ')).toBe(moment().format('ZZ'))
  MockDate.set(new Date('2018-05-02T23:00:00.000'), 0)
  expect(dayjs().format('ZZ')).toBe(moment().format('ZZ'))
  MockDate.set(new Date('2018-05-02T23:00:00.000'), 60 * 10)
  expect(dayjs().format('ZZ')).toBe(moment().format('ZZ'))
  MockDate.set(new Date('2018-05-02T23:00:00.000'), 60 * 11 * -1)
  expect(dayjs().format('ZZ')).toBe(moment().format('ZZ'))
  MockDate.set(new Date('2018-05-02T23:00:00.000'), 60 * 5.5 * -1)
  expect(dayjs().format('ZZ')).toBe(moment().format('ZZ'))
})

it('Format Complex with other string - : / ', () => {
  const string = 'YY-M-D / HH:mm:ss'
  expect(dayjs().format(string)).toBe(moment().format(string))
})

it('Format Escaping characters', () => {
  const string = '[Z] Z'
  expect(dayjs().format(string)).toBe(moment().format(string))
})

describe('Difference', () => {
  it('empty -> default milliseconds', () => {
    const dateString = '20110101'
    const dayjsA = dayjs()
    const dayjsB = dayjs(dateString)
    const momentA = moment()
    const momentB = moment(dateString)
    expect(dayjsA.diff(dayjsB)).toBe(momentA.diff(momentB))
  })

  it('diff -> none dayjs object', () => {
    const dateString = '2013-02-08'
    const dayjsA = dayjs()
    const dayjsB = new Date(dateString)
    const momentA = moment()
    const momentB = new Date(dateString)
    expect(dayjsA.diff(dayjsB)).toBe(momentA.diff(momentB))
  })

  it('diff -> in seconds, minutes, hours, days, weeks, months, quarters, years ', () => {
    const dayjsA = dayjs()
    const dayjsB = dayjs().add(1000, 'days')
    const dayjsC = dayjs().subtract(1000, 'days')
    const momentA = moment()
    const momentB = moment().add(1000, 'days')
    const momentC = moment().subtract(1000, 'days')
    const units = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'quarters', 'years']
    units.forEach((unit) => {
      expect(dayjsA.diff(dayjsB, unit)).toBe(momentA.diff(momentB, unit))
      expect(dayjsA.diff(dayjsB, unit, true)).toBe(momentA.diff(momentB, unit, true))
      expect(dayjsA.diff(dayjsC, unit)).toBe(momentA.diff(momentC, unit))
      expect(dayjsA.diff(dayjsC, unit, true)).toBe(momentA.diff(momentC, unit, true))
    })
  })

  it('Special diff in month according to moment.js', () => {
    const dayjsA = dayjs('20160115')
    const dayjsB = dayjs('20160215')
    const dayjsC = dayjs('20170115')
    const momentA = moment('20160115')
    const momentB = moment('20160215')
    const momentC = moment('20170115')
    const units = ['months', 'quarters', 'years']
    units.forEach((unit) => {
      expect(dayjsA.diff(dayjsB, unit)).toBe(momentA.diff(momentB, unit))
      expect(dayjsA.diff(dayjsB, unit, true)).toBe(momentA.diff(momentB, unit, true))
      expect(dayjsA.diff(dayjsC, unit)).toBe(momentA.diff(momentC, unit))
      expect(dayjsA.diff(dayjsC, unit, true)).toBe(momentA.diff(momentC, unit, true))
    })
  })
  it('fromNow -> in seconds, days, weeks, months, quarters, years ', () => {
    const dayjsA = dayjs().locale(en)
    const dayjsB = dayjs().add(1000, 'days')
    const dayjsC = dayjs().subtract(1000, 'days')
    const dayjsD = dayjs().add(20, 'days')
    const dayjsE = dayjs().subtract(30, 'seconds')
    const dayjsF = dayjs().subtract(5, 'hours')
    const dayjsG = dayjs().add(1001, 'days')

    expect(dayjsA.fromNow(dayjsB)).toBe(timeago(dayjsA.toDate()).format(dayjsB.toDate()))
    expect(dayjsA.fromNow(dayjsC)).toBe(timeago(dayjsA.toDate()).format(dayjsC.toDate()))
    expect(dayjsA.fromNow(dayjsD)).toBe(timeago(dayjsA.toDate()).format(dayjsD.toDate()))
    expect(dayjsA.fromNow(dayjsE)).toBe(timeago(dayjsA.toDate()).format(dayjsE.toDate()))
    expect(dayjsA.fromNow(dayjsF)).toBe(timeago(dayjsA.toDate()).format(dayjsF.toDate()))
    expect(dayjsB.fromNow(dayjsC)).toBe(timeago(dayjsB.toDate()).format(dayjsC.toDate()))
    expect(dayjsB.fromNow(dayjsB)).toBe(timeago(dayjsB.toDate()).format(dayjsB.toDate()))
    expect(dayjsG.fromNow(dayjsB)).toBe(timeago(dayjsG.toDate()).format(dayjsB.toDate()))
  })

  it('fromNow -> in seconds, days, weeks, months, quarters, years in Spanish ', () => {
    const dayjsA = dayjs().locale(es)
    const dayjsB = dayjs().locale(es).add(1000, 'days')
    const dayjsC = dayjs().subtract(1000, 'days').locale(es)
    const dayjsD = dayjs().add(20, 'days').locale(es)
    const dayjsE = dayjs().subtract(30, 'seconds').locale(es)
    const dayjsF = dayjs().subtract(5, 'hours').locale(es)
    const dayjsG = dayjs().add(1001, 'days').locale(es)

    expect(dayjsA.fromNow(dayjsB)).toBe('en 2 años')
    expect(dayjsA.fromNow(dayjsC)).toBe('hace 2 años')
    expect(dayjsA.fromNow(dayjsD)).toBe('en 2 semanas')
    expect(dayjsA.fromNow(dayjsE)).toBe('hace 30 segundos')
    expect(dayjsA.fromNow(dayjsF)).toBe('hace 5 horas')
    expect(dayjsB.fromNow(dayjsC)).toBe('hace 5 años')
    expect(dayjsB.fromNow(dayjsB)).toBe('justo ahora')
    expect(dayjsG.fromNow(dayjsB)).toBe('hace 1 día')
  })

  it('Unix Timestamp (milliseconds)', () => {
    expect(dayjs().valueOf()).toBe(moment().valueOf())
  })

  it('Unix Timestamp (seconds)', () => {
    expect(dayjs().unix()).toBe(moment().unix())
  })

  it('Days in Month', () => {
    expect(dayjs().daysInMonth()).toBe(moment().daysInMonth())
    expect(dayjs('20140201').daysInMonth()).toBe(moment('20140201').daysInMonth())
  })

  it('As Javascript Date -> toDate', () => {
    const base = dayjs()
    const momentBase = moment()
    const jsDate = base.toDate()
    expect(jsDate).toEqual(momentBase.toDate())
    expect(jsDate).toEqual(new Date())

    jsDate.setFullYear(1970)
    expect(jsDate.toUTCString()).not.toBe(base.toString())
  })

  it('As Array -> toArray', () => {
    expect(dayjs().toArray()).toEqual(moment().toArray())
  })

  it('As JSON -> toJSON', () => {
    expect(dayjs().toJSON()).toBe(moment().toJSON())
  })

  it('As ISO 8601 String -> toISOString e.g. 2013-02-04T22:44:30.652Z', () => {
    expect(dayjs().toISOString()).toBe(moment().toISOString())
  })

  it('As Object -> toObject', () => {
    expect(dayjs().toObject()).toEqual(moment().toObject())
  })
})
