import MockDate from 'mockdate'
import dayjs from '../../src'
import '../../src/locale/en-sg'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Start of week', () => {
  expect(dayjs('2021-08-04').locale('en-sg').startOf('week').format('YYYY-MM-DD')).toEqual('2021-08-01')
  expect(dayjs('2021-08-04').locale('en-sg').startOf('week').day()).toEqual(0)
})
