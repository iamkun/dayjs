import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import weekYear from '../../src/plugin/weekYear'
import weekOfYear from '../../src/plugin/weekOfYear'

dayjs.extend(weekYear)
dayjs.extend(weekOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Week Year', () => {
  const daySet = [
    ['2018-12-01', 2018],
    ['2018-12-30', 2019],
    ['2018-12-31', 2019],
    ['2019-01-01', 2019]
  ]
  daySet.forEach((d) => {
    const [day, result] = d
    expect(dayjs(day).weekYear()).toBe(result)
    expect(dayjs(day).weekYear()).toBe(moment(day).weekYear())
  })
})
