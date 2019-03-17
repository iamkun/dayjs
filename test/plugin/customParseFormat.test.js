import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import customParseFormat from '../../src/plugin/customParseFormat'
import uk from '../../src/locale/uk'
import '../../src/locale/zh-cn'

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
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse string for MMM month format', () => {
  const input = '4/Mar/2019:11:16:26 +0800'
  const format = 'D/MMM/YYYY:H:m:s zz'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse string January (getMonth() = 0)', () => {
  const input = '01/01/2019'
  const format = 'DD/MM/YYYY'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse unpadded string', () => {
  const input = '2.5.18 1:2:3.4 PM -0100'
  const format = 'D.M.YY H:m:s.S A ZZ'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse time zone abbreviation', () => {
  const input = '05/02/69 1:02:03.004 AM +01:00 (CET)'
  const format = 'MM/DD/YY h:mm:ss.SSS A Z (z)'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse time zone abbreviation2', () => {
  const input = '05/02/69 1:02:03.04 AM +01:00 (CET)'
  const format = 'MM/DD/YY h:mm:ss.SS A Z (z)'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('recognizes midnight in small letters', () => {
  const input = '2018-05-02 12:00 am'
  const format = 'YYYY-MM-DD hh:mm a'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('recognizes noon in small letters', () => {
  const input = '2018-05-02 12:00 pm'
  const format = 'YYYY-MM-DD hh:mm a'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('leaves non-token parts of the format intact', () => {
  const input = '2018-05-02 12:00 +0000 S:/-.() SS h '
  const format = 'YYYY-MM-DD HH:mm ZZ [S]:/-.()[ SS h ]'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('timezone with no hour', () => {
  const input = '2018-05-02 +0000'
  const format = 'YYYY-MM-DD ZZ'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse hh:mm', () => {
  const input = '12:00'
  const format = 'hh:mm'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse HH:mm:ss', () => {
  const input = '00:27:21'
  const format = 'HH:mm:ss'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse HH:mm:ss but only one digit', () => {
  const input = '0:0:1'
  const format = 'HH:mm:ss'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse hh:mm:ss but only one digit', () => {
  const input = '0:0:1'
  const format = 'hh:mm:ss'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('fails with an invalid format', () => {
  const input = '2018-05-02 12:00 PM'
  const format = 'C'
  expect(dayjs(input, format).format().toLowerCase())
    .toBe(moment(input, format).format().toLowerCase())
})

it('parse month from string', () => {
  const input = '2018 February 03'
  const format = 'YYYY MMMM DD'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse month from short string', () => {
  const input = '2018 Feb 03'
  const format = 'YYYY MMM DD'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse month from string with locale in config', () => {
  const input = '2018 лютий 03'
  const format = 'YYYY MMMM DD'

  expect(dayjs(input, { format, locale: uk }).valueOf()).toBe(moment(input, format, 'uk').valueOf())
})

it('parse month from short string with locale in config', () => {
  const input = '2018 трав 03'
  const format = 'YYYY MMM DD'
  expect(dayjs(input, { format, locale: uk }).valueOf()).toBe(moment(input, format, 'uk').valueOf())
})

it('parse month from short string with locale in argument', () => {
  const input = '2018 трав 03'
  const format = 'YYYY MMM DD'
  expect(dayjs(input, format, 'uk').valueOf()).toBe(moment(input, format, 'uk').valueOf())
})

it('parse month from string with locale in argument', () => {
  const input = '2018 лютий 03'
  const format = 'YYYY MMMM DD'

  expect(dayjs(input, format, 'uk').valueOf()).toBe(moment(input, format, 'uk').valueOf())
})

it('return Invalid Date when parse corrupt string', () => {
  const input = '2018 Turnip 03'
  const format = 'YYYY MMMM DD'
  expect(dayjs(input, format).format()).toBe('Invalid Date')
})

it('return Invalid Date when parse corrupt short string', () => {
  const input = '2018 Dog 03'
  const format = 'YYYY MMM DD'
  expect(dayjs(input, format).format()).toBe('Invalid Date')
})

it('correctly parse month from string after changing locale globally', () => {
  const input = '2018 лютий 03'
  const format = 'YYYY MMMM DD'

  const dayjsLocale = dayjs().$locale()
  const momentLocale = moment.locale()
  try {
    dayjs.locale(uk)
    moment.locale('uk')
    expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
  } finally {
    dayjs.locale(dayjsLocale)
    moment.locale(momentLocale)
  }
})

it('correctly parse ordinal', () => {
  const input = '7th March 2019'
  const input2 = '17th March 2019'
  const inputFalse = '7st March 2019'
  const inputZHCN = '7日 三月 2019'
  const format = 'Do MMMM YYYY'
  expect(dayjs(input, format).valueOf())
    .toBe(moment(input, format).valueOf())
  expect(dayjs(input2, format).valueOf())
    .toBe(moment(input2, format).valueOf())
  expect(dayjs(inputFalse, format).valueOf())
    .toBe(moment(inputFalse, format).valueOf())
  expect(dayjs(inputZHCN, format, 'zh-cn').valueOf())
    .toBe(moment(inputZHCN, format, 'zh-cn').valueOf())
})
