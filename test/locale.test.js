import MockDate from 'mockdate'
import dayjs from '../src'
import es from '../src/locale/es'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

const format = 'dddd D, MMMM'

it('Uses spanish locale through constructor', () => { // not recommend
  expect(dayjs('2018-4-28', { locale: es })
    .format(format))
    .toBe('Sábado 28, Abril')
})

it('set locale for one instance only', () => {
  expect(dayjs('2018-4-28')
    .format(format))
    .toBe('Saturday 28, April')

  expect(dayjs('2018-4-28')
    .locale(es).format(format))
    .toBe('Sábado 28, Abril')

  expect(dayjs('2018-4-28')
    .format(format))
    .toBe('Saturday 28, April')
})

it('set global locale', () => {
  dayjs.locale('en')
  expect(dayjs('2018-4-28').format(format))
    .toBe('Saturday 28, April')
  dayjs.locale(es)
  expect(dayjs('2018-4-28').format(format))
    .toBe('Sábado 28, Abril')
  dayjs.locale('en')
  expect(dayjs('2018-4-28').format(format))
    .toBe('Saturday 28, April')
})

it('immutable instance locale', () => {
  dayjs.locale('en')
  const origin = dayjs('2018-4-28')
  expect(origin.format(format))
    .toBe('Saturday 28, April')
  expect(origin.locale('es').format(format))
    .toBe('Sábado 28, Abril')
  const changed = origin.locale('es')
  expect(changed.format(format))
    .toBe('Sábado 28, Abril')
  expect(origin.format(format))
    .toBe('Saturday 28, April')
})

it('User custom locale', () => {
  expect(dayjs('2018-4-28')
    .locale('xx', {
      weekdays: Array(7).fill('week'),
      months: Array(12).fill('month')
    })
    .format(format))
    .toBe('week 28, month')
})

describe('Instance locale inheritance', () => {
  const esDayjs = dayjs('2018-4-28').locale(es)

  it('Clone', () => {
    expect(esDayjs.clone().format(format))
      .toBe('Sábado 28, Abril')
    expect(dayjs(esDayjs).format(format))
      .toBe('Sábado 28, Abril')
  })

  it('StartOf EndOf', () => {
    expect(esDayjs.startOf('year').format(format))
      .toBe('Lunes 1, Enero')
    expect(esDayjs.endOf('day').format(format))
      .toBe('Sábado 28, Abril')
  })

  it('Set', () => {
    expect(esDayjs.set('year', 2017).format(format))
      .toBe('Viernes 28, Abril')
  })

  it('Add', () => {
    expect(esDayjs.add(1, 'year').format(format))
      .toBe('Domingo 28, Abril')
    expect(esDayjs.add(1, 'month').format(format))
      .toBe('Lunes 28, Mayo')
    expect(esDayjs.add(1, 'minute').format(format))
      .toBe('Sábado 28, Abril')
  })
})
