import dayjs from '../../src'
import localizedFormat from '../../src/plugin/localizedFormat'
import '../../src/locale/sv-fi'

dayjs.extend(localizedFormat)

it('Finland Swedish locale', () => {
  // time
  expect(dayjs('2019-02-01 12:34:56').locale('sv-fi').format('LT'))
    .toBe('12.34')
  expect(dayjs('2019-02-01 23:45:56').locale('sv-fi').format('LTS'))
    .toBe('23.45.56')

  // date
  expect(dayjs('2019-02-01').locale('sv-fi').format('L'))
    .toBe('01.02.2019')
  expect(dayjs('2019-12-15').locale('sv-fi').format('LL'))
    .toBe('15. december 2019')
  // short
  expect(dayjs('2019-02-01').locale('sv-fi').format('l'))
    .toBe('1.2.2019')
  expect(dayjs('2019-12-15').locale('sv-fi').format('ll'))
    .toBe('15. dec 2019')

  // date and time
  expect(dayjs('2019-03-01 12:30').locale('sv-fi').format('LLL'))
    .toBe('1. mars 2019, kl. 12.30')
  expect(dayjs('2021-06-12 17:30').locale('sv-fi').format('LLLL'))
    .toBe('lördag, 12. juni 2021, kl. 17.30')
  // short
  expect(dayjs('2019-03-01 12:30').locale('sv-fi').format('lll'))
    .toBe('1. mar 2019, kl. 12.30')
  expect(dayjs('2021-06-01 17:30').locale('sv-fi').format('llll'))
    .toBe('tis, 1. jun 2021, kl. 17.30')
})
