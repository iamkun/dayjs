import dayjs from '../../src'
import utc from '../../src/plugin/utc'
import timezone from '../../src/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

test('DST: No shift in Europe/London in March before DST', () => {
  const d = dayjs.tz('2025-03-10T00:00:00', 'Europe/London')
  expect(['2025-03-10T00:00:00+00:00', '2025-03-10T00:00:00Z']).toContain(d.format())
})

test('DST: Correct +1 in June (DST active)', () => {
  const d = dayjs.tz('2025-06-10T00:00:00', 'Europe/London')
  expect(d.format()).toBe('2025-06-10T00:00:00+01:00')
})
