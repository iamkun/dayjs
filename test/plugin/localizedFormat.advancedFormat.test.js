import moment from 'moment'
import dayjs from '../../src'
import advancedFormat from '../../src/plugin/advancedFormat'
import isoWeek from '../../src/plugin/isoWeek'
import localizedFormat from '../../src/plugin/localizedFormat'
import timezone from '../../src/plugin/timezone'
import updateLocale from '../../src/plugin/updateLocale'
import utc from '../../src/plugin/utc'
import weekOfYear from '../../src/plugin/weekOfYear'
import weekYear from '../../src/plugin/weekYear'

// plugin load order reported in issue #2860: localizedFormat first, advancedFormat last
dayjs.extend(localizedFormat)
dayjs.extend(advancedFormat)
dayjs.extend(updateLocale)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)

describe('localizedFormat with advancedFormat (localizedFormat loaded first)', () => {
  it('Renders the Do token inside a localized format', () => {
    dayjs.updateLocale('en', {
      formats: {
        LL: 'MMMM Do YYYY',
        LLL: 'MMMM Do YYYY h:mm A'
      }
    })
    const date = dayjs('2025-04-17')
    expect(date.format('LL')).toBe('April 17th 2025')
    expect(date.format('LLL')).toBe('April 17th 2025 12:00 AM')
  })

  it('Renders the X token inside a localized format', () => {
    dayjs.updateLocale('en', { formats: { LL: 'X' } })
    const date = dayjs('2025-04-17')
    expect(date.format('LL')).toBe(date.format('X'))
    expect(date.format('LL')).toBe(moment('2025-04-17').format('X'))
  })

  it('Renders the Q token inside a localized format and keeps bracket escapes', () => {
    dayjs.updateLocale('en', { formats: { LL: '[Q]Q' } })
    const date = dayjs('2025-04-17')
    expect(date.format('LL')).toBe('Q2')
  })

  it('Keeps the alias format equal to the expanded format', () => {
    dayjs.updateLocale('en', { formats: { LL: 'MMMM Do YYYY' } })
    const date = dayjs('2025-04-17')
    expect(date.format('LL')).toBe(date.format('MMMM Do YYYY'))
    expect(date.format('LL')).toBe(moment('2025-04-17').format('MMMM Do YYYY'))
  })

  it('Leaves the default English formats intact', () => {
    const date = dayjs('2025-04-17')
    const defaultFormats = ['L', 'LT', 'LTS', 'LLLL']
    defaultFormats.forEach((option) => {
      expect(date.format(option)).toBe(moment('2025-04-17').format(option))
    })
  })

  it('Falls back to the default format when no format is given', () => {
    const date = dayjs('2025-04-17')
    expect(date.format()).toBe(moment('2025-04-17').format())
  })

  it('Renders every advancedFormat token inside a localized format', () => {
    const date = dayjs('2025-04-17')
    const expectedDate = moment('2025-04-17')
    // every token advancedFormat replaces: an alias expanding to it must render the same
    const tokens = ['Q', 'Do', 'wo', 'w', 'ww', 'W', 'WW', 'gggg', 'GGGG', 'k', 'kk', 'X', 'x', 'z', 'zzz', 'S']
    // subset where dayjs and moment agree; z/zzz/S have pre-existing divergence
    const momentTokens = ['Q', 'Do', 'wo', 'w', 'ww', 'W', 'WW', 'gggg', 'GGGG', 'k', 'kk', 'X', 'x']
    tokens.forEach((token) => {
      dayjs.updateLocale('en', { formats: { LL: token } })
      expect(date.format('LL')).toBe(date.format(token))
      if (momentTokens.includes(token)) {
        expect(date.format('LL')).toBe(expectedDate.format(token))
      }
    })
  })
})
