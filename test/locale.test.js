import MockDate from 'mockdate'
import dayjs from '../src'
import es from '../src/locale/es'
import en from '../src/locale/en'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Uses spanish locale through constructor', () => { // not recommend
  expect(dayjs('2018-4-28', { locale: es })
    .format('dddd D, MMMM'))
    .toBe('Sábado 28, Abril')
})

it('set locale for one instance only', () => {
  expect(dayjs('2018-4-28')
    .format('dddd D, MMMM'))
    .toBe('Saturday 28, April')

  expect(dayjs('2018-4-28')
    .locale(es).format('dddd D, MMMM'))
    .toBe('Sábado 28, Abril')

  expect(dayjs('2018-4-28')
    .format('dddd D, MMMM'))
    .toBe('Saturday 28, April')
})

it('set locale for this line only', () => {
  expect(dayjs('2018-4-28').format('dddd D, MMMM', es))
    .toBe('Sábado 28, Abril')
})

it('clone with locale', () => {
  const esDayjs = dayjs('2018-4-28').locale(es)
  expect(esDayjs.clone().format('dddd D, MMMM'))
    .toBe('Sábado 28, Abril')
  expect(dayjs(esDayjs).format('dddd D, MMMM'))
    .toBe('Sábado 28, Abril')
})

it('set global locale', () => {
  dayjs.locale(en)
  expect(dayjs('2018-4-28').format('dddd D, MMMM'))
    .toBe('Saturday 28, April')
  dayjs.locale(es)
  expect(dayjs('2018-4-28').format('dddd D, MMMM'))
    .toBe('Sábado 28, Abril')
  dayjs.locale('en')
  expect(dayjs('2018-4-28').format('dddd D, MMMM'))
    .toBe('Saturday 28, April')
})

it('User custom locale', () => {
  expect(dayjs('2018-4-28')
    .locale('xx', {
      weekdays: Array(7).fill('week'),
      months: Array(12).fill('month')
    })
    .format('dddd D, MMMM'))
    .toBe('week 28, month')
})
