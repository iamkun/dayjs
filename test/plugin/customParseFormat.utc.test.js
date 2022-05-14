import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import utc from '../../src/plugin/utc'
import customParseFormat from '../../src/plugin/customParseFormat'

dayjs.extend(utc)
dayjs.extend(customParseFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('UTC with customParseFormat', () => {
  it('Parse date string with single format string', () => {
    const d = '2018-04-24'
    const resultDayjs = dayjs.utc(d, 'YYYY-MM-DD')
    const resultMoment = moment.utc(d, 'YYYY-MM-DD')
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format('YYYY-MM-DD HH:mm:ss')).toBe('2018-04-24 00:00:00')
    expect(resultMoment.isValid()).toBe(true)
    expect(resultDayjs.valueOf()).toBe(resultMoment.valueOf())
  })

  it('Parse date and time string with no seconds in format', () => {
    const d = '2018-04-24 21:13:05'
    const resultDayjs = dayjs.utc(d, 'YYYY-MM-DD HH:mm')
    const resultMoment = moment.utc(d, 'YYYY-MM-DD HH:mm')
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format('YYYY-MM-DD HH:mm:ss')).toBe('2018-04-24 21:13:00')
    expect(resultMoment.isValid()).toBe(true)
    expect(resultDayjs.valueOf()).toBe(resultMoment.valueOf())
  })

  it('Parse date and time string with 2-digit offset', () => {
    const input = '2020-12-01T20:00:00+09'
    const format = 'YYYY-MM-DD[T]HH:mm:ssZ'
    const result = dayjs.utc(input, format)
    expect(result.valueOf()).toBe(moment(input, format).valueOf())
    expect(result.valueOf()).toBe(1606820400000)
  })

  it('Parse date and time string with zulu time', () => {
    const input = '2021-01-26T15:38:43.000Z'
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
    const result = dayjs.utc(input, format)
    expect(result.valueOf()).toBe(moment(input, format).valueOf())
    expect(result.valueOf()).toBe(1611675523000)
  })

  // Tests for issue 1596
  it('Parse date string with multiple formats', () => {
    const d = '2018-04-24'
    const resultDayjs = dayjs.utc(d, ['YYYY-MM-DD HH:mm', 'YYYY-MM-DD'])
    const resultMoment = moment.utc(d, ['YYYY-MM-DD HH:mm', 'YYYY-MM-DD'])
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format('YYYY-MM-DD HH:mm:ss')).toBe('2018-04-24 00:00:00')
    expect(resultMoment.isValid()).toBe(true)
    expect(resultDayjs.valueOf()).toBe(resultMoment.valueOf())
  })

  it('Parse date and time string with multiple formats', () => {
    const d = '2018-04-24 11:12:22Z'
    const resultDayjs = dayjs.utc(d, ['YYYY-MM-DD HH:mm:ssZ', 'YYYY-MM-DD'])
    const resultMoment = moment.utc(d, ['YYYY-MM-DD HH:mm:ssZ', 'YYYY-MM-DD'])
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format('YYYY-MM-DD HH:mm:ss')).toBe('2018-04-24 11:12:22')
    expect(resultMoment.isValid()).toBe(true)
    expect(resultDayjs.valueOf()).toBe(resultMoment.valueOf())
  })

  it('Parse date and time string with single format', () => {
    dayjs.extend(customParseFormat)
    const instant = dayjs.utc('2011-02-02 03:04:05', 'YYYY-MM-DD HH:mm:ss')
    const momentInstant = moment.utc('2011-02-02 03:04:05', 'YYYY-MM-DD HH:mm:ss')
    expect(instant.date()).toBe(2)
    expect(instant.hour()).toBe(3)
    expect(instant.format()).toBe('2011-02-02T03:04:05Z')
    expect(instant.format()).toBe(momentInstant.format())
  })

  it('Parse date and time string with multiple formats and offset', () => {
    const d = '2018-04-24 11:12:22+04'
    const resultDayjs = dayjs.utc(d, ['YYYY-MM-DD HH:mmZ', 'YYYY-MM-DD'])
    const resultMoment = moment.utc(d, ['YYYY-MM-DD HH:mmZ', 'YYYY-MM-DD'])
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format('YYYY-MM-DD HH:mm:ss')).toBe('2018-04-24 07:12:00')
    expect(resultMoment.isValid()).toBe(true)
    expect(resultDayjs.valueOf()).toBe(resultMoment.valueOf())
  })

  it('Parse date string with multiple formats in strict mode', () => {
    const d = '2018-04-24 11:12Z'
    const resultDayjs = dayjs.utc(d, ['YYYY-MM-DD HH:mmZ', 'YYYY-MM-DD'], true)
    const resultMoment = moment.utc(d, ['YYYY-MM-DD HH:mmZ', 'YYYY-MM-DD'], true)
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format('YYYY-MM-DD HH:mm:ss')).toBe('2018-04-24 11:12:00')
    expect(resultMoment.isValid()).toBe(true)
    expect(resultDayjs.valueOf()).toBe(resultMoment.valueOf())
  })

  it('Parse date string with multiple formats in strict mode as invalid', () => {
    const d = '2018-04-24 11:12:24'
    const resultDayjs = dayjs.utc(d, ['YYYY-MM-DD HH:mm', 'YYYY-MM-DD'], true)
    const resultMoment = moment.utc(d, ['YYYY-MM-DD HH:mm', 'YYYY-MM-DD'], true)
    expect(resultDayjs.isValid()).toBe(false)
    expect(resultDayjs.valueOf()).toBe(NaN)
    expect(resultMoment.isValid()).toBe(false)
    expect(resultDayjs.valueOf()).toBe(resultMoment.valueOf())
  })

  it('Parse date and time string with offset and multiple formats in strict mode', () => {
    const d = '2018-04-24 11:22+01:00'
    const resultDayjs = dayjs.utc(d, ['YYYY-MM-DD HH:mmZ', 'YYYY-MM-DD'], true)
    const resultMoment = moment.utc(d, ['YYYY-MM-DD HH:mmZ', 'YYYY-MM-DD'], true)
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format('YYYY-MM-DD HH:mm:ss')).toBe('2018-04-24 10:22:00')
    expect(resultMoment.isValid()).toBe(true)
    expect(resultDayjs.valueOf()).toBe(resultMoment.valueOf())
  })
})
