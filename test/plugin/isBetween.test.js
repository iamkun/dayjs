import MockDate from 'mockdate'
import dayjs from '../../src/index'
import isBetween from '../../src/plugin/isBetween/index'

dayjs.extend(isBetween)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

test('bounds can be swapped', () => {
  expect(dayjs('2018-01-01').isBetween(dayjs('2017-12-31'), dayjs('2018-01-02'))).toBeTruthy()
  expect(dayjs('2018-01-01').isBetween(dayjs('2018-01-02'), dayjs('2017-12-31'))).toBeTruthy()
})

test('bounds can be swapped with inclusivity', () => {
  expect(dayjs('2018-01-01').isBetween(dayjs('2017-12-31'), dayjs('2018-01-01'), null, '[]')).toBeTruthy()
  expect(dayjs('2018-01-01').isBetween(dayjs('2018-01-01'), dayjs('2017-12-31'), null, '[]')).toBeTruthy()
})

test('is between without units', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  const mCopy = dayjs(m)

  expect(m.isBetween(
    dayjs(new Date(2009, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  )).toBe(false, 'year is later')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2013, 3, 2, 3, 4, 5, 10))
  )).toBe(false, 'year is earlier')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10))
  )).toBe(true, 'year is between')

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  )).toBe(false, 'month is later')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 5, 2, 3, 4, 5, 10))
  )).toBe(false, 'month is earlier')

  expect(m.isBetween(
    dayjs(new Date(2011, 2, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 4, 2, 3, 4, 5, 10))
  )).toBe(true, 'month is between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 1, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  )).toBe(false, 'day is later')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 4, 3, 4, 5, 10))
  )).toBe(false, 'day is earlier')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 1, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 3, 3, 4, 5, 10))
  )).toBe(true, 'day is between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 1, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  )).toBe(false, 'hour is later')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 5, 4, 5, 10))
  )).toBe(false, 'hour is earlier')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 2, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 4, 4, 5, 10))
  )).toBe(true, 'hour is between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 6, 5, 10))
  )).toBe(false, 'minute is later')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 2, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  )).toBe(false, 'minute is earlier')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 3, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 5, 5, 10))
  )).toBe(true, 'minute is between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 7, 10))
  )).toBe(false, 'second is later')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 3, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  )).toBe(false, 'second is earlier')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 4, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 6, 10))
  )).toBe(true, 'second is between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 12))
  )).toBe(false, 'millisecond is later')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 8)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  )).toBe(false, 'millisecond is earlier')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 9)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 11))
  )).toBe(true, 'millisecond is between')

  expect(m.isBetween(m, m)).toBe(false, 'moments are not between themselves')
  expect(+m).toEqual(+mCopy, 'isBetween second should not change moment')
})

test('is between year', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)

  expect(m.isBetween(
    dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)),
    dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)),
    'year'
  )).toBe(false, 'year match')

  expect(m.isBetween(
    dayjs(new Date(2010, 5, 6, 7, 8, 9, 10)),
    dayjs(new Date(2012, 5, 6, 7, 8, 9, 10)),
    'years'
  )).toBe(true, 'plural should work')

  expect(m.isBetween(
    dayjs(new Date(2010, 5, 6, 7, 8, 9, 10)),
    dayjs(new Date(2012, 5, 6, 7, 8, 9, 10)),
    'year'
  )).toBe(true, 'year is between')

  expect(m.isBetween(
    dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)),
    dayjs(new Date(2013, 5, 6, 7, 8, 9, 10)),
    'year'
  )).toBe(false, 'year is earlier')

  expect(m.isBetween(
    dayjs(new Date(2010, 5, 6, 7, 8, 9, 10)),
    dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)),
    'year'
  )).toBe(false, 'year is later')

  expect(m.isBetween(m, 'year')).toBe(false, 'same moments are not between the same year')
  expect(+m).toEqual(+mCopy, 'isBetween year should not change moment')
})

test('is between month', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 6, 7, 8, 9, 10)),
    dayjs(new Date(2011, 1, 6, 7, 8, 9, 10)),
    'month'
  )).toBe(false, 'month match')

  expect(m.isBetween(
    dayjs(new Date(2011, 0, 6, 7, 8, 9, 10)),
    dayjs(new Date(2011, 2, 6, 7, 8, 9, 10)),
    'months'
  )).toBe(true, 'plural should work')

  expect(m.isBetween(
    dayjs(new Date(2011, 0, 31, 23, 59, 59, 999)),
    dayjs(new Date(2011, 2, 1, 0, 0, 0, 0)),
    'month'
  )).toBe(true, 'month is between')

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 6, 7, 8, 9, 10)),
    dayjs(new Date(2011, 2, 6, 7, 8, 9, 10)),
    'month'
  )).toBe(false, 'month is earlier')

  expect(m.isBetween(
    dayjs(new Date(2011, 11, 6, 7, 8, 9, 10)),
    dayjs(new Date(2011, 1, 6, 7, 8, 9, 10)),
    'month'
  )).toBe(false, 'month is later')

  expect(m.isBetween(m, 'month')).toBe(false, 'same moments are not between the same month')
  expect(+m).toEqual(+mCopy, 'isBetween month should not change moment')
})

