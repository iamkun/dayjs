import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'

dayjs.extend(relativeTime, {
  thresholds: [
    { l: 's', r: 0, d: 'second' },
    { l: 'mm', d: 'minute' }
  ]
})

it('Treats a zero threshold as a bound rather than an unlimited threshold', () => {
  const start = dayjs('2020-01-01')
  expect(start.add(2, 'minute').from(start, true)).toBe('2 minutes')
  expect(start.from(start, true)).toBe('a few seconds')
})
