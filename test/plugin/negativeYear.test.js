import MockDate from 'mockdate'
import dayjs from 'dayjs'
import negativeYear from '../../src/plugin/negativeYear'
import utc from '../../src/plugin/utc'
import { REGEX_PARSE } from '../../src/constant'


dayjs.extend(negativeYear)
dayjs.extend(utc)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('negativeYear', () => {
  it('parses negative years', () => {
    expect(dayjs('-2020-01-01').year()).toBe(-2020)
    const date = '-2021/01/03'
    const date2 = '01/03/-2021'
    const date3 = '01-03--2021'
    const date4 = '-03-15'
    const d = date.match(REGEX_PARSE)
    expect(dayjs(date).format('YYYY-MM-DD')).toBe('-2021-01-03')
    expect(dayjs(date2).format('YYYY-MM-DD')).toBe('Invalid Date')
    expect(dayjs(date3).format()).toBe('Invalid Date')
    expect(dayjs(date4).format('YYYY-MM-DD')).toBe('2001-03-15')
    expect(d).toBe(null)
  })

  it('does not parse non-negative years', () => {
    expect(dayjs('2020-01-01').year()).toBe(2020)
  })

  it('works with other plugins', () => {
    expect(dayjs.utc('-2020-01-01').year()).toBe(-2020)
  })

  it('Add and subtract with negative years', () => {
    expect(dayjs('-2006').add(1, 'y')).toEqual(dayjs('-2005'))
    expect(dayjs('-2006').subtract(1, 'y')).toEqual(dayjs('-2007'))
    expect(dayjs('-2006').add(1, 'y').format('YYYY')).toBe(dayjs('-2005').format('YYYY'))
    expect(dayjs('-2006').subtract(1, 'y').format('YYYY')).toBe(dayjs('-2007').format('YYYY'))
  })

  it('Compare date with negative years', () => {
    expect(dayjs('-2006').isAfter(dayjs('-2007'))).toBeTruthy()
    expect(dayjs('-2006').isBefore(dayjs('-2005'))).toBeTruthy()
    expect(dayjs('-2006').isSame('-2006')).toBeTruthy()
  })
})
