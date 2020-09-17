import MockDate from 'mockdate'
import dayjs from '../../src'
import advancedFormat from '../../src/plugin/advancedFormat'
import localizedFormat from '../../src/plugin/localizedFormat'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/la'

dayjs.extend(advancedFormat)
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)
dayjs.locale('la')

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('Latin: Output month name:', () => {
  const M = [
    [1, 'ianuarius', 'ianuarii'],
    [2, 'februarius', 'februarii'],
    [3, 'martius', 'martii'],
    [4, 'aprilis', 'aprilis'],
    [5, 'maius', 'maii'],
    [6, 'iunius', 'iunii'],
    [7, 'iulius', 'iulii'],
    [8, 'augustus', 'augusti'],
    [9, 'september', 'septembris'],
    [10, 'october', 'octobris'],
    [11, 'november', 'novembris'],
    [12, 'december', 'decembris']
  ]

  it('in genitive case if day of month is output', () => {
    M.forEach((m) => {
      const dayjsDay = dayjs(['2020-', m[0], '-01'].join('')).locale('la').format('D MMMM')
      const expected = ['1 ', m[2]].join('')
      expect(dayjsDay).toBe(expected)
    })
  })

  it('otherwise output it in nominative', () => {
    M.forEach((m) => {
      const dayjsDay = dayjs(['2020-', m[0], '-01'].join('')).locale('la').format('MMMM')
      const expected = m[1]
      expect(dayjsDay).toBe(expected)
    })
  })
})

it('Latin: Test relative time', () => {
  const T = [
    [44.4, 'second', 'paucæ secundæ'], // a few seconds
    [89.5, 'second', 'minuta'], // a minute
    [2, 'minute', '2 minutæ'], // 2 minutes
    [43, 'minute', '43 minutæ'], // 43 minutes
    [45, 'minute', 'hora'], // an hour
    [3, 'hour', '3 horæ'], // 3 hours
    [21, 'hour', '21 horæ'], // 21 hours
    [1, 'day', 'dies'], // a day
    [3, 'day', '3 dies'], // 3 day
    [25, 'day', '25 dies'], // 25 days
    [1, 'month', 'mensis'], // a month
    [2, 'month', '2 menses'], // 2 month
    [10, 'month', '10 menses'], // 10 month
    [1, 'year', 'annus'], // a year
    [2, 'year', '2 anni'], // 2 year
    [5, 'year', '5 anni'], // 5 year
    [18, 'month', '2 anni'] // 2 years
  ]

  T.forEach((t) => {
    dayjs.locale('la')
    const dayjsDay = dayjs()
    const dayjsCompare = dayjs().add(t[0], t[1])
    const expectedFrom = ['abhinc ', t[2]].join('')
    const expectedTo = ['ad ', t[2]].join('')
    const expectedFromTrue = t[2]

    expect(dayjsDay.from(dayjsCompare)).toBe(expectedFrom)
    expect(dayjsDay.to(dayjsCompare)).toBe(expectedTo)
    expect(dayjsDay.from(dayjsCompare, true)).toBe(expectedFromTrue)
  })
})

// TODO: Test formats
// TODO: Test romanisation of year (both standalone and in dates incl L, LL, LLL, LLL)
