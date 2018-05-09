import MockDate from 'mockdate'
import dayjs from '../src'
import esES from '../src/locale/es'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Uses spanish locale', () => {
  expect(dayjs('2018-4-28', { locale: esES })
    .format('dddd D, MMMM'))
    .toBe('Sábado 28, Abril')
})

it('setLocale to spanish', () => {
  expect(dayjs('2018-4-28')
    .format('dddd D, MMMM'))
    .toBe('Saturday 28, April')

  expect(dayjs('2018-4-28')
    .setLocale(esES).format('dddd D, MMMM'))
    .toBe('Sábado 28, Abril')
})

it('set locale for this line only', () => {
  expect(dayjs('2018-4-28').format('dddd D, MMMM', { WEEKDAYS: esES.WEEKDAYS }))
    .toBe('Sábado 28, April')
})
