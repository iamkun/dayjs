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
