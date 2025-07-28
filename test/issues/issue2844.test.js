import MockDate from 'mockdate'
import dayjs from '../../src'

beforeEach(() => {
  MockDate.set(new Date(2023, 0, 1)) // 2023-01-01
})

afterEach(() => {
  MockDate.reset()
})

// issue 2844
describe('issue 2844 - Parse MM-DD format dates', () => {
  it('should parse MM-DD format with hyphen', () => {
    const date = dayjs('10-15')
    expect(date.month()).toBe(9) // 10-1 = 9 (October)
    expect(date.date()).toBe(15)
    expect(date.year()).toBe(2023) // Should use current year
  })

  it('should parse MM-DD format with slash', () => {
    const date = dayjs('10/15')
    expect(date.month()).toBe(9) // 10-1 = 9 (October)
    expect(date.date()).toBe(15)
    expect(date.year()).toBe(2023)
  })

  it('should parse MM-DD format with dot', () => {
    const date = dayjs('10.15')
    expect(date.month()).toBe(9) // 10-1 = 9 (October)
    expect(date.date()).toBe(15)
    expect(date.year()).toBe(2023)
  })

  it('should validate MM-DD format', () => {
    // Valid dates
    expect(dayjs('1-1').isValid()).toBe(true)
    expect(dayjs('01-01').isValid()).toBe(true)
    expect(dayjs('12-31').isValid()).toBe(true)

    // Invalid dates
    expect(dayjs('13-01').isValid()).toBe(false) // month > 12
    expect(dayjs('01-32').isValid()).toBe(false) // day > 31
    // Note: Month 0 is considered valid in JavaScript Date (as December of previous year)
    expect(dayjs('00-01').isValid()).toBe(true)
    expect(dayjs('01-00').isValid()).toBe(false) // day = 0
  })

  it('should not affect other date formats', () => {
    // Full ISO date
    const isoDate = dayjs('2022-10-15')
    expect(isoDate.year()).toBe(2022)
    expect(isoDate.month()).toBe(9)
    expect(isoDate.date()).toBe(15)

    // YYYY-MM format
    const yearMonth = dayjs('2022-10')
    expect(yearMonth.year()).toBe(2022)
    expect(yearMonth.month()).toBe(9)
    expect(yearMonth.date()).toBe(1) // Default to first day of month
  })
})
