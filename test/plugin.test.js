import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../src'
import advFormat from '../plugins/advancedFormat'

dayjs.extend(advFormat)
const extendedDayjs = dayjs.extend(advFormat, true)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format Quarter Q', () => {
  expect(dayjs().format('Q')).toBe(moment().format('Q'))
  expect(extendedDayjs().format('Q')).toBe(dayjs().format('Q'))
})

it('Format Timestamp X x', () => {
  expect(dayjs().format('X')).toBe(moment().format('X'))
  expect(dayjs().format('x')).toBe(moment().format('x'))

  expect(extendedDayjs().format('X')).toBe(dayjs().format('X'))
  expect(extendedDayjs().format('x')).toBe(dayjs().format('x'))
})

it('Format Day of Month ddd 1 - 31', () => {
  expect(dayjs().format('ddd')).toBe(moment().format('Do'))

  expect(extendedDayjs().format('ddd')).toBe(dayjs().format('ddd'))
})

it('Format Hour k kk 24-hour 1 - 24', () => {
  expect(dayjs().format('k')).toBe(moment().format('k'))
  expect(dayjs().format('kk')).toBe(moment().format('kk'))

  expect(extendedDayjs().format('k')).toBe(dayjs().format('k'))
  expect(extendedDayjs().format('kk')).toBe(dayjs().format('kk'))
})

it('Format Second S', () => {
  expect(dayjs().format('S')).toBe(moment().format('SSS'))

  expect(extendedDayjs().format('S')).toBe(dayjs().format('S'))
})
