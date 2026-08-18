import moment from 'moment'
import dayjs from '../../src'
import '../../src/locale/ms'
import localizedFormat from '../../src/plugin/localizedFormat'

dayjs.extend(localizedFormat)

describe('Malay locale localized time formats', () => {
  beforeEach(() => {
    dayjs.locale('ms')
    moment.locale('ms')
  })

  afterEach(() => {
    dayjs.locale('en')
    moment.locale('en')
  })

  it('uses colon separators for LT and LTS', () => {
    const date = '2019-07-15T13:05:09'
    const dayjsDate = dayjs(date)

    expect(dayjsDate.format('LT')).toBe('13:05')
    expect(dayjsDate.format('LTS')).toBe('13:05:09')
    expect(dayjsDate.format('LT')).not.toContain('.')
    expect(dayjsDate.format('LTS')).not.toContain('.')
  })

  it('formats LT, LTS, L, LL, LLL, LLLL correctly', () => {
    const date = '2019-07-15T13:05:09'
    const dayjsDate = dayjs(date)

    expect(dayjsDate.format('LT')).toBe('13:05')
    expect(dayjsDate.format('LTS')).toBe('13:05:09')
    expect(dayjsDate.format('L')).toBe('15/07/2019')
    expect(dayjsDate.format('LL')).toBe('15 Julai 2019')
    expect(dayjsDate.format('LLL')).toBe('15 Julai 2019 13:05')
    expect(dayjsDate.format('LLLL')).toBe('Isnin, 15 Julai 2019 13:05')
  })

  it('matches moment for non-time formats (L, LL)', () => {
    const date = '2019-07-15T13:05:09'
    const dayjsDate = dayjs(date)
    const momentDate = moment(date);
    ['L', 'LL'].forEach((token) => {
      expect(dayjsDate.format(token)).toBe(momentDate.format(token))
    })
  })
})

