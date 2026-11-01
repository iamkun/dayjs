import MockDate from 'mockdate'
import dayjs from '../../src'
import '../../src/locale/af'
import '../../src/locale/am'
import '../../src/locale/is'
import '../../src/locale/jv'
import '../../src/locale/km'
import '../../src/locale/my'
import '../../src/locale/bo'
import '../../src/locale/mn'
import '../../src/locale/rw'
import '../../src/locale/si'
import '../../src/locale/tzm'
import '../../src/locale/tzm-latn'

// CLDR weekData firstDay for each locale's territory:
// ZA, ET, IS, ID, KH, MM -> sun; CN, MN, RW, LK, MA -> mon
const cases = [
  ['af', 0],
  ['am', 0],
  ['is', 0],
  ['jv', 0],
  ['km', 0],
  ['my', 0],
  ['bo', 1],
  ['mn', 1],
  ['rw', 1],
  ['si', 1],
  ['tzm', 1],
  ['tzm-latn', 1]
]

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

cases.forEach(([locale, firstDay]) => {
  it(locale + ' starts the week on the CLDR first day', () => {
    // 2021-08-04 is a Wednesday
    expect(dayjs('2021-08-04').locale(locale).startOf('week').day()).toEqual(firstDay)
    expect(dayjs('2021-08-04').locale(locale).startOf('week').format('YYYY-MM-DD'))
      .toEqual(firstDay === 0 ? '2021-08-01' : '2021-08-02')
  })
})
