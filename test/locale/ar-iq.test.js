import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import locale, { englishToArabicNumbersMap } from '../../src/locale/ar-iq'
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
  dayjs.locale(locale)
  const dateWithARLocale = dayjs('٢٠٢٢').format('DD/MM/YYYY, hh:mm')

  dayjs.locale('en')
  const dateWithENLocale = dayjs('2022').format('DD/MM/YYYY, hh:mm')
  expect(dateWithARLocale).toEqual(dateWithENLocale.replace(/\d/g, match => englishToArabicNumbersMap[match]).replace(/,/g, '،'))
})