test('is between day', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 7, 8, 9, 10)),
    dayjs(new Date(2011, 1, 2, 7, 8, 9, 10)),
    'day'
  )).toBe(false, 'day match')

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 1, 7, 8, 9, 10)),
    dayjs(new Date(2011, 1, 3, 7, 8, 9, 10)),
    'days'
  )).toBe(true, 'plural should work')

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 1, 7, 8, 9, 10)),
    dayjs(new Date(2011, 1, 3, 7, 8, 9, 10)),
    'day'
  )).toBe(true, 'day is between')

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 7, 8, 9, 10)),
    dayjs(new Date(2011, 1, 4, 7, 8, 9, 10)),
    'day'
  )).toBe(false, 'day is earlier')

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 1, 7, 8, 9, 10)),
    dayjs(new Date(2011, 1, 2, 7, 8, 9, 10)),
    'day'
  )).toBe(false, 'day is later')

  expect(m.isBetween(m, 'day')).toBe(false, 'same moments are not between the same day')
  expect(+m).toEqual(+mCopy, 'isBetween day should not change moment')
})

test('is between hour', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 5, 9, 10)),
    dayjs(new Date(2011, 1, 2, 3, 9, 9, 10)), 'hour'
  ))
    .toBe(false, 'hour match')
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 1, 59, 59, 999)),
    dayjs(new Date(2011, 1, 2, 4, 0, 0, 0)), 'hours'
  ))
    .toBe(true, 'plural should work')
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 2, 59, 59, 999)),
    dayjs(new Date(2011, 1, 2, 4, 0, 0, 0)), 'hour'
  ))
    .toBe(true, 'hour is between')
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 7, 8, 9, 10)),
    dayjs(new Date(2011, 1, 2, 7, 8, 9, 10)), 'hour'
  ))
    .toBe(false, 'hour is earlier')
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 7, 8, 9, 10)),
    dayjs(new Date(2011, 1, 2, 7, 8, 9, 10)), 'hour'
  ))
    .toBe(false, 'hour is later')
  expect(m.isBetween(m, 'hour'))
    .toBe(false, 'same moments are not between the same hour')
  expect(+m)
    .toEqual(+mCopy, 'isBetween hour should not change moment')
})

test('is between minute', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 4, 9, 10)),
    dayjs(new Date(2011, 1, 2, 3, 4, 9, 10)), 'minute'
  ))
    .toBe(false, 'minute match')
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 3, 9, 10)),
    dayjs(new Date(2011, 1, 2, 3, 5, 9, 10)), 'minutes'
  ))
    .toBe(true, 'plural should work')
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 3, 59, 999)),
    dayjs(new Date(2011, 1, 2, 3, 5, 0, 0)), 'minute'
  ))
    .toBe(true, 'minute is between')
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 5, 0, 0)),
    dayjs(new Date(2011, 1, 2, 3, 8, 9, 10)), 'minute'
  ))
    .toBe(false, 'minute is earlier')
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 2, 9, 10)),
    dayjs(new Date(2011, 1, 2, 3, 3, 59, 999)), 'minute'
  ))
    .toBe(false, 'minute is later')
  expect(m.isBetween(m, 'minute'))
    .toBe(false, 'same moments are not between the same minute')
  expect(+m)
    .toEqual(+mCopy, 'isBetween minute should not change moment')
})

test('is between second', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 10)), 'second'
  ))
    .toBe(false, 'second match')
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 4, 4, 10)),
    dayjs(new Date(2011, 1, 2, 3, 4, 6, 10)), 'seconds'
  ))
    .toBe(true, 'plural should work')
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 4, 4, 999)),
    dayjs(new Date(2011, 1, 2, 3, 4, 6, 0)), 'second'
  ))
    .toBe(true, 'second is between')
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 4, 6, 0)),
    dayjs(new Date(2011, 1, 2, 3, 4, 7, 10)), 'second'
  ))
    .toBe(false, 'second is earlier')
  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 4, 3, 10)),
    dayjs(new Date(2011, 1, 2, 3, 4, 4, 999)), 'second'
  ))
    .toBe(false, 'second is later')
  expect(m.isBetween(m, 'second')).toBe(false, 'same moments are not between the same second')
  expect(+m).toEqual(+mCopy, 'isBetween second should not change moment')
})

