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

it('utcOffset', () => {
  expect(dayjs.parseZone('2021-10-24T12:43:00+03:00').utcOffset())
    .toBe(moment.parseZone('2021-10-24T12:43:00+03:00').utcOffset())
  expect(dayjs.parseZone('2021-10-24T12:43:00-02:30').utcOffset())
    .toBe(moment.parseZone('2021-10-24T12:43:00-02:30').utcOffset())
  expect(dayjs.parseZone('2021-10-24T12:43:00+00:00').utcOffset())
    .toBe(moment.parseZone('2021-10-24T12:43:00+00:00').utcOffset())
  expect(dayjs.parseZone('2021-10-24T12:43:00Z').utcOffset())
    .toBe(moment.parseZone('2021-10-24T12:43:00Z').utcOffset())
})

it('format', () => {
  expect(dayjs.parseZone('2021-10-24T12:43:00-05:00').format())
    .toBe(moment.parseZone('2021-10-24T12:43:00-05:00').format())
  expect(dayjs.parseZone('2021-10-24T12:43:00+16:30').format())
    .toBe(moment.parseZone('2021-10-24T12:43:00+16:30').format())
  expect(dayjs.parseZone('2021-10-24T12:43:00+00:00').format())
    .toBe(moment.parseZone('2021-10-24T12:43:00+00:00').format())
  expect(dayjs.parseZone('2021-10-24T12:43:00Z').format())
    .toBe(moment.parseZone('2021-10-24T12:43:00Z').format())
})

it('valueOf, toDate, toString, toISOString should be the same as original', () => {
  const d = dayjs('2021-05-11T12:43:00+05:30')
  const du = dayjs.parseZone('2021-05-11T12:43:00+05:30')
  const mu = moment.parseZone('2021-05-11T12:43:00+05:30')
  expect(d.valueOf()).toBe(du.valueOf())
  expect(du.valueOf()).toBe(mu.valueOf())
  expect(d.toDate()).toEqual(du.toDate())
  expect(du.toDate()).toEqual(mu.toDate())
  expect(du.toISOString()).toEqual(mu.toISOString())
  expect(d.toString()).toEqual(d.toString())
})

it('clone', () => {
  const du = dayjs.parseZone('2021-02-18T11:22:00-04:00')
  const duClone = du.clone()
  expect(du.valueOf()).toBe(duClone.valueOf())
  expect(du.format()).toBe(duClone.format())
  expect(du.utcOffset()).toBe(duClone.utcOffset())
})

it('enables utc mode', () => {
  expect(dayjs.parseZone('2021-02-18T11:22:00+00:00').isUTC()).toBeTruthy()
  expect(dayjs.parseZone('2021-02-18T11:22:00-00:00').isUTC()).toBeTruthy()
  expect(dayjs.parseZone('2021-02-18T11:22:00Z').isUTC()).toBeTruthy()
  expect(dayjs.parseZone('2021-02-18T11:22:00').isUTC()).toBeTruthy()
})

it('without timezone', () => {
  const du = dayjs.parseZone('2021-02-18T11:22:00')
  const mu = moment.parseZone('2021-02-18T11:22:00')
  expect(du.isUTC()).toBe(mu.isUTC())
  expect(du.format()).toBe(mu.format())
  expect(du.utcOffset()).toBe(mu.utcOffset())
})

it('correctly set and add hours', () => {
  const d10 = dayjs.parseZone('2000-01-30T06:31:00+10:00')
  const dm8 = dayjs.parseZone('2000-01-30T06:31:00-08:00')

  expect(d10.hour(5).hour()).toBe(5)
  expect(d10.hour(5).add(1, 'hour').hour()).toBe(6)
  expect(d10.hour(5).add(-10, 'hour').hour()).toBe(19)

  expect(dm8.hour(5).hour()).toBe(5)
  expect(dm8.hour(5).add(1, 'hour').hour()).toBe(6)
  expect(dm8.hour(5).add(-10, 'hour').hour()).toBe(19)
})

it('datejs, Date, null and undefined inputs', () => {
  const d = new Date(2019, 8, 11, 0, 0, 0)
  const du = dayjs.parseZone('2021-02-18T11:22:00+07:00')
  const mu = moment.parseZone('2021-02-18T11:22:00+07:00')
  expect(dayjs.parseZone(d).format()).toBe(moment.parseZone(d).format())
  expect(dayjs.parseZone(du).format()).toBe(moment.parseZone(mu).format())
  expect(dayjs.parseZone(null).format()).toBe('Invalid Date')
  expect(dayjs.parseZone().format()).toBe(moment.parseZone().format())
})
