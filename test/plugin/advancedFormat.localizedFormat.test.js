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

// reverse load order: advancedFormat installed before localizedFormat
dayjs.extend(advancedFormat)
dayjs.extend(localizedFormat)
dayjs.extend(updateLocale)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)

describe('localizedFormat with advancedFormat (advancedFormat loaded first)', () => {
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

  it('Keeps the alias format equal to the expanded format', () => {
    dayjs.updateLocale('en', { formats: { LL: 'MMMM Do YYYY' } })
    const date = dayjs('2025-04-17')
    expect(date.format('LL')).toBe(date.format('MMMM Do YYYY'))
    expect(date.format('LL')).toBe(moment('2025-04-17').format('MMMM Do YYYY'))
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
