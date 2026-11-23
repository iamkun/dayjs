import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import isDST from '../../src/plugin/isDST'

dayjs.extend(isDST)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('isDST', () => {
  it('Correctly determine DST', () => {
    expect(dayjs('2007-07-01').isDST()).toBe(true)
    expect(dayjs('2007-01-01').isDST()).toBe(false)
  })

  it('Same result as in moment.js', () => {
    const firstTestDay = '2007-07-01'
    const secondTestDay = '2007-07-01'
    expect(dayjs(firstTestDay).isDST()).toBe(moment(firstTestDay).isDST())
    expect(dayjs(secondTestDay).isDST()).toBe(moment(firstTestDay).isDST())
  })
})
