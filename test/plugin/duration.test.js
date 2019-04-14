import MockDate from 'mockdate'
import dayjs from '../../src'
import duration from '../../src/plugin/duration'

dayjs.extend(duration)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('duration between dates', () => {
  const dayjsA = dayjs('2019-03-31')
  const dayjsB = dayjs('2019-04-1')
  const dayjsACopy = dayjs(dayjsA)
  const dayjsBCopy = dayjs(dayjsB)
  const result = dayjsA.duration(dayjsB)
  expect(result.year).toBe(0)
  expect(result.month).toBe(0)
  expect(result.day).toBe(1)
  expect(result.hour).toBe(0)
  expect(result.minute).toBe(0)
  expect(result.second).toBe(0)
  expect(result.millisecond).toBe(0)
  expect(+dayjsA).toEqual(+dayjsACopy, 'duration should not change moment')
  expect(+dayjsB).toEqual(+dayjsBCopy, 'duration should not change moment')
})

it('duration between dates, future date', () => {
  const dayjsA = dayjs(new Date(2018, 3, 3, 4, 45, 45, 400))
  const dayjsB = dayjs(new Date(2019, 4, 15, 11, 20, 34, 700))
  const dayjsACopy = dayjs(dayjsA)
  const dayjsBCopy = dayjs(dayjsB)
  const result = dayjsA.duration(dayjsB)
  expect(result.year).toBe(1)
  expect(result.month).toBe(1)
  expect(result.day).toBe(12)
  expect(result.hour).toBe(6)
  expect(result.minute).toBe(34)
  expect(result.second).toBe(49)
  expect(result.millisecond).toBe(300)
  expect(+dayjsA).toEqual(+dayjsACopy, 'duration should not change moment')
  expect(+dayjsB).toEqual(+dayjsBCopy, 'duration should not change moment')
})

it('duration between dates, past date', () => {
  const dayjsA = dayjs(new Date(2019, 4, 15, 11, 20, 34, 700))
  const dayjsB = dayjs(new Date(2018, 3, 3, 4, 45, 45, 400))
  const dayjsACopy = dayjs(dayjsA)
  const dayjsBCopy = dayjs(dayjsB)
  const result = dayjsA.duration(dayjsB)
  expect(result.year).toBe(-1)
  expect(result.month).toBe(-1)
  expect(result.day).toBe(-12)
  expect(result.hour).toBe(-6)
  expect(result.minute).toBe(-34)
  expect(result.second).toBe(-49)
  expect(result.millisecond).toBe(-300)
  expect(+dayjsA).toEqual(+dayjsACopy, 'duration should not change moment')
  expect(+dayjsB).toEqual(+dayjsBCopy, 'duration should not change moment')
})

it('duration between same dates', () => {
  const dayjsA = dayjs(new Date(2019, 2, 27, 23, 59, 59, 800))
  const dayjsB = dayjs(new Date(2019, 2, 27, 23, 59, 59, 800))
  const dayjsACopy = dayjs(dayjsA)
  const dayjsBCopy = dayjs(dayjsB)
  const result = dayjsA.duration(dayjsB)
  expect(result.year).toBe(0)
  expect(result.month).toBe(0)
  expect(result.day).toBe(0)
  expect(result.hour).toBe(0)
  expect(result.minute).toBe(0)
  expect(result.second).toBe(0)
  expect(result.millisecond).toBe(0)
  expect(+dayjsA).toEqual(+dayjsACopy, 'duration should not change moment')
  expect(+dayjsB).toEqual(+dayjsBCopy, 'duration should not change moment')
})
