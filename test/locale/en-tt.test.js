import MockDate from 'mockdate'
import dayjs from '../../src'
import '../../src/locale/en-tt'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Start of week', () => {
  expect(dayjs('2021-08-04').locale('en-tt').startOf('week').format('YYYY-MM-DD')).toEqual('2021-08-01')
  expect(dayjs('2021-08-04').locale('en-tt').startOf('week').day()).toEqual(0)
})
