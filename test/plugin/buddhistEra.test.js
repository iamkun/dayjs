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
