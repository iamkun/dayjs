import MockDate from 'mockdate'
import dayjs from '../../src'
import isToday from '../../src/plugin/isToday'
import isTomorrow from '../../src/plugin/isTomorrow'
import isYesterday from '../../src/plugin/isYesterday'
import preParsePostFormat from '../../src/plugin/preParsePostFormat'
import '../../src/locale/ar'

dayjs.extend(isToday)
dayjs.extend(isTomorrow)
dayjs.extend(isYesterday)
dayjs.extend(preParsePostFormat)

beforeEach(() => {
  MockDate.set(new Date(2026, 8, 26, 12))
  dayjs.locale('en')
})

afterEach(() => {
  MockDate.reset()
  dayjs.locale('en')
})

const cases = [
  ['isToday', 0],
  ['isTomorrow', 1],
  ['isYesterday', -1]
]

cases.forEach(([method, offset]) => {
  it(`${method} supports a different instance numeral locale`, () => {
    const matching = dayjs().add(offset, 'day').locale('ar')
    expect(matching[method]()).toBe(true)
    expect(matching.add(2, 'day')[method]()).toBe(false)
    expect(dayjs.locale()).toBe('en')
  })
})
