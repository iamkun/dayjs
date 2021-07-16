import MockDate from 'mockdate'
import dayjs from '../../src'
import range from '../../src/plugin/range'

dayjs.extend(range)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('range isRange', () => {
  const startDate = '2021-07-15 19:01:00'
  const endDate = '2021-07-16 10:00:00'

  expect(dayjs.range(startDate, null).isRange()).toBe(false)
  expect(dayjs.range(null, startDate).isRange()).toBe(false)
  expect(dayjs.range(startDate, endDate).isRange()).toBe(true)
  expect(dayjs.range(endDate, startDate).isRange()).toBe(true)
})

it('range isEqual', () => {
  const startDate = '2021-07-15 19:01:00'
  const endDate = '2021-07-16 19:00:00'
  const otherDate = '2021-07-17 00:00:00'

  expect(dayjs.range(startDate, endDate).isEqual(dayjs.range(startDate, endDate))).toBe(true)
  expect(dayjs.range(startDate, endDate).isEqual(dayjs.range(endDate, startDate))).toBe(true)
  expect(dayjs.range(endDate, startDate).isEqual(dayjs.range(startDate, otherDate))).toBe(false)
})

it('range isOverlap', () => {
  const startDate = '2021-07-15 19:01:00'
  const endDate = '2021-07-16 19:00:00'
  const otherDate = '2021-07-17 00:00:00'
  const otherDate2 = '2021-07-19 00:00:00'

  expect(dayjs.range(startDate, endDate).isOverlap(dayjs.range(startDate, endDate))).toBe(true)
  expect(dayjs.range(endDate, startDate).isOverlap(dayjs.range(startDate, endDate))).toBe(true)
  expect(dayjs.range(startDate, endDate).isOverlap(dayjs.range(endDate, otherDate))).toBe(true)
  expect(dayjs.range(startDate, endDate).isOverlap(dayjs.range(otherDate, otherDate2))).toBe(false)
  expect(dayjs.range(startDate, otherDate).isOverlap(dayjs.range(endDate, otherDate2))).toBe(true)
  expect(dayjs.range(startDate, otherDate2).isOverlap(dayjs.range(endDate, otherDate))).toBe(true)
  expect(dayjs.range(endDate, otherDate).isOverlap(dayjs.range(startDate, otherDate2))).toBe(true)
  expect(dayjs.range(endDate, otherDate).isOverlap()).toBe(false)
})

it('range get date', () => {
  const startDate = '2021-07-15 19:01:00'
  const endDate = '2021-07-16 19:00:00'

  expect(dayjs.range(startDate, endDate).start).toEqual(dayjs(startDate))
  expect(dayjs.range(startDate, endDate).end).toEqual(dayjs(endDate))
})

it('range add', () => {
  const startDate = '2021-07-15 19:01:00'
  const endDate = '2021-07-17 19:00:00'

  const rangeBasic = dayjs.range(startDate, endDate)
  const rangeAddStart = rangeBasic.addStartRange(1, 'd')
  const rangeAddEnd = rangeBasic.addEndRange(1, 'd')

  expect(rangeAddStart.start).toEqual(dayjs(startDate).add(1, 'd'))
  expect(rangeAddEnd.end).toEqual(dayjs(endDate).add(1, 'd'))
  expect(rangeBasic.start).toEqual(dayjs(startDate))
  expect(rangeBasic.end).toEqual(dayjs(endDate))
})

it('range clone', () => {
  const startDate = '2021-07-15 19:01:00'
  const endDate = '2021-07-16 10:00:00'

  const originalRange = dayjs.range(startDate, endDate)
  const cloneRange = originalRange.clone()
  expect(originalRange.isEqual(cloneRange)).toBe(true)
  expect(originalRange.addStartRange(1, 'd').isEqual(cloneRange)).toBe(false)
})

it('range subtract', () => {
  const startDate = '2021-07-15 19:01:00'
  const endDate = '2021-07-17 19:00:00'

  const rangeBasic = dayjs.range(startDate, endDate)
  const rangeSubStart = rangeBasic.subtractStartRange(1, 'd')
  const rangeSubEnd = rangeBasic.subtractEndRange(1, 'd')

  expect(rangeSubStart.start).toEqual(dayjs(startDate).subtract(1, 'd'))
  expect(rangeSubEnd.end).toEqual(dayjs(endDate).subtract(1, 'd'))
  expect(rangeBasic.start).toEqual(dayjs(startDate))
  expect(rangeBasic.end).toEqual(dayjs(endDate))
})
