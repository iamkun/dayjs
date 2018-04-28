import MockDate from 'mockdate'
import dayjs from '../src'
import esES from '../src/locales/es'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Uses spanish locale', () => {
  expect(dayjs('2018-4-28', esES).format('dddd D, MMMM')).toBe('Sábado 28, Abril')
})

it('setLocale to spanish', () => {
  expect(dayjs('2018-4-28')
    .format('dddd D, MMMM'))
    .toBe('Saturday 28, April')

  expect(dayjs('2018-4-28')
    .setLocale(esES).format('dddd D, MMMM'))
    .toBe('Sábado 28, Abril')
})
