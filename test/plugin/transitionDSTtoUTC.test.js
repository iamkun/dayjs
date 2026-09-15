import dayjs from '../../src'
import utc from '../../src/plugin/utc'
import timezone from '../../src/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

describe('timezone', () => {
  it('should preserve UTC semantics for startOf(day) across host DST transitions', () => {
    // 2024-11-03 is the DST fall-back date in America/Los_Angeles.
    // When the host timezone is set to America/Los_Angeles,
    // dayjs.tz(ms, 'UTC') should still behave exactly like dayjs.utc(ms).

    const ms = Date.parse('2024-11-03T23:00:00.000Z')

    const tzResult = dayjs
      .tz(ms, 'UTC')
      .startOf('day')
      .valueOf()

    const utcResult = dayjs
      .utc(ms)
      .startOf('day')
      .valueOf()

    expect(tzResult).toBe(utcResult)
    expect(tzResult).toBe(Date.parse('2024-11-03T00:00:00.000Z'))
  })
})