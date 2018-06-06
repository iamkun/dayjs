import MockDate from 'mockdate'
import dayjs from '../src'
import th from '../src/locale/th'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

const format = 'dddd D, MMMM'

it('Uses Thai locale through constructor', () => { // not recommend
  expect(dayjs('2018-4-28', { locale: th })
    .format(format))
    .toBe('เสาร์ 28, เมษายน')
  expect(dayjs('2018-4-28', { locale: th })
    .format('ddd D, MMM'))
    .toBe('ส. 28, เม.ย.')
})

it('set locale for one instance only', () => {
  expect(dayjs('2018-4-28')
    .format(format))
    .toBe('Saturday 28, April')

  expect(dayjs('2018-4-28')
    .locale(th).format(format))
    .toBe('เสาร์ 28, เมษายน')

  expect(dayjs('2018-4-28')
    .format(format))
    .toBe('Saturday 28, April')
})

it('set locale for this line only', () => {
  expect(dayjs('2018-4-28').format(format, th))
    .toBe('เสาร์ 28, เมษายน')
})

it('set global locale', () => {
  dayjs.locale('en')
  expect(dayjs('2018-4-28').format(format))
    .toBe('Saturday 28, April')
  dayjs.locale(th)
  expect(dayjs('2018-4-28').format(format))
    .toBe('เสาร์ 28, เมษายน')
  dayjs.locale('en')
  expect(dayjs('2018-4-28').format(format))
    .toBe('Saturday 28, April')
})

it('immutable instance locale', () => {
  dayjs.locale('en')
  const origin = dayjs('2018-4-28')
  expect(origin.format(format))
    .toBe('Saturday 28, April')
  expect(origin.locale('th').format(format))
    .toBe('เสาร์ 28, เมษายน')
  const changed = origin.locale('th')
  expect(changed.format(format))
    .toBe('เสาร์ 28, เมษายน')
  expect(origin.format(format))
    .toBe('Saturday 28, April')
})

describe('Instance locale inheritance', () => {
  const thDayjs = dayjs('2018-4-28').locale(th)

  it('Clone', () => {
    expect(thDayjs.clone().format(format))
      .toBe('เสาร์ 28, เมษายน')
    expect(dayjs(thDayjs).format(format))
      .toBe('เสาร์ 28, เมษายน')
  })

  it('StartOf EndOf', () => {
    expect(thDayjs.startOf('year').format(format))
      .toBe('จันทร์ 1, มกราคม')
    expect(thDayjs.endOf('day').format(format))
      .toBe('เสาร์ 28, เมษายน')
  })

  it('Set', () => {
    expect(thDayjs.set('year', 2017).format(format))
      .toBe('ศุกร์ 28, เมษายน')
  })

  it('Add', () => {
    expect(thDayjs.add(1, 'year').format(format))
      .toBe('อาทิตย์ 28, เมษายน')
    expect(thDayjs.add(1, 'month').format(format))
      .toBe('จันทร์ 28, พฤษภาคม')
    expect(thDayjs.add(1, 'minute').format(format))
      .toBe('เสาร์ 28, เมษายน')
  })
})
