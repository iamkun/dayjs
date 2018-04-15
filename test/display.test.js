import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../src'

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

it('Format Month M MM', () => {
  expect(dayjs().format('M')).toBe(moment().format('M'))
  expect(dayjs().format('MM')).toBe(moment().format('MM'))
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

it('Format Minute m mm', () => {
  expect(dayjs().format('m')).toBe(moment().format('m'))
  expect(dayjs().format('mm')).toBe(moment().format('mm'))
})

it('Format Second s sss', () => {
  expect(dayjs().format('s')).toBe(moment().format('s'))
  expect(dayjs().format('ss')).toBe(moment().format('ss'))
})

it('Format Time Zone ZZ', () => {
  expect(dayjs().format('Z')).toBe(moment().format('Z'))
  expect(dayjs().format('ZZ')).toBe(moment().format('ZZ'))
})

it('Format Complex with other string - : / ', () => {
  const string = 'YY-M-D / HH:mm:ss'
  expect(dayjs().format(string)).toBe(moment().format(string))
})

it('Difference', () => {
  const dateString = '20110101'

  const dayjsA = dayjs()
  const dayjsB = dayjs(dateString)

  const momentA = moment()
  const momentB = moment(dateString)
  expect(dayjsA.diff(dayjsB)).toBe(momentA.diff(momentB))
})

it('Unix Timestamp (milliseconds)', () => {
  expect(dayjs().valueOf()).toBe(moment().valueOf())
})

it('Unix Timestamp (seconds)', () => {
  expect(dayjs().unix()).toBe(moment().unix())
})

it('Days in Month', () => {
  expect(dayjs().daysInMonth()).toBe(moment().daysInMonth())
})

