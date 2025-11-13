import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import buddhistEra from '../../src/plugin/buddhistEra'

dayjs.extend(buddhistEra)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format empty string', () => {
  expect(dayjs().format()).toBe(moment().format())
})

it('Format Buddhist Era 2 digit', () => {
  expect(dayjs().format('BB')).toBe(`${(moment().year() + 543) % 100}`)
})

it('Format Buddhist Era 4 digit', () => {
  expect(dayjs().format('BBBB')).toBe(`${moment().year() + 543}`)
})

it('Format Buddhist Era 4 digit with other format', () => {
  const format = 'D MMM BBBB'
  const today = moment()
  const momentDate = today.format(format).replace('BBBB', today.year() + 543)
  expect(dayjs().format(format)).toBe(momentDate)
})

it('Skips format strings inside brackets', () => {
  expect(dayjs().format('[BBBB]')).toBe('BBBB')
  expect(dayjs().format('[BB]')).toBe('BB')
})

it('Parses Buddhist Era 2 digits', () => {
  expect(dayjs('02/29/67', 'MM/DD/BB').valueOf()).toBe(moment('02/29/24').valueOf())
  expect(dayjs('01/01/00', 'MM/DD/BB').valueOf()).toBe(moment('01/01/57').valueOf())
  expect(dayjs('01/01/99', 'MM/DD/BB').valueOf()).toBe(moment('01/01/56').valueOf())
})

it('Parses Buddhist Era 4 digits', () => {
  expect(dayjs('02/29/2567', 'MM/DD/BBBB').valueOf()).toBe(moment('02/29/2024').valueOf())
  expect(dayjs('01/01/2500', 'MM/DD/BBBB').valueOf()).toBe(moment('01/01/1957').valueOf())
  expect(dayjs('01/01/2599', 'MM/DD/BBBB').valueOf()).toBe(moment('01/01/2056').valueOf())
  expect(dayjs('01/01/2499', 'MM/DD/BBBB').valueOf()).toBe(moment('01/01/1956').valueOf())
})
