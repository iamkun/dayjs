import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import utc from '../../src/plugin/utc'

dayjs.extend(utc)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Set utcOffset -> Get utcOffset', () => {
  expect(dayjs().utcOffset(540).utcOffset()).toBe(moment().utcOffset(540).utcOffset())
  expect(dayjs().utcOffset(540).format()).toBe(moment().utcOffset(540).format())
  expect(dayjs().utcOffset(60).format()).toBe(moment().utcOffset(60).format())
  expect(dayjs().utcOffset(8).format()).toBe(moment().utcOffset(8).format())

  expect(dayjs().utcOffset(-540).utcOffset()).toBe(moment().utcOffset(-540).utcOffset())
  expect(dayjs().utcOffset(-540).format()).toBe(moment().utcOffset(-540).format())

  expect(dayjs().utcOffset(-60).format()).toBe(moment().utcOffset(-60).format())
  expect(dayjs().utcOffset(-8).format()).toBe(moment().utcOffset(-8).format())
})

it('valueOf, toDate, toString, toISOString should be the same as original', () => {
  const d = dayjs()
  const du = dayjs().utcOffset(9)
  const mu = moment().utcOffset(9)
  expect(d.valueOf()).toBe(du.valueOf())
  expect(du.valueOf()).toBe(mu.valueOf())
  expect(d.toDate()).toEqual(du.toDate())
  expect(du.toDate()).toEqual(mu.toDate())
  expect(du.toISOString()).toEqual(mu.toISOString())
  expect(d.toString()).toEqual(d.toString())
})

it('clone', () => {
  const du = dayjs().utcOffset(9)
  const duClone = du.clone()
  expect(du.valueOf()).toBe(duClone.valueOf())
  expect(du.format()).toBe(duClone.format())
  expect(du.utcOffset()).toBe(duClone.utcOffset())
})

it('immutable', () => {
  const d = dayjs()
  const du = d.utcOffset(d.utcOffset() + 1)
  expect(d.utcOffset()).not.toBe(du.utcOffset())
  expect(d.format()).not.toBe(du.format())
})

it('utcOffset(0) enable utc mode', () => {
  expect(dayjs().utcOffset(0).format()).toBe(moment().utcOffset(0).format())
  expect(dayjs().utcOffset(0).isUTC()).toBeTruthy()
})

it('utcOffset keepLocalTime', () => {
  const d = '2000-01-01T06:00:00Z'
  expect(dayjs.utc(d).utcOffset(5, true).format())
    .toBe(moment.utc(d).utcOffset(5, true).format())
  expect(dayjs.utc(d).utcOffset(0, true).format())
    .toBe(moment.utc(d).utcOffset(0, true).format())
  expect(dayjs.utc(d).utcOffset(-5, true).format())
    .toBe(moment.utc(d).utcOffset(-5, true).format())
  const d2 = '2016-01-01 00:00:00'
  expect(dayjs(d2).utcOffset(0, true).format())
    .toBe(moment(d2).utcOffset(0, true).format())
  expect(dayjs(d2).utcOffset(-5, true).format())
    .toBe(moment(d2).utcOffset(-5, true).format())
  expect(dayjs(d2).utcOffset(5, true).format())
    .toBe(moment(d2).utcOffset(5, true).format())
})

test('UTC mode', () => {
  const d = dayjs.utc('2000-01-01T06:00:00Z')
  expect(d.isUTC()).toBeTruthy()
  expect(d.utcOffset(0).isUTC()).toBeTruthy()
  expect(d.utcOffset(1).isUTC()).toBeFalsy()
})

test('change hours when changing the utc offset in UTC mode', () => {
  const d = dayjs.utc('2000-01-01T06:31:00Z')
  expect(d.hour()).toBe(6)
  expect(d.utcOffset(0).hour()).toBe(6)
  expect(d.utcOffset(-60).hour()).toBe(5)
  expect(d.utcOffset(60).hour()).toBe(7)
  expect(d.utcOffset(-30).format('HH:mm')).toBe('06:01')
  expect(d.utcOffset(30).format('HH:mm')).toBe('07:01')
  expect(d.utcOffset(-1380).format('HH:mm')).toBe('07:31')
})

test('correctly set and add hours in offset mode', () => {
  const d10 = dayjs('2000-01-30T06:31:00+10:00').utcOffset(10)
  const dm8 = dayjs('2000-01-30T06:31:00-08:00').utcOffset(-8)

  expect(d10.hour(5).hour()).toBe(5)
  expect(d10.hour(5).add(1, 'hour').hour()).toBe(6)
  expect(d10.hour(5).add(-10, 'hour').hour()).toBe(19)

  expect(dm8.hour(5).hour()).toBe(5)
  expect(dm8.hour(5).add(1, 'hour').hour()).toBe(6)
  expect(dm8.hour(5).add(-10, 'hour').hour()).toBe(19)
})

