import MockDate from 'mockdate'
import dayjs from '../../src'
import fromNow from '../../src/plugin/fromNow'

dayjs.extend(fromNow)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('from -> in seconds, days, weeks, months, quarters, years ', () => {
  expect(dayjs().from(dayjs()))
    .toBe('just now')

  expect(dayjs().from(dayjs().add(1, 'second')))
    .toBe('a second ago')
  expect(dayjs().from(dayjs().subtract(1, 'second')))
    .toBe('in a second')
  expect(dayjs().from(dayjs().add(59, 'second')))
    .toBe('59 seconds ago')
  expect(dayjs().from(dayjs().subtract(59, 'second')))
    .toBe('in 59 seconds')

  expect(dayjs().from(dayjs().add(1, 'days')))
    .toBe('a day ago')
  expect(dayjs().from(dayjs().subtract(1, 'days')))
    .toBe('in a day')
  expect(dayjs().from(dayjs().add(6, 'days')))
    .toBe('6 days ago')
  expect(dayjs().from(dayjs().subtract(6, 'days')))
    .toBe('in 6 days')

  expect(dayjs().from(dayjs().add(1, 'week')))
    .toBe('a week ago')
  expect(dayjs().from(dayjs().subtract(1, 'week')))
    .toBe('in a week')
  expect(dayjs().from(dayjs().add(3, 'week')))
    .toBe('3 weeks ago')
  expect(dayjs().from(dayjs().subtract(3, 'week')))
    .toBe('in 3 weeks')

  expect(dayjs().from(dayjs().add(1, 'months')))
    .toBe('a month ago')
  expect(dayjs().from(dayjs().subtract(1, 'months')))
    .toBe('in a month')
  expect(dayjs().from(dayjs().add(2, 'months')))
    .toBe('2 months ago')
  expect(dayjs().from(dayjs().subtract(2, 'months')))
    .toBe('in 2 months')

  expect(dayjs().from(dayjs().add(3, 'months')))
    .toBe('a quarter ago')
  expect(dayjs().from(dayjs().add(4, 'months')))
    .toBe('a quarter ago')
  expect(dayjs().from(dayjs().add(5, 'months')))
    .toBe('a quarter ago')
  expect(dayjs().from(dayjs().add(6, 'months')))
    .toBe('2 quarters ago')
  expect(dayjs().from(dayjs().add(11, 'months')))
    .toBe('3 quarters ago')

  expect(dayjs().from(dayjs().add(12, 'months')))
    .toBe('a year ago')
  expect(dayjs().from(dayjs().add(23, 'months')))
    .toBe('a year ago')
  expect(dayjs().from(dayjs().add(24, 'months')))
    .toBe('2 years ago')
  expect(dayjs().from(dayjs().add(1, 'year')))
    .toBe('2 years ago')
})
