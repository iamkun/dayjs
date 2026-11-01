import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/ru'
import locale from '../../src/locale/ar-kw'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Meridiem', () => {
  dayjs.locale(locale)
  expect(dayjs('2020-01-01 03:00:00').locale('ar-kw').format('A')).toEqual('ص')
  expect(dayjs('2020-01-01 11:00:00').locale('ar-kw').format('A')).toEqual('ص')
  expect(dayjs('2020-01-01 16:00:00').locale('ar-kw').format('A')).toEqual('م')
  expect(dayjs('2020-01-01 20:00:00').locale('ar-kw').format('A')).toEqual('م')

  it('weekStart is Saturday per CLDR weekData', () => {
    const sat = dayjs('2026-10-31').locale('ar-kw') // a Saturday
    expect(sat.startOf('week').format('YYYY-MM-DD')).toEqual('2026-10-31')
    expect(dayjs('2026-11-01').locale('ar-kw').startOf('week').format('YYYY-MM-DD')).toEqual('2026-10-31')
    expect(dayjs('2026-10-30').locale('ar-kw').startOf('week').format('YYYY-MM-DD')).toEqual('2026-10-24')
  })

})
