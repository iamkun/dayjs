import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import objectSupport from '../../src/plugin/objectSupport'
import quarterOfYear from '../../src/plugin/quarterOfYear'
import utc from '../../src/plugin/utc'
import utils from '../../src/utils'

dayjs.extend(utc)
dayjs.extend(quarterOfYear)
dayjs.extend(objectSupport)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})
const now = new Date()
const currentYear = now.getFullYear()
const currentMonth = utils.s(now.getMonth() + 1, 2, '0')
const currentDate = utils.s(now.getDate(), 2, '0')
const currentUTCYear = now.getUTCFullYear()
const currentUTCMonth = utils.s(now.getUTCMonth() + 1, 2, '0')
const currentUTCDate = utils.s(now.getUTCDate(), 2, '0')
const fmt = 'YYYY-MM-DD HH:mm:ss.SSS'
const tests = [
  [{ year: 2010 }, '2010-01-01 00:00:00.000'],
  [{ year: 2010, month: 1 }, '2010-02-01 00:00:00.000'],
  [{ year: 2010, month: 1, day: 12 }, '2010-02-12 00:00:00.000'],
  [{ year: 2010, month: 1, date: 12 }, '2010-02-12 00:00:00.000'],
  [
    {
      hour: 15, minute: 25, second: 50, millisecond: 125
    },
    `${currentYear}-${currentMonth}-${currentDate} 15:25:50.125`,
    `${currentUTCYear}-${currentUTCMonth}-${currentUTCDate} 15:25:50.125`],
  [
    {
      year: 2010, month: 1, day: 12, hours: 1
    },
    '2010-02-12 01:00:00.000'
  ],
  [
    {
      year: 2010, month: 1, date: 12, hours: 1
    },
    '2010-02-12 01:00:00.000'
  ],
  [
    {
      year: 2010, month: 1, day: 12, hours: 1, minutes: 1
    },
    '2010-02-12 01:01:00.000'
  ],
  [
    {
      year: 2010, month: 1, date: 12, hours: 1, minutes: 1
    },
    '2010-02-12 01:01:00.000'
  ],
  [
    {
      year: 2010,
      month: 1,
      day: 12,
      hours: 1,
      minutes: 1,
      seconds: 1
    },
    '2010-02-12 01:01:01.000'
  ],
  [
    {
      year: 2010,
      month: 1,
      day: 12,
      hours: 1,
      minutes: 1,
      seconds: 1,
      milliseconds: 1
    },
    '2010-02-12 01:01:01.001'
  ],
  [
    {
      years: 2010,
      months: 1,
      days: 14,
      hours: 15,
      minutes: 25,
      seconds: 50,
      milliseconds: 125
    },
    '2010-02-14 15:25:50.125'
  ],
  [
    {
      year: 2010,
      month: 1,
      day: 14,
      hour: 15,
      minute: 25,
      second: 50,
      millisecond: 125
    },
    '2010-02-14 15:25:50.125'
  ],
  [
    {
      y: 2010, M: 1, d: 14, h: 15, m: 25, s: 50, ms: 125
    },
    '2010-02-14 15:25:50.125'
  ]
]

describe('parse empty object', () => {
  it('local', () => {
    expect(dayjs({}).format())
      .toBe(moment({}).format())
  })
  it('utc', () => {
    expect(dayjs.utc({}).format())
      .toBe(moment.utc({}).format())
  })
})

it('Constructor from Object', () => {
  for (let i = 0; i < tests.length; i += 1) {
    expect(dayjs(tests[i][0]).format(fmt)).toBe(tests[i][1])
    expect(moment(tests[i][0]).format(fmt)).toBe(tests[i][1])
  }
})

it('Constructor from Object UTC', () => {
  for (let i = 0; i < tests.length; i += 1) {
    const result = tests[i][2] || tests[i][1]
    expect(dayjs.utc(tests[i][0]).format(fmt)).toBe(result)
    expect(moment.utc(tests[i][0]).format(fmt)).toBe(result)
  }
})

it('Constructor from null should return Invalid Date', () => {
  expect(dayjs(null).isValid()).toBe(false)
  expect(moment(null).isValid()).toBe(false)
})

it('Set from Object', () => {
  for (let i = 0; i < tests.length; i += 1) {
    expect(dayjs(now).set(tests[i][0]).format(fmt)).toBe(moment(now).set(tests[i][0]).format(fmt))
  }
})

