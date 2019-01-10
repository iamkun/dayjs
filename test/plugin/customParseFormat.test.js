import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import customParseFormat from '../../src/plugin/customParseFormat'

dayjs.extend(customParseFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('does not break the built-in parsing', () => {
  const input = '2018-05-02 01:02:03.004'
  expect(dayjs(input).valueOf()).toBe(moment(input).valueOf())
})

it('parse padded string', () => {
  const input = '2018-05-02 01:02:03.004 AM +01:00'
  const format = 'YYYY-MM-DD HH:mm:ss.SSS A Z'
  expect(dayjs(input, { format }).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse unpadded string', () => {
  const input = '2.5.18 1:2:3.4 PM -0100'
  const format = 'D.M.YY H:m:s.S A ZZ'
  expect(dayjs(input, { format }).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse time zone abbreviation', () => {
  const input = '05/02/69 1:02:03.004 AM +01:00 (CET)'
  const format = 'MM/DD/YY h:mm:ss.SSS A Z (z)'
  expect(dayjs(input, { format }).valueOf()).toBe(moment(input, format).valueOf())
})

it('recognizes midnight in small letters', () => {
  const input = '2018-05-02 12:00 am'
  const format = 'YYYY-MM-DD hh:mm a'
  expect(dayjs(input, { format }).valueOf()).toBe(moment(input, format).valueOf())
})

it('recognizes noon in small letters', () => {
  const input = '2018-05-02 12:00 pm'
  const format = 'YYYY-MM-DD hh:mm a'
  expect(dayjs(input, { format }).valueOf()).toBe(moment(input, format).valueOf())
})

it('leaves non-token parts of the format intact', () => {
  const input = '2018-05-02 12:00 +0000 S:/-.() SS h '
  const format = 'YYYY-MM-DD HH:mm ZZ [S]:/-.()[ SS h ]'
  expect(dayjs(input, { format }).valueOf()).toBe(moment(input, format).valueOf())
})

it('fails with an invalid format', () => {
  const input = '2018-05-02 12:00 PM'
  const format = 'C'
  expect(dayjs(input, { format }).isValid()).toBeFalsy()
})

it('fails with an unmatched token part', () => {
  const input = '2018-05-02 12:00 BM'
  const format = 'YYYY-MM-DD HH:mm A'
  expect(dayjs(input, { format }).isValid()).toBeFalsy()
})

it('fails with an unmatched non-token part', () => {
  const input = '2018-05-02 12:00 B'
  const format = 'YYYY-MM-DD HH:mm [C]'
  expect(dayjs(input, { format }).isValid()).toBeFalsy()
})

it('fails with invalid time zone offset', () => {
  const input = '2018-05-02 12:00 D'
  const format = 'YYYY-MM-DD HH:mm ZZ'
  expect(dayjs(input, { format }).isValid()).toBeFalsy()
})

it('fails with invalid number', () => {
  const format = 'YYYY-MM-DD HH:mm:ss.SSS ZZ'
  expect(dayjs('2018-00-02 12:00:00.000 +0200', { format }).isValid()).toBeFalsy()
  expect(dayjs('2018-13-02 12:00:00.000 +0200', { format }).isValid()).toBeFalsy()
  expect(dayjs('2018-05-00 12:00:00.000 +0200', { format }).isValid()).toBeFalsy()
  expect(dayjs('2018-05-32 12:00:00.000 +0200', { format }).isValid()).toBeFalsy()
  expect(dayjs('2018-02-29 12:00:00.000 +0200', { format }).isValid()).toBeFalsy()
  expect(dayjs('1900-02-29 12:00:00.000 +0200', { format }).isValid()).toBeFalsy()
  expect(dayjs('2016-02-29 12:00:00.000 +0200', { format }).isValid()).toBeTruthy()
  expect(dayjs('2000-02-29 12:00:00.000 +0200', { format }).isValid()).toBeTruthy()
  expect(dayjs('2018-05-02 24:00:00.000 +0200', { format }).isValid()).toBeFalsy()
  expect(dayjs('2018-05-02 12:60:00.000 +0200', { format }).isValid()).toBeFalsy()
  expect(dayjs('2018-05-02 12:00:60.000 +0200', { format }).isValid()).toBeFalsy()
  expect(dayjs('2018-05-02 12:00:00.000 +1300', { format }).isValid()).toBeFalsy()
  expect(dayjs('2018-05-02 12:00:00.000 +0001', { format }).isValid()).toBeFalsy()
  expect(dayjs('18-05-02 13:00', { format: 'YY-MM-DD h:mm' }).isValid()).toBeFalsy()
  expect(dayjs('18-05-02 +0200', { format: 'YY-MM-DD ZZ' }).isValid()).toBeTruthy()
})
