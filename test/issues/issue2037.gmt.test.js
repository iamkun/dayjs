import moment from 'moment-timezone'
import dayjs from '../../src'
import timezone from '../../src/plugin/timezone'
import utc from '../../src/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('UTC')

const LDN = 'Europe/London'

function expectDayjsEqualsMoment(dayjsDate, momentDate) {
  expect(dayjsDate.isValid()).toBe(momentDate.isValid())
  expect(dayjsDate.toISOString()).toBe(momentDate.toISOString())
  expect(dayjsDate.valueOf()).toBe(momentDate.valueOf())
  expect(Math.abs(dayjsDate.millisecond() - momentDate.millisecond())).toBeLessThanOrEqual(1)
  expect(dayjsDate.toDate()).toEqual(momentDate.toDate())
  expect(dayjsDate.toJSON()).toEqual(momentDate.toJSON())
  expect(dayjsDate.format()).toBe(momentDate.format())
  expect(dayjsDate.utcOffset()).toBe(momentDate.utcOffset())
}

it('tz UTC of "0" should return correct date', () => {
  const dayjsDate = dayjs.tz(0, 'UTC')
  const momentDate = moment.tz(0, 'UTC')

  expect(dayjsDate.format()).toBe('1970-01-01T00:00:00Z')
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('tz UTC of "0 + 0min" should return correct date', () => {
  const dayjsDate = dayjs.tz(0, 'UTC').add(0, 'minutes')
  const momentDate = moment.tz(0, 'UTC').add(0, 'minutes')

  expect(dayjsDate.format()).toBe('1970-01-01T00:00:00Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('tz UTC of "0 + 1min" should return correct date', () => {
  const dayjsDate = dayjs.tz(0, 'UTC').add(1, 'minutes')
  const momentDate = moment.tz(0, 'UTC').add(1, 'minutes')

  expect(dayjsDate.format()).toBe('1970-01-01T00:01:00Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz(0, "GMT") should return correct date', () => {
  const dayjsDate = dayjs.tz(0, 'GMT')
  const momentDate = moment.tz(0, 'GMT')

  expect(dayjsDate.format()).toBe('1970-01-01T00:00:00Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz(0, "GMT") with "+ 0min" should return correct date', () => {
  const dayjsDate = dayjs.tz(0, 'GMT').add(0, 'minutes')
  const momentDate = moment.tz(0, 'GMT').add(0, 'minutes')

  expect(dayjsDate.format()).toBe('1970-01-01T00:00:00Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz(0, "GMT") with "+ 1min" should return correct date', () => {
  const dayjsDate = dayjs.tz(0, 'GMT').add(1, 'minutes')
  const momentDate = moment.tz(0, 'GMT').add(1, 'minutes')

  expect(dayjsDate.format()).toBe('1970-01-01T00:01:00Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz("2023-01-22T10:21:32", "GMT") should return correct date', () => {
  const dateString = '2023-01-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, 'GMT')
  const momentDate = moment.tz(dateString, 'GMT')

  expect(dayjsDate.format()).toBe('2023-01-22T10:21:32Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz("2023-01-22T10:21:32", "GMT") with "+ 0min" should return correct date', () => {
  const dateString = '2023-01-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, 'GMT').add(0, 'minutes')
  const momentDate = moment.tz(dateString, 'GMT').add(0, 'minutes')

  expect(dayjsDate.format()).toBe('2023-01-22T10:21:32Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz("2023-01-22T10:21:32", "GMT") with "+ 1min" should return correct date', () => {
  const dateString = '2023-01-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, 'GMT').add(1, 'minutes')
  const momentDate = moment.tz(dateString, 'GMT').add(1, 'minutes')

  expect(dayjsDate.format()).toBe('2023-01-22T10:22:32Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

// GMT with DST
it('dayjs.tz("2023-06-22T10:21:32", "GMT") should return correct date', () => {
  const dateString = '2023-06-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, 'GMT')
  const momentDate = moment.tz(dateString, 'GMT')

  expect(dayjsDate.format()).toBe('2023-06-22T10:21:32Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz("2023-06-22T10:21:32", "GMT") with "+ 0min" should return correct date', () => {
  const dateString = '2023-06-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, 'GMT').add(0, 'minutes')
  const momentDate = moment.tz(dateString, 'GMT').add(0, 'minutes')

  expect(dayjsDate.format()).toBe('2023-06-22T10:21:32Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz("2023-06-22T10:21:32", "GMT") with "+ 1min" should return correct date', () => {
  const dateString = '2023-06-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, 'GMT').add(1, 'minutes')
  const momentDate = moment.tz(dateString, 'GMT').add(1, 'minutes')

  expect(dayjsDate.format()).toBe('2023-06-22T10:22:32Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz("2023-01-22T10:21:32", "Europe/London") should return correct date', () => {
  const dateString = '2023-01-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, LDN)
  const momentDate = moment.tz(dateString, LDN)

  expect(dayjsDate.format()).toBe('2023-01-22T10:21:32Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz("2023-01-22T10:21:32", "Europe/London") with "+ 0min" should return correct date', () => {
  const dateString = '2023-01-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, LDN).add(0, 'minutes')
  const momentDate = moment.tz(dateString, LDN).add(0, 'minutes')

  expect(dayjsDate.format()).toBe('2023-01-22T10:21:32Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz("2023-01-22T10:21:32", "Europe/London") with "+ 1min" should return correct date', () => {
  const dateString = '2023-01-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, LDN).add(1, 'minutes')
  const momentDate = moment.tz(dateString, LDN).add(1, 'minutes')

  expect(dayjsDate.format()).toBe('2023-01-22T10:22:32Z')
  expect(dayjsDate.isUTC()).toBeTruthy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

// GMT with DST
it('dayjs.tz("2023-06-22T10:21:32", "Europe/London") should return correct date', () => {
  const dateString = '2023-06-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, LDN)
  const momentDate = moment.tz(dateString, LDN)

  expect(dayjsDate.format()).toBe('2023-06-22T10:21:32+01:00')
  expect(dayjsDate.isUTC()).toBeFalsy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz("2023-06-22T10:21:32", "Europe/London") with "+ 0min" should return correct date', () => {
  const dateString = '2023-06-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, LDN).add(0, 'minutes')
  const momentDate = moment.tz(dateString, LDN).add(0, 'minutes')

  expect(dayjsDate.format()).toBe('2023-06-22T10:21:32+01:00')
  expect(dayjsDate.isUTC()).toBeFalsy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

it('dayjs.tz("2023-06-22T10:21:32", "Europe/London") with "+ 1min" should return correct date', () => {
  const dateString = '2023-06-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, LDN).add(1, 'minutes')
  const momentDate = moment.tz(dateString, LDN).add(1, 'minutes')

  expect(dayjsDate.format()).toBe('2023-06-22T10:22:32+01:00')
  expect(dayjsDate.isUTC()).toBeFalsy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

// CET without DST
it('dayjs.tz("2023-01-22T10:21:32", "CET") should return correct date', () => {
  const dateString = '2023-01-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, 'CET')
  const momentDate = moment.tz(dateString, 'CET')

  expect(dayjsDate.format()).toBe('2023-01-22T10:21:32+01:00')
  expect(dayjsDate.isUTC()).toBeFalsy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})

// CET with DST
it('dayjs.tz("2023-06-22T10:21:32", "CET") should return correct date', () => {
  const dateString = '2023-06-22T10:21:32'
  const dayjsDate = dayjs.tz(dateString, 'CET')
  const momentDate = moment.tz(dateString, 'CET')

  expect(dayjsDate.format()).toBe('2023-06-22T10:21:32+02:00')
  expect(dayjsDate.isUTC()).toBeFalsy()
  expectDayjsEqualsMoment(dayjsDate, momentDate)
})
