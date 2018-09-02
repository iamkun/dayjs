import MockDate from 'mockdate'
import dayjs from '../../src'
import timeZonePlugin from '../../src/plugin/timeZone'

dayjs.extend(timeZonePlugin)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Construct from string in a specified time zone', () => {
  const input = '2018-09-02 23:01:22'
  const timeZone = 'Europe/Berlin'
  const output = '2018-09-02T21:01:22.000Z'
  expect(dayjs(input, { timeZone }).toISOString()).toEqual(output)
})

it('Fail constructing with an invalid time zone', () => {
  const input = '2018-09-02 23:01:22'
  const timeZone = 'Invalid'
  expect(dayjs(input, { timeZone }).isValid()).toBeFalsy()
})

it('Format date converted to other time zone', () => {
  const input = '2018-09-02T21:01:22Z'
  const format = 'D.M YYYY H:mm:ss [GMT]ZZ (z)'
  const timeZone = 'Europe/Berlin'
  const output = '2.9 2018 23:01:22 GMT+0200 (CEST)'
  expect(dayjs(input).format(format, { timeZone })).toEqual(output)
})

it('Format date in the locaL time zone to THE default format', () => {
  const input = '2018-09-02 21:01:22'
  expect(dayjs(input).format().startsWith('2018-09-02T')).toBeTruthy()
})

it('Format date converted to a time zone to a default format', () => {
  const input = '2018-09-02T21:01:22Z'
  const timeZone = 'Pacific/Honolulu'
  const output = '2018-09-02T11:01:22-10:00'
  expect(dayjs(input).format({ timeZone })).toEqual(output)
})
