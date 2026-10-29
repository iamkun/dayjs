import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../src'
import es from '../src/locale/es'
import '../src/locale/zh-tw'
import '../src/locale/pt-br'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

const format = 'dddd D, MMMM'
const NOT_SUPPORTED_LOCALE_STRING = 'not_supported_locale_string'

it('Uses spanish locale through constructor', () => { // not recommend
  expect(dayjs('2018-4-28', { locale: es })
    .format(format))
    .toBe('sábado 28, abril')
})

it('set locale for one instance only', () => {
  expect(dayjs('2018-4-28')
    .format(format))
    .toBe('Saturday 28, April')

  expect(dayjs('2018-4-28')
    .locale(es).format(format))
    .toBe('sábado 28, abril')

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
    .toBe('sábado 28, abril')
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
    .toBe('sábado 28, abril')
  const changed = origin.locale('es')
  expect(changed.format(format))
    .toBe('sábado 28, abril')
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

describe('Underscore locale aliases', () => {
  afterEach(() => {
    dayjs.locale('en')
  })

  const aliases = [['zh_TW', 'zh-tw'], ['ZH_tw', 'zh-tw'], ['pt_BR', 'pt-br']]
  aliases.forEach(([alias, locale]) => {
    it(`resolves ${alias} globally`, () => {
      expect(dayjs.locale(alias)).toBe(locale)
      expect(dayjs('2018-4-28').format(format))
        .toBe(dayjs('2018-4-28').locale(locale).format(format))
    })

    it(`resolves ${alias} for an instance without changing the global locale`, () => {
      dayjs.locale('en')
      const origin = dayjs('2018-4-28')
      expect(origin.locale(alias).locale()).toBe(locale)
      expect(origin.locale()).toBe('en')
      expect(dayjs.locale()).toBe('en')
    })
  })

  it('normalizes every underscore separator', () => {
    dayjs.locale('custom-variant-region', es, true)
    expect(dayjs().locale('custom_variant_region').locale()).toBe('custom-variant-region')
    expect(dayjs().locale('custom_variant-region').locale()).toBe('custom-variant-region')
  })

  it('preserves unsupported mixed names without resolving an alias in the fallback', () => {
    dayjs.locale('en')
    expect(dayjs().locale('pt_BR-extra').locale()).toBe('en')
    expect(dayjs.locale()).toBe('en')
    expect(dayjs.locale('pt_BR-extra')).toBe('en')
    expect(dayjs().locale('custom_variant_region-extra').locale()).toBe('en')
    expect(dayjs.locale()).toBe('en')
  })

  it('preserves registered underscore names and registration by string', () => {
    dayjs.locale('custom-name', es, true)
    dayjs.locale('custom_name', { ...es, name: 'custom_name' }, true)
    expect(dayjs().locale('custom_name').locale()).toBe('custom_name')
  })

  it('preserves underscore names registered by locale object', () => {
    dayjs.locale({ ...es, name: 'object_name' }, null, true)
    expect(dayjs().locale('object_name').locale()).toBe('object_name')
  })

  it('preserves unsupported underscore names without changing the global locale', () => {
    dayjs.locale('en')
    expect(dayjs().locale('es_UNKNOWN').locale()).toBe('en')
    expect(dayjs.locale()).toBe('en')
  })

  it('retains the current locale for an unknown alias', () => {
    dayjs.locale('es')
    expect(dayjs.locale('unknown_REGION')).toBe('es')
    expect(dayjs().locale('unknown_REGION').locale()).toBe('es')
  })
})

describe('Instance locale inheritance', () => {
  const esDayjs = dayjs('2018-4-28').locale(es)

  it('Clone', () => {
    expect(esDayjs.clone().format(format))
      .toBe('sábado 28, abril')
    expect(dayjs(esDayjs).format(format))
      .toBe('sábado 28, abril')
  })

  it('StartOf EndOf', () => {
    expect(esDayjs.startOf('year').format(format))
      .toBe('lunes 1, enero')
    expect(esDayjs.endOf('day').format(format))
      .toBe('sábado 28, abril')
  })

  it('Set', () => {
    expect(esDayjs.set('year', 2017).format(format))
      .toBe('viernes 28, abril')
  })

  it('Add', () => {
    expect(esDayjs.add(1, 'year').format(format))
      .toBe('domingo 28, abril')
    expect(esDayjs.add(1, 'month').format(format))
      .toBe('lunes 28, mayo')
    expect(esDayjs.add(1, 'minute').format(format))
      .toBe('sábado 28, abril')
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


it('Not supported locale string fallback to previous one (instance)', () => {
  const D = dayjs()
  expect(D.locale()).toBe('en')
  const D2 = D.locale(NOT_SUPPORTED_LOCALE_STRING)
  expect(D2.locale()).toBe('en')
  expect(D2.format()).toBe(D.format())
  const D3 = D2.locale('es')
  expect(D3.locale()).toBe('es')
  const D4 = D3.locale(NOT_SUPPORTED_LOCALE_STRING)
  expect(D4.locale()).toBe('es')
})

it('Not supported locale string fallback to previous one (global)', () => {
  expect(dayjs().locale()).toBe('en')
  dayjs.locale(NOT_SUPPORTED_LOCALE_STRING)
  expect(dayjs().locale()).toBe('en')
  dayjs.locale('es')
  expect(dayjs().locale()).toBe('es')
  dayjs.locale(NOT_SUPPORTED_LOCALE_STRING)
  expect(dayjs().locale()).toBe('es')
})
