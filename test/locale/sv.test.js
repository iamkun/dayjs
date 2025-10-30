import MockDate from 'mockdate'
import dayjs from '../../src'
import advancedFormat from '../../src/plugin/advancedFormat'
import '../../src/locale/sv'

dayjs.extend(advancedFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Swedish locale Do 1a not format to 1am', () => {
  expect(dayjs('2019-01-01').locale('sv').format('dddd Do MMMM'))
    .toBe('tisdag 1a januari')
  expect(dayjs('2019-01-02').locale('sv').format('dddd Do MMMM'))
    .toBe('onsdag 2a januari')
})

describe('Swedish locale ordinal', () => {
  it('- regular cases', () => {
    expect(dayjs('2019-01-01').locale('sv').format('Do')).toBe('1a')
    expect(dayjs('2019-01-02').locale('sv').format('Do')).toBe('2a')
    expect(dayjs('2019-01-03').locale('sv').format('Do')).toBe('3e')
    expect(dayjs('2019-01-21').locale('sv').format('Do')).toBe('21a')
    expect(dayjs('2019-01-22').locale('sv').format('Do')).toBe('22a')
    expect(dayjs('2019-01-23').locale('sv').format('Do')).toBe('23e')
  })
  it('- special cases', () => {
    expect(dayjs('2019-01-11').locale('sv').format('Do')).toBe('11e')
    expect(dayjs('2019-01-12').locale('sv').format('Do')).toBe('12e')
    expect(dayjs('2019-01-13').locale('sv').format('Do')).toBe('13e')
    expect(dayjs('2019-01-14').locale('sv').format('Do')).toBe('14e')
    expect(dayjs('2019-01-15').locale('sv').format('Do')).toBe('15e')
    expect(dayjs('2019-01-16').locale('sv').format('Do')).toBe('16e')
    expect(dayjs('2019-01-17').locale('sv').format('Do')).toBe('17e')
    expect(dayjs('2019-01-18').locale('sv').format('Do')).toBe('18e')
    expect(dayjs('2019-01-19').locale('sv').format('Do')).toBe('19e')
  })
})
