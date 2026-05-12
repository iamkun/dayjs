import dayjs from '../../src'

// Run this file with TZ=Asia/Singapore or TZ=Asia/Kuala_Lumpur.
describe('issue 3003', () => {
  it('returns the correct number of days in month across midnight offset shifts', () => {
    expect(dayjs('1981-12-01').daysInMonth()).toBe(31)
  })

  it('keeps endOf("month") on the last local day', () => {
    const endOfMonth = dayjs('1981-12-01').endOf('month')

    expect(endOfMonth.month()).toBe(11)
    expect(endOfMonth.date()).toBe(31)
  })

  it('keeps endOf("day") on the same local day when midnight shifts', () => {
    const endOfDay = dayjs('1981-12-31').endOf('day')

    expect(endOfDay.month()).toBe(11)
    expect(endOfDay.date()).toBe(31)
  })
})
