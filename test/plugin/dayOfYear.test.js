import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import dayOfYear from '../../src/plugin/dayOfYear'

dayjs.extend(dayOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('DayOfYear get', () => {
  expect(dayjs().dayOfYear()).toBe(moment().dayOfYear())
  expect(dayjs('2015-01-01T00:00:00.000').dayOfYear()).toBe(1)
  expect(dayjs('2015-01-31T00:00:00.000').dayOfYear()).toBe(31)
  expect(dayjs('2015-02-01T00:00:00.000').dayOfYear()).toBe(32)
  expect(dayjs('2015-02-28T00:00:00.000').dayOfYear()).toBe(59)
  expect(dayjs('2015-12-31T00:00:00.000').dayOfYear()).toBe(365)
})

it('DayOfYear set', () => {
  expect(dayjs().dayOfYear(4).dayOfYear()).toBe(moment().dayOfYear(4).dayOfYear())
  expect(dayjs('2015-01-01T00:00:00.000Z')
    .dayOfYear(4)
    .dayOfYear()).toBe(4)

  expect(dayjs('2015-01-01T00:00:00.000Z')
    .dayOfYear(4)
    .toISOString()).toBe('2015-01-04T00:00:00.000Z')

  expect(dayjs('2015-01-01T00:00:00.000Z')
    .dayOfYear(32)
    .dayOfYear()).toBe(32)

  expect(dayjs('2015-01-01T00:00:00.000Z')
    .dayOfYear(32)
    .toISOString()).toBe('2015-02-01T00:00:00.000Z')

  expect(dayjs('2015-01-01T00:00:00.000Z')
    .dayOfYear(365)
    .dayOfYear()).toBe(365)

  expect(dayjs('2015-01-01T00:00:00.000Z')
    .dayOfYear(365)
    .toISOString()).toBe('2015-12-31T00:00:00.000Z')
})

it('DayOfYear format DDD / DDDD matches moment', () => {
  const dates = ['2015-01-01', '2015-02-01', '2015-12-31',
    '2020-02-29', '2020-12-31', '2021-07-15']
  dates.forEach((s) => {
    expect(dayjs(s).format('DDD')).toBe(moment(s).format('DDD'))
    expect(dayjs(s).format('DDDD')).toBe(moment(s).format('DDDD'))
  })
})

it('DayOfYear format DDD / DDDD explicit output', () => {
  // DDD is un-padded, DDDD is zero-padded to 3 digits
  expect(dayjs('2015-01-01').format('DDD')).toBe('1')
  expect(dayjs('2015-01-01').format('DDDD')).toBe('001')
  expect(dayjs('2015-02-01').format('DDD')).toBe('32')
  expect(dayjs('2015-02-01').format('DDDD')).toBe('032')
  // leap year: Dec 31 is day 366
  expect(dayjs('2020-12-31').format('DDD')).toBe('366')
  expect(dayjs('2020-12-31').format('DDDD')).toBe('366')
  // mixes with other tokens and preserves escaped literals
  expect(dayjs('2015-02-01').format('[DDD] DDDD-DD')).toBe('DDD 032-01')
  // default format (no argument) is unaffected by the plugin
  expect(dayjs('2015-06-15').format()).toBe(dayjs('2015-06-15').format('YYYY-MM-DDTHH:mm:ssZ'))
  // invalid dates fall through unchanged
  expect(dayjs('not a date').format('DDD')).toBe('Invalid Date')
})
