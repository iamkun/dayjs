import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/ru'
import locale from '../../src/locale/ar-sa'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Meridiem', () => {
  dayjs.locale(locale)
  expect(dayjs('2020-01-01 03:00:00').locale('ar-sa').format('A')).toEqual('ص')
  expect(dayjs('2020-01-01 11:00:00').locale('ar-sa').format('A')).toEqual('ص')
  expect(dayjs('2020-01-01 16:00:00').locale('ar-sa').format('A')).toEqual('م')
  expect(dayjs('2020-01-01 20:00:00').locale('ar-sa').format('A')).toEqual('م')
})
