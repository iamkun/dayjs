import MockDate from 'mockdate'
import dayjs from '../../src'
import isBetween from '../../src/plugin/isBetween'

dayjs.extend(isBetween)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('is between', () => {
  expect(dayjs('2018-01-01').isBetween('2017-01-01', '2019-01-01')).toBeTruthy()
  expect(dayjs('2018-01-01').isBetween('2019-01-01', '2017-01-01')).toBeTruthy()
  expect(dayjs('2018-01-01').isBetween('2016-01-01', '2017-01-01')).toBeFalsy()
})