it('add short reverse args', () => {
  const a = dayjs({
    year: 2011,
    month: 9,
    date: 12,
    hour: 6,
    minute: 7,
    second: 8,
    millisecond: 500
  })
  expect(a.add({ ms: 50 }).millisecond()).toBe(550)
  expect(a.add({ s: 1 }).second()).toBe(9)
  expect(a.add({ m: 1 }).minute()).toBe(8)
  expect(a.add({ h: 1 }).hour()).toBe(7)
  expect(a.add({ d: 1 }).date()).toBe(13)
  expect(a.add({ w: 1 }).date()).toBe(19)
  expect(a.add({ M: 1 }).month()).toBe(10)
  expect(a.add({ y: 1 }).year()).toBe(2012)
  expect(a.add({ Q: 1 }).month()).toBe(0)

  const aM = moment({
    year: 2011,
    month: 9,
    date: 12,
    hour: 6,
    minute: 7,
    second: 8,
    millisecond: 500
  })
  expect(aM.clone().add({ ms: 50 }).millisecond()).toBe(550)
  expect(aM.clone().add({ s: 1 }).second()).toBe(9)
  expect(aM.clone().add({ m: 1 }).minute()).toBe(8)
  expect(aM.clone().add({ h: 1 }).hour()).toBe(7)
  expect(aM.clone().add({ d: 1 }).date()).toBe(13)
  expect(aM.clone().add({ w: 1 }).date()).toBe(19)
  expect(aM.clone().add({ M: 1 }).month()).toBe(10)
  expect(aM.clone().add({ y: 1 }).year()).toBe(2012)
  expect(aM.clone().add({ Q: 1 }).month()).toBe(0)

  const b = dayjs([2010, 1, 31]).add({ M: 1 })
  const c = dayjs([2010, 2, 28]).subtract({ M: 1 })
  const d = dayjs([2010, 2, 28]).subtract({ Q: 1 })

  expect(b.month()).toBe(1)
  expect(b.date()).toBe(28)
  expect(c.month()).toBe(0)
  expect(c.date()).toBe(28)
  expect(d.month()).toBe(10)
  expect(d.date()).toBe(28)
  expect(d.year()).toBe(2009)
})

it('add long reverse args', () => {
  const a = dayjs({
    year: 2011,
    month: 9,
    date: 12,
    hour: 6,
    minute: 7,
    second: 8,
    millisecond: 500
  })

  expect(a.add({ milliseconds: 50 }).millisecond()).toBe(550)
  expect(a.add({ seconds: 1 }).second()).toBe(9)
  expect(a.add({ minutes: 1 }).minute()).toBe(8)
  expect(a.add({ hours: 1 }).hour()).toBe(7)
  expect(a.add({ days: 1 }).date()).toBe(13)
  expect(a.add({ weeks: 1 }).date()).toBe(19)
  expect(a.add({ months: 1 }).month()).toBe(10)
  expect(a.add({ years: 1 }).year()).toBe(2012)
  expect(a.add({ quarters: 1 }).month()).toBe(0)
})

it('add long singular reverse args', () => {
  const a = dayjs({
    year: 2011,
    month: 9,
    date: 12,
    hour: 6,
    minute: 7,
    second: 8,
    millisecond: 500
  })

  expect(a.add({ millisecond: 50 }).millisecond()).toBe(550)
  expect(a.add({ second: 1 }).second()).toBe(9)
  expect(a.add({ minute: 1 }).minute()).toBe(8)
  expect(a.add({ hour: 1 }).hour()).toBe(7)
  expect(a.add({ day: 1 }).date()).toBe(13)
  expect(a.add({ week: 1 }).date()).toBe(19)
  expect(a.add({ month: 1 }).month()).toBe(10)
  expect(a.add({ year: 1 }).year()).toBe(2012)
  expect(a.add({ quarter: 1 }).month()).toBe(0)
})

it('add string long', () => {
  const a = dayjs({
    year: 2011,
    month: 9,
    date: 12,
    hour: 6,
    minute: 7,
    second: 8,
    millisecond: 500
  })

  expect(a.add(50, 'millisecond').millisecond()).toBe(550)
  expect(a.add(1, 'second').second()).toBe(9)
  expect(a.add(1, 'minute').minute()).toBe(8)
  expect(a.add(1, 'hour').hour()).toBe(7)
  expect(a.add(1, 'day').date()).toBe(13)
  expect(a.add(1, 'week').date()).toBe(19)
  expect(a.add(1, 'month').month()).toBe(10)
  expect(a.add(1, 'year').year()).toBe(2012)
  expect(a.add(1, 'quarter').month()).toBe(0)
})

it('add string long singular', () => {
  const a = dayjs({
    year: 2011,
    month: 9,
    date: 12,
    hour: 6,
    minute: 7,
    second: 8,
    millisecond: 500
  })

  expect(a.add(50, 'milliseconds').millisecond()).toBe(550)
  expect(a.add(1, 'seconds').second()).toBe(9)
  expect(a.add(1, 'minutes').minute()).toBe(8)
  expect(a.add(1, 'hours').hour()).toBe(7)
  expect(a.add(1, 'days').date()).toBe(13)
  expect(a.add(1, 'weeks').date()).toBe(19)
  expect(a.add(1, 'months').month()).toBe(10)
  expect(a.add(1, 'years').year()).toBe(2012)
  expect(a.add(1, 'quarters').month()).toBe(0)
})

