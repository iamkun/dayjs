import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})
describe('intl api from browser without loading locale files', () => {
  it('Format Month with locale function usin browsers intl api', () => {
    const dayjsRU = dayjs(new Date(1559387786502)).locale('ru')
    const testFormat1 = 'DD MMMM YYYY'
    const testFormat2 = 'MMMM'
    const testFormat3 = 'MMM'
    expect(dayjsRU.format(testFormat1)).toEqual('01 июня 2019 г.')
    expect(dayjsRU.format(testFormat2)).toEqual('июнь')
    expect(dayjsRU.format(testFormat3)).toEqual('июнь')
  })
  it('accepts locale extensions', () => {
    const dayjsBu = dayjs(new Date(1559387786502)).locale('en-US-u-ca-buddhist')
    const testFormat1 = 'DD MMMM YYYY'
    expect(dayjsBu.format(testFormat1)).toEqual('June 01, 2562')
  })
  it('accepts empty format with locale', () => {
    const dayjsBu = dayjs(new Date(1559387786502)).locale('en-US-u-ca-buddhist')
    expect(dayjsBu.format()).toEqual('6/1/2562')
  })
  it.skip('accepts fallback locales', () => {
    const dayjsBu = dayjs(new Date(1559387786502)).locale(['nonexisting', 'id'])
    expect(dayjsBu.format()).toEqual('06/01/2562, 16:26+06:00')
  })
  it('accepts direct options', () => {
    const dayjsBu = dayjs(new Date(1559387786502)).locale('en-US-u-ca-buddhist')
    expect(dayjsBu.format('', { year: '2-digit' })).toEqual('62')
  })
  it('will run with default locale of en defined not by intl, therefore ignore intl options', () => {
    const dayjsBu = dayjs(new Date(1559387786502)) // 2019-06-01T17:16:26+06:00
    expect(dayjsBu.format('', { timezone: 'UTC', hour: 'numeric' })).toEqual(dayjsBu.format())
  })
  // can't be bothered to setup plugin, can likely be implemented by changing timezone plugin
  it.skip('will use correct weekday, changing locale actually doesnt have bearing on what day week starts', () => {
    const dayjsR = dayjs(new Date(1559387786502)).locale('en-US')
    const momentR = moment(new Date(1559387786502)).locale('en-US')
    expect(dayjsR.startOf('week').toDate()).toEqual(momentR.startOf('week').toDate())
  })
})
