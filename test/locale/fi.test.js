import MockDate from 'mockdate'
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
  expect(dayjs().add(1, 'd').locale('fi').fromNow())
    .toBe('päivän kuluttua')
  expect(dayjs().add(2, 'd').locale('fi').fromNow())
    .toBe('2 päivän kuluttua')
  expect(dayjs().add(2, 'd').locale('fi').fromNow(true))
    .toBe('2 päivää')
  expect(dayjs().add(-1, 'd').locale('fi').fromNow())
    .toBe('päivä sitten')
  expect(dayjs().add(-2, 'd').locale('fi').fromNow())
    .toBe('2 päivää sitten')
})
