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
  expect(dayjs('2020-01-01 12:00:00').locale('ar-sa').format('A')).toEqual('م')
  expect(dayjs('2020-01-01 16:00:00').locale('ar-sa').format('A')).toEqual('م')
  expect(dayjs('2020-01-01 20:00:00').locale('ar-sa').format('A')).toEqual('م')
})

it('Meridiem - 12 PM should show م (PM)', () => {
  dayjs.locale(locale)
  // Test hour 12 (noon) - should show PM (م)
  expect(dayjs('2025-10-28 12:41:00').locale('ar-sa').format('hh:mm a')).toBe('12:41 م')
  expect(dayjs('2025-10-28 12:00:00').locale('ar-sa').format('hh:mm a')).toBe('12:00 م')
  expect(dayjs('2025-10-28 12:59:59').locale('ar-sa').format('hh:mm a')).toBe('12:59 م')
  // Test hour 0 (midnight) - should show AM (ص)
  expect(dayjs('2025-10-28 00:41:00').locale('ar-sa').format('hh:mm a')).toBe('12:41 ص')
  // Test hours 1-11 should show AM (ص)
  expect(dayjs('2025-10-28 01:00:00').locale('ar-sa').format('hh:mm a')).toBe('01:00 ص')
  expect(dayjs('2025-10-28 11:00:00').locale('ar-sa').format('hh:mm a')).toBe('11:00 ص')
  // Test hours 13-23 should show PM (م)
  expect(dayjs('2025-10-28 13:00:00').locale('ar-sa').format('hh:mm a')).toBe('01:00 م')
  expect(dayjs('2025-10-28 23:00:00').locale('ar-sa').format('hh:mm a')).toBe('11:00 م')
})
