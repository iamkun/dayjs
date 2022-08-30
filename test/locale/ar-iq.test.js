import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import locale from '../../src/locale/ar-iq'
import preParsePostFormat from '../../src/plugin/preParsePostFormat'

dayjs.extend(relativeTime)
dayjs.extend(preParsePostFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Meridiem', () => {
  dayjs.locale(locale)
  expect(dayjs('2020-01-01 03:00:00').locale('ar-iq').format('A')).toEqual('ص')
  expect(dayjs('2020-01-01 11:00:00').locale('ar-iq').format('A')).toEqual('ص')
  expect(dayjs('2020-01-01 16:00:00').locale('ar-iq').format('A')).toEqual('م')
  expect(dayjs('2020-01-01 20:00:00').locale('ar-iq').format('A')).toEqual('م')
})

it('Preparse with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    dayjs.locale(locale)
    expect(dayjs(1500000000000).format('DD/MM/YYYY, hh:mm')).toEqual('١٤/٠٧/٢٠١٧، ٠٥:٤٠')
  }
})
