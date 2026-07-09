import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import arraySupport from '../../src/plugin/arraySupport'
import utc from '../../src/plugin/utc'

dayjs.extend(utc)
dayjs.extend(arraySupport)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('parse empty array', () => {
  it('local', () => {
    expect(dayjs([]).format())
      .toBe(moment([]).format())
  })
  it('utc', () => {
    expect(dayjs.utc([]).format())
      .toBe(moment.utc([]).format())
  })
})

const testArrs = [
  [2010, 1, 14, 15, 25, 50, 125],
  [2010],
  [2010, 6],
  [2010, 6, 10]
]

describe('parse full array local', () => {
  it('parse and format full date array', () => {
    expect(dayjs([2010, 1, 14, 15, 25, 50, 125]).format())
      .toBe('2010-01-14T15:25:50+00:00')
  })

  it('parse and format a date array that contain only the year', () => {
    expect(dayjs([2010]).format())
      .toBe('2010-01-01T00:00:00+00:00')
  })

  it('parse and format a date array that contain only the year and the month', () => {
    expect(dayjs([2010, 6]).format())
      .toBe('2010-06-01T00:00:00+00:00')
  })


  it('parse and format a date array that contain a date without a time', () => {
    expect(dayjs([2010, 6, 10]).format())
      .toBe('2010-06-10T00:00:00+00:00')
  })
})

describe('parse array utc', () => {
  testArrs.forEach((testArr) => {
    it(testArr, () => {
      expect(dayjs.utc(testArr).format())
        .toBe(moment.utc(testArr).format())
    })
  })
})
