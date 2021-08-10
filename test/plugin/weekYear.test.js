import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import weekYear from '../../src/plugin/weekYear'
import weekOfYear from '../../src/plugin/weekOfYear'
import '../../src/locale/en-gb'

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
    const dResult = dayjs(day).weekYear()
    expect(dResult).toBe(result)
    expect(dResult).toBe(moment(day).weekYear())
  })
})

it('yearStart: 4', () => {
  const daySet = [
    ['2020-12-31', 2020],
    ['2021-01-01', 2020],
    ['2021-01-02', 2020],
    ['2021-01-03', 2020],
    ['2021-01-04', 2021],
    ['2021-01-05', 2021]
  ]
  daySet.forEach((d) => {
    const [day, result] = d
    const dResult = dayjs(day).locale('en-gb').weekYear()
    expect(dResult).toBe(result)
    expect(dResult).toBe(moment(day).locale('en-gb').weekYear())
  })
})
