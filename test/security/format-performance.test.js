import dayjs from '../../src'
import advancedFormat from '../../src/plugin/advancedFormat'
import buddhistEra from '../../src/plugin/buddhistEra'
import duration from '../../src/plugin/duration'
import localizedFormat from '../../src/plugin/localizedFormat'

dayjs.extend(advancedFormat)
dayjs.extend(buddhistEra)
dayjs.extend(duration)
dayjs.extend(localizedFormat)

it('preserves escaped and unmatched bracket formatting', () => {
  const date = dayjs('2020-01-01')

  expect(date.format('[[YYYY]]')).toBe('[YYYY]')
  expect(date.format('[]YYYY')).toBe('[]2020')
  expect(date.format('[YYYY')).toBe('[2020')
  expect(date.format('[[Q]] Q [Q')).toBe('[Q] 1 [1')
  expect(date.format('[[BBBB]] BBBB [BBBB')).toBe('[BBBB] 2563 [2563')
  expect(date.format('[[L]] L [L')).toBe('[L] 01/01/2020 [01/01/2020')
  expect(dayjs.duration(1).format('[[YYYY]] YYYY [YYYY')).toBe('[YYYY] 0000 [0000')
})

it('handles unmatched format brackets in linear time', () => {
  const format = '['.repeat(50000)
  const startedAt = Date.now()

  expect(dayjs('2020-01-01').format(format)).toBe(format)
  expect(dayjs.duration(1).format(format)).toBe(format)
  expect(Date.now() - startedAt).toBeLessThan(1000)
})
