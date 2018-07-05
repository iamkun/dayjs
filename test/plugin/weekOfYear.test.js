import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import weekOfYear from '../../src/plugin/weekOfYear'

dayjs.extend(weekOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Week of year', () => {
  const day = '2018-12-31T10:59:09+08:00'
  expect(dayjs(day).week()).toBe(moment(day).week())
  expect(dayjs().week()).toBe(moment().week())
})