test('is between millisecond', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 6)),
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 6)),
    'millisecond'
  )).toBe(false, 'millisecond match')

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 5)),
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 7)),
    'milliseconds'
  )).toBe(true, 'plural should work')

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 5)),
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 7)),
    'millisecond'
  )).toBe(true, 'millisecond is between')

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 7)),
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 10)),
    'millisecond'
  )).toBe(false, 'millisecond is earlier')

  expect(m.isBetween(
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 4)),
    dayjs(new Date(2011, 1, 2, 3, 4, 5, 6)),
    'millisecond'
  )).toBe(false, 'millisecond is later')

  expect(m.isBetween(m, 'millisecond')).toBe(false, 'same moments are not between the same millisecond')
  expect(+m).toEqual(+mCopy, 'isBetween millisecond should not change moment')
})

test('is between without units inclusivity', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  const mCopy = dayjs(m)

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    null,
    '()'
  )).toBe(false, 'start and end are excluded, start is equal to dayjs')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    null,
    '()'
  )).toBe(false, 'start and end are excluded, end is equal to dayjs')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    null,
    '()'
  )).toBe(true, 'start and end are excluded, is between')

  expect(m.isBetween(
    dayjs(new Date(2009, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    null,
    '()'
  )).toBe(false, 'start and end are excluded, is not between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    null,
    '()'
  )).toBe(false, 'start and end are excluded, should fail on same start/end date.')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    null,
    '(]'
  )).toBe(false, 'start is excluded and end is included should fail on same start date')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    null,
    '(]'
  )).toBe(true, 'start is excluded and end is included should succeed on end date')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    null,
    '(]'
  )).toBe(true, 'start is excluded and end is included, is between')

  expect(m.isBetween(
    dayjs(new Date(2009, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    null,
    '(]'
  )).toBe(false, 'start is excluded and end is included, is not between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    null,
    '(]'
  )).toBe(false, 'start is excluded and end is included, should fail on same start/end date.')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    null,
    '[)'
  )).toBe(true, 'start is included and end is excluded should succeed on same start date')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    null,
    '[)'
  )).toBe(false, 'start is included and end is excluded should fail on same end date')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    null,
    '[)'
  )).toBe(true, 'start is included and end is excluded, is between')

  expect(m.isBetween(
    dayjs(new Date(2009, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    null,
    '[)'
  )).toBe(false, 'start is included and end is excluded, is not between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    null,
    '[)'
  )).toBe(false, 'start is included and end is excluded, should fail on same end and start date')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    null,
    '[]'
  )).toBe(true, 'start and end inclusive should succeed on same start date')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    null,
    '[]'
  )).toBe(true, 'start and end inclusive should succeed on same end date')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    null,
    '[]'
  )).toBe(true, 'start and end inclusive, is between')

  expect(m.isBetween(
    dayjs(new Date(2009, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    null,
    '[]'
  )).toBe(false, 'start and end inclusive, is not between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    null,
    '[]'
  )).toBe(true, 'start and end inclusive, should handle same end and start date')

  expect(+m).toEqual(+mCopy, 'isBetween millisecond should not change moment')
})

test('is between milliseconds inclusivity', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  const mCopy = dayjs(m)

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    'milliseconds'
  )).toBe(true, 'options, no inclusive')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '()'
  )).toBe(false, 'start and end are excluded, start is equal to dayjs')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '()'
  )).toBe(false, 'start and end are excluded, end is equal to dayjs')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '()'
  )).toBe(true, 'start and end are excluded, is between')

  expect(m.isBetween(
    dayjs(new Date(2009, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '()'
  )).toBe(false, 'start and end are excluded, is not between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '()'
  )).toBe(false, 'start and end are excluded, should fail on same start/end date.')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '(]'
  )).toBe(false, 'start is excluded and end is included should fail on same start date')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '(]'
  )).toBe(true, 'start is excluded and end is included should succeed on end date')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '(]'
  )).toBe(true, 'start is excluded and end is included, is between')

  expect(m.isBetween(
    dayjs(new Date(2009, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '(]'
  )).toBe(false, 'start is excluded and end is included, is not between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '(]'
  )).toBe(false, 'start is excluded and end is included, should fail on same start/end date.')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '[)'
  )).toBe(true, 'start is included and end is excluded should succeed on same start date')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '[)'
  )).toBe(false, 'start is included and end is excluded should fail on same end date')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '[)'
  )).toBe(true, 'start is included and end is excluded, is between')

  expect(m.isBetween(
    dayjs(new Date(2009, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '[)'
  )).toBe(false, 'start is included and end is excluded, is not between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '[)'
  )).toBe(false, 'start is included and end is excluded, should fail on same end and start date')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '[]'
  )).toBe(true, 'start and end inclusive should succeed on same start date')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '[]'
  )).toBe(true, 'start and end inclusive should succeed on same end date')

  expect(m.isBetween(
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '[]'
  )).toBe(true, 'start and end inclusive, is between')

  expect(m.isBetween(
    dayjs(new Date(2009, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '[]'
  )).toBe(false, 'start and end inclusive, is not between')

  expect(m.isBetween(
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
    'milliseconds',
    '[]'
  )).toBe(true, 'start and end inclusive, should handle same end and start date')

  expect(+m).toEqual(+mCopy, 'isBetween second should not change moment')
})
