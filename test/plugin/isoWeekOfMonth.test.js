import dayjs from '../../src'
import isoWeekOfMonth from '../../src/plugin/isoWeekOfMonth'

dayjs.extend(isoWeekOfMonth)

it('returns Jan 1st ISO week for 2024-12-31 (across year)', () => {
  const result = dayjs('2024-12-31').isoWeekOfMonth()

  expect(result).toEqual({
    year: 2025,
    month: 1,
    week: 1
  })
})

it('returns May 1st ISO week for 2025-05-01', () => {
  const result = dayjs('2025-05-01').isoWeekOfMonth()

  expect(result).toEqual({
    year: 2025,
    month: 5,
    week: 1
  })
})

it('returns May 2nd ISO week for 2025-05-11', () => {
  const result = dayjs('2025-05-11').isoWeekOfMonth()

  expect(result).toEqual({
    year: 2025,
    month: 5,
    week: 2
  })
})

it('returns May 3rd ISO week for 2025-05-12', () => {
  const result = dayjs('2025-05-12').isoWeekOfMonth()

  expect(result).toEqual({
    year: 2025,
    month: 5,
    week: 3
  })
})

it('returns May 5rd ISO week for 2025-06-01', () => {
  const result = dayjs('2025-06-01').isoWeekOfMonth()

  expect(result).toEqual({
    year: 2025,
    month: 5,
    week: 5
  })
})

it('returns July 1st ISO week for 2025-06-30 (across month)', () => {
  const result = dayjs('2025-06-30').isoWeekOfMonth()

  expect(result).toEqual({
    year: 2025,
    month: 7,
    week: 1
  })
})
