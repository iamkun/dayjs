import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/fi'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Finnish locale relative time in past and future', () => {
  const cases = [
    [1, 'd', 'päivän päästä'],
    [-1, 'd', 'päivä sitten'],
    [2, 'd', 'kahden päivän päästä'],
    [-2, 'd', 'kaksi päivää sitten'],
    [10, 'd', '10 päivän päästä'],
    [-10, 'd', '10 päivää sitten'],
    [6, 'm', 'kuuden minuutin päästä'],
    [-6, 'm', 'kuusi minuuttia sitten'],
    [5, 'h', 'viiden tunnin päästä'],
    [-5, 'h', 'viisi tuntia sitten'],
    [3, 'M', 'kolmen kuukauden päästä'],
    [-3, 'M', 'kolme kuukautta sitten'],
    [4, 'y', 'neljän vuoden päästä'],
    [-4, 'y', 'neljä vuotta sitten']
  ]
  cases.forEach((c) => {
    expect(dayjs().add(c[0], c[1]).locale('fi').fromNow())
      .toBe(c[2])
    expect(dayjs().add(c[0], c[1]).locale('fi').fromNow())
      .toBe(moment().add(c[0], c[1]).locale('fi').fromNow())
  })
  expect(dayjs().add(-10, 'd').locale('fi').fromNow(true))
    .toBe('10 päivää')
  expect(dayjs().add(-10, 'd').locale('fi').fromNow(true))
    .toBe(moment().add(-10, 'd').locale('fi').fromNow(true))
})
