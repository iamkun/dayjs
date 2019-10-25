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
  const du = d.utcOffset(9)
  expect(d.utcOffset()).not.toBe(du.utcOffset())
  expect(d.format()).not.toBe(du.format())
})

it('utcOffset(0) enable utc mode', () => {
  expect(dayjs().utcOffset(0).format()).toBe(moment().utcOffset(0).format())
  expect(dayjs().utcOffset(0).isUTC()).toBeTruthy()
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
})
