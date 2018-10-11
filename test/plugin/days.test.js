import MockDate from 'mockdate'
import dayjs from '../../src'
import days from '../../src/plugin/days'

dayjs.extend(days)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Plugin days is normal or not', () => {
  expect(dayjs('2018-01-01').days('2018-01-01').length === 1).toBeTruthy()
  expect(dayjs('2018-01-01').days('2018-01-07').length === 7).toBeTruthy()
  expect(dayjs('2018-01-01').days('2018-01-01')[0].format('YYYY-MM-DD') === '2018-01-01').toBeTruthy()
})
