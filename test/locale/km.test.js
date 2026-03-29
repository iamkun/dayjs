import MockDate from 'mockdate'
import dayjs from '../../src'
import locale from '../../src/locale/km'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Meridiem', () => {
  dayjs.locale(locale)
  expect(dayjs('2020-01-01 03:00:00').locale('km').format('A')).toEqual('ព្រឹក')
  expect(dayjs('2020-01-01 11:00:00').locale('km').format('A')).toEqual('ព្រឹក')
  expect(dayjs('2020-01-01 12:00:00').locale('km').format('A')).toEqual('ល្ងាច')
  expect(dayjs('2020-01-01 16:00:00').locale('km').format('A')).toEqual('ល្ងាច')
  expect(dayjs('2020-01-01 20:00:00').locale('km').format('A')).toEqual('ល្ងាច')
})
