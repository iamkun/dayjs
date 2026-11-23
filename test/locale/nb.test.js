import dayjs from '../../src'
import localizedFormat from '../../src/plugin/localizedFormat'
import '../../src/locale/nb'

dayjs.extend(localizedFormat)

it('Norwegian bokmål locale', () => {
  // time
  expect(dayjs('2019-02-01 12:34:56').locale('nb').format('LT'))
    .toBe('12:34')
  expect(dayjs('2019-02-01 23:45:56').locale('nb').format('LTS'))
    .toBe('23:45:56')

  // date
  expect(dayjs('2019-02-01').locale('nb').format('L'))
    .toBe('01.02.2019')
  expect(dayjs('2019-12-15').locale('nb').format('LL'))
    .toBe('15. desember 2019')
  // short
  expect(dayjs('2019-02-01').locale('nb').format('l'))
    .toBe('1.2.2019')
  expect(dayjs('2019-12-15').locale('nb').format('ll'))
    .toBe('15. des. 2019')

  // date and time
  expect(dayjs('2019-03-01 12:30').locale('nb').format('LLL'))
    .toBe('1. mars 2019 kl. 12:30')
  expect(dayjs('2021-06-12 17:30').locale('nb').format('LLLL'))
    .toBe('lørdag 12. juni 2021 kl. 17:30')

  // short
  expect(dayjs('2019-03-01 12:30').locale('nb').format('lll'))
    .toBe('1. mar 2019, kl. 12.30')
  expect(dayjs('2021-06-01 17:30').locale('nb').format('llll'))
    .toBe('tis, 1. jun 2021, kl. 17.30')
})
