import dayjs from '../../src'
import localizedFormat from '../../src/plugin/localizedFormat'
import '../../src/locale/nn'

dayjs.extend(localizedFormat)

it('Norwegian Nynorsk locale', () => {
  // time
  expect(dayjs('2019-02-01 12:34:56').locale('nn').format('LT'))
    .toBe('12:34')
  expect(dayjs('2019-02-01 23:45:56').locale('nn').format('LTS'))
    .toBe('23:45:56')

  // date
  expect(dayjs('2019-02-01').locale('nn').format('L'))
    .toBe('01.02.2019')
  expect(dayjs('2019-12-15').locale('nn').format('LL'))
    .toBe('15. desember 2019')
  // short
  expect(dayjs('2019-02-01').locale('nn').format('l'))
    .toBe('1.2.2019')
  expect(dayjs('2019-12-15').locale('nn').format('ll'))
    .toBe('15. des. 2019')

  // date and time
  expect(dayjs('2019-03-01 12:30').locale('nn').format('LLL'))
    .toBe('1. mars 2019 kl. 12:30')
  expect(dayjs('2021-06-12 17:30').locale('nn').format('LLLL'))
    .toBe('lørdag 12. juni 2021 kl. 17:30')

  // short
  expect(dayjs('2019-03-01 12:30').locale('nn').format('lll'))
    .toBe('1. mar 2019, kl. 12.30')
  expect(dayjs('2021-06-01 17:30').locale('nn').format('llll'))
    .toBe('tis, 1. jun 2021, kl. 17.30')
})
