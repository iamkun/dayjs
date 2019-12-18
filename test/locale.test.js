import MockDate from 'mockdate'
import moment from 'moment'
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
    .toBe('sábado 28, Abril')
})

it('set locale for one instance only', () => {
  expect(dayjs('2018-4-28')
    .format(format))
    .toBe('Saturday 28, April')

  expect(dayjs('2018-4-28')
    .locale(es).format(format))
    .toBe('sábado 28, Abril')

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
    .toBe('sábado 28, Abril')
  dayjs.locale('en')
  expect(dayjs('2018-4-28').format(format))
    .toBe('Saturday 28, April')
})

it('get instance locale name', () => {
  expect(dayjs().locale()).toBe('en')
  expect(dayjs().locale()).toBe(moment().locale())
  expect(dayjs().locale('es').locale()).toBe('es')
  expect(dayjs().locale('es').locale()).toBe(moment().locale('es').locale())
  dayjs.locale(es)
  moment.locale('es')
  expect(dayjs().locale()).toBe('es')
  expect(dayjs().locale()).toBe(moment().locale())
})

it('immutable instance locale', () => {
  dayjs.locale('en')
  const origin = dayjs('2018-4-28')
  expect(origin.format(format))
    .toBe('Saturday 28, April')
  expect(origin.locale('es').format(format))
    .toBe('sábado 28, Abril')
  const changed = origin.locale('es')
  expect(changed.format(format))
    .toBe('sábado 28, Abril')
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
      .toBe('sábado 28, Abril')
    expect(dayjs(esDayjs).format(format))
      .toBe('sábado 28, Abril')
  })

  it('StartOf EndOf', () => {
    expect(esDayjs.startOf('year').format(format))
      .toBe('lunes 1, Enero')
    expect(esDayjs.endOf('day').format(format))
      .toBe('sábado 28, Abril')
  })

  it('Set', () => {
    expect(esDayjs.set('year', 2017).format(format))
      .toBe('viernes 28, Abril')
  })

  it('Add', () => {
    expect(esDayjs.add(1, 'year').format(format))
      .toBe('domingo 28, Abril')
    expect(esDayjs.add(1, 'month').format(format))
      .toBe('lunes 28, Mayo')
    expect(esDayjs.add(1, 'minute').format(format))
      .toBe('sábado 28, Abril')
  })

  it('dayjs.locale() returns locale name', () => {
    dayjs.locale(es)
    moment.locale('es')
    expect(dayjs.locale()).toBe(moment.locale())

    dayjs.locale('en')
    moment.locale('en')
    expect(dayjs.locale()).toBe(moment.locale())
  })
})


it('Not supported locale string fallback to previous one', () => {
  const D = dayjs()
  const DFormat = D.format()
  const D2 = D.locale('not_supported_locale_string')
  const D2Format = D2.format()
  expect(DFormat).toBe(D2Format)
})
