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

describe('parse array local', () => {
  it.each([0, 1, 2, 3])('test case testArrs[%i]"', (index) => {
    expect(dayjs(testArrs[index]).format())
      .toBe(moment(testArrs[index]).format())
  })
})

describe('parse array utc', () => {
  it.each([0, 1, 2, 3])('test case testArrs[%i]" with utc', (index) => {
    expect(dayjs.utc(testArrs[index]).format())
      .toBe(moment.utc(testArrs[index]).format())
  })
})