test('keep hours when adding month in offset mode', () => {
  const d10 = dayjs('2000-01-30T06:31:00+10:00').utcOffset(10)
  const dm8 = dayjs('2000-01-30T06:31:00-08:00').utcOffset(-8)

  expect(d10.add(1, 'month').hour()).toBe(6)
  expect(dm8.add(1, 'month').hour()).toBe(6)

  expect(d10.add(-2, 'month').hour()).toBe(6)
  expect(dm8.add(-2, 'month').hour()).toBe(6)
})

test('utc costrustor', () => {
  const d = new Date(2019, 8, 11, 0, 0, 0).getTime()
  expect(moment(d).utc().utcOffset(480).valueOf())
    .toBe(dayjs(d).utc().utcOffset(480).valueOf())

  expect(moment(d).utc().local()
    .utcOffset(480)
    .valueOf())
    .toBe(dayjs(d).utc().local()
      .utcOffset(480)
      .valueOf())
})

test('utc startOf', () => {
  const d = new Date(2019, 8, 11, 0, 0, 0, 0).getTime()
  expect(moment(d).utc().utcOffset(480).endOf('day')
    .valueOf())
    .toBe(dayjs(d).utc().utcOffset(480).endOf('day')
      .valueOf())

  expect(moment(d).utc().utcOffset(480).endOf('day')
    .valueOf())
    .toBe(dayjs(d).utc().utcOffset(480).endOf('day')
      .valueOf())
  const d2 = '2017-07-20T11:00:00+00:00'
  const d2d = dayjs(d2).utcOffset(-12).startOf('day').valueOf()
  const d2m = moment(d2).utcOffset(-12).startOf('day').valueOf()
  expect(d2d)
    .toBe(d2m)
  expect(d2d)
    .toBe(1500465600000)
})

test('offset mode startOf/endOf matches moment for larger and smaller units', () => {
  const d = '2019-09-11T12:34:56.789Z'
  const units = ['year', 'hour', 'minute', 'second']

  units.forEach((unit) => {
    expect(dayjs(d).utcOffset(480).startOf(unit).valueOf())
      .toBe(moment(d).utcOffset(480).startOf(unit).valueOf())
    expect(dayjs(d).utcOffset(480).endOf(unit).valueOf())
      .toBe(moment(d).utcOffset(480).endOf(unit).valueOf())
  })

  const original = dayjs(d).utcOffset(480)
  expect(original.startOf('otherString').valueOf()).toBe(original.valueOf())
  expect(original.endOf('otherString').valueOf()).toBe(original.valueOf())
})

test('offset mode startOf/endOf week respects locale weekStart', () => {
  moment.updateLocale('offset-week-start', { week: { dow: 3 } })

  const sunday = '2019-09-01T12:00:00Z'
  const friday = '2019-09-06T12:00:00Z'
  const locale = { name: 'offset-week-start', weekStart: 3 }

  expect(dayjs(sunday).utcOffset(480).locale(locale).startOf('week')
    .valueOf())
    .toBe(moment(sunday).utcOffset(480).locale('offset-week-start').startOf('week')
      .valueOf())
  expect(dayjs(sunday).utcOffset(480).locale(locale).endOf('week')
    .valueOf())
    .toBe(moment(sunday).utcOffset(480).locale('offset-week-start').endOf('week')
      .valueOf())

  expect(dayjs(friday).utcOffset(480).locale(locale).startOf('week')
    .valueOf())
    .toBe(moment(friday).utcOffset(480).locale('offset-week-start').startOf('week')
      .valueOf())
  expect(dayjs(friday).utcOffset(480).locale(locale).endOf('week')
    .valueOf())
    .toBe(moment(friday).utcOffset(480).locale('offset-week-start').endOf('week')
      .valueOf())
})

test('cloning dates modified with utcOffset', () => {
  const djs = dayjs('2023-10-29T00:00:00+03:00')

  const tests = [
    djs,
    djs.utcOffset(-240),
    djs.utcOffset(-240, true),
    djs.utcOffset(120),
    djs.utcOffset(120, true),
    djs.utcOffset(0),
    djs.utcOffset(0, true)
  ]

  tests.forEach((d) => {
    expect(dayjs(d).format()).toEqual(d.format())
  })
})
