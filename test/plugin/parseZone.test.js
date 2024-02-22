import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import utc from '../../src/plugin/utc'
import customParseFormat from '../../src/plugin/customParseFormat'
import parseZone from '../../src/plugin/parseZone'

dayjs.extend(utc)
dayjs.extend(customParseFormat)
dayjs.extend(parseZone)

// based on https://github.com/moment/moment/blob/e96809208c9d1b1bbe22d605e76985770024de42/src/test/moment/zones.js

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})
describe('parse zone', () => {
  it('produces same result as moment parse zone', () => {
    const m = moment.parseZone('2013-01-01T00:00:00-13:00')
    const d = dayjs.parseZone('2013-01-01T00:00:00-13:00')
    expect(d.format('YYYY-MM-DD HH:mm:ss')).toEqual(m.format('YYYY-MM-DD HH:mm:ss'))
  })

  it('holds the original offset instead of converting to local', () => {
    const dParseZone = dayjs.parseZone('2013-01-01T00:00:00-13:00')
    const dWithoutParseZone = dayjs('2013-01-01T00:00:00-13:00')

    expect(dParseZone.format('Z')).toEqual('-13:00')
    expect(dWithoutParseZone.format('Z')).toEqual('+00:00')
  })

  it('handles positive and negative timezone', () => {
    const dNegative = dayjs.parseZone('2013-01-01T00:00:00-13:00')
    const dPositive = dayjs.parseZone('2013-01-01T00:00:00+13:00')

    expect(dPositive.format('YYYY-MM-DD HH:mm:ss Z')).toEqual('2013-01-01 00:00:00 +13:00')
    expect(dNegative.format('YYYY-MM-DD HH:mm:ss Z')).toEqual('2013-01-01 00:00:00 -13:00')
  })

  it('works with custom format plugin', () => {
    const d = dayjs.parseZone('2013 01 01 00:00:00 -13:00', 'YYYY MM DD HH:mm:ss')
    expect(d.format('YYYY-MM-DD HH:mm:ss')).toEqual('2013-01-01 00:00:00')
  })

  it('uses default constructor when no date string is provided', () => {
    const d = dayjs.parseZone(new Date(2013, 0, 1, 0, 0, 0))
    expect(d.format('YYYY-MM-DD HH:mm:ss')).toEqual('2013-01-01 00:00:00')
  })

  it('keeps the time and change the zone to 0 when no timezone is provided', () => {
    const d = dayjs.parseZone('2013-01-01T00:00:00')
    expect(d.format('YYYY-MM-DD HH:mm:ss')).toEqual('2013-01-01 00:00:00')
  })

  it('handles UTC format', () => {
    const d = dayjs.parseZone('2013-01-01T00:00:00Z')
    expect(d.format('YYYY-MM-DD HH:mm:ss')).toEqual(dayjs.utc('2013-01-01T00:00:00').format('YYYY-MM-DD HH:mm:ss'))
  })
})