it('add string short', () => {
  const a = dayjs({
    year: 2011,
    month: 9,
    date: 12,
    hour: 6,
    minute: 7,
    second: 8,
    millisecond: 500
  })

  expect(a.add(50, 'ms').millisecond()).toBe(550)
  expect(a.add(1, 's').second()).toBe(9)
  expect(a.add(1, 'm').minute()).toBe(8)
  expect(a.add(1, 'h').hour()).toBe(7)
  expect(a.add(1, 'd').date()).toBe(13)
  expect(a.add(1, 'w').date()).toBe(19)
  expect(a.add(1, 'M').month()).toBe(10)
  expect(a.add(1, 'y').year()).toBe(2012)
  expect(a.add(1, 'Q').month()).toBe(0)
})

it('add strings string short', () => {
  const a = dayjs({
    year: 2011,
    month: 9,
    date: 12,
    hour: 6,
    minute: 7,
    second: 8,
    millisecond: 500
  })

  expect(a.add('50', 'ms').millisecond()).toBe(550)
  expect(a.add('1', 's').second()).toBe(9)
  expect(a.add('1', 'm').minute()).toBe(8)
  expect(a.add('1', 'h').hour()).toBe(7)
  expect(a.add('1', 'd').date()).toBe(13)
  expect(a.add('1', 'w').date()).toBe(19)
  expect(a.add('1', 'M').month()).toBe(10)
  expect(a.add('1', 'y').year()).toBe(2012)
  expect(a.add('1', 'Q').month()).toBe(0)
})

it('add no string with milliseconds default', () => {
  const a = dayjs({
    year: 2011,
    month: 9,
    date: 12,
    hour: 6,
    minute: 7,
    second: 8,
    millisecond: 500
  })

  expect(a.add(50).millisecond()).toBe(550)
})

it('subtract strings string short', () => {
  const a = dayjs({
    year: 2011,
    month: 9,
    date: 12,
    hour: 6,
    minute: 7,
    second: 8,
    millisecond: 500
  })
  expect(a.subtract('50', 'ms').millisecond()).toBe(450)
  expect(a.subtract('1', 's').second()).toBe(7)
  expect(a.subtract('1', 'm').minute()).toBe(6)
  expect(a.subtract('1', 'h').hour()).toBe(5)
  expect(a.subtract('1', 'd').date()).toBe(11)
  expect(a.subtract('1', 'w').date()).toBe(5)
  expect(a.subtract('1', 'M').month()).toBe(8)
  expect(a.subtract('1', 'y').year()).toBe(2010)
  expect(a.subtract('1', 'Q').month()).toBe(6)
})

it('add decimal values of days and months', () => {
  expect(dayjs([2016, 4, 3]).add(1.6, 'days').date()).toBe(5)
  expect(dayjs([2016, 4, 3]).add(-1.6, 'days').date()).toBe(1)
  expect(dayjs([2016, 4, 1]).add(-1.6, 'days').date()).toBe(30)
  expect(dayjs([2016, 4, 3]).add(1.6, 'months').month()).toBe(4)
  expect(dayjs([2016, 4, 3]).add(-1.6, 'months').month()).toBe(1)
  expect(dayjs([2016, 1, 3]).add(-1.6, 'months').month()).toBe(11)
  expect(dayjs([2016, 4, 3]).subtract(1.6, 'days').date()).toBe(1)
  expect(dayjs([2016, 4, 2]).subtract(1.6, 'days').date()).toBe(31)
  expect(dayjs([2016, 2, 1]).subtract(1.1, 'days').date()).toBe(31)
  expect(dayjs([2016, 4, 3]).subtract(-1.6, 'days').date()).toBe(5)
  expect(dayjs([2016, 4, 30]).subtract(-1.6, 'days').date()).toBe(2)
  expect(dayjs([2016, 4, 3]).subtract(1.6, 'months').month()).toBe(1)
  expect(dayjs([2016, 4, 3]).subtract(-1.6, 'months').month()).toBe(4)
  expect(dayjs([2016, 12, 31]).subtract(-1.6, 'months').month()).toBe(0)
  expect(dayjs([2016, 1, 1]).add(1.6, 'years').format('YYYY-MM-DD')).toBe('2017-01-01')
  expect(dayjs([2016, 7, 1]).add(1.6, 'years').format('YYYY-MM-DD')).toBe('2017-07-01')
  expect(dayjs([2016, 1, 1]).add(1.1, 'quarters').format('YYYY-MM-DD')).toBe('2016-04-01')
})

it('returns valid date on undefined', () => {
  expect(dayjs().isValid()).toBe(true)
})

it('returns invalid date on null', () => {
  expect(dayjs(null).isValid()).toBe(false)
})
