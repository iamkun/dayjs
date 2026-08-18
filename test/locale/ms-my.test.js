import MockDate from 'mockdate'
import dayjs from '../../src'
import '../../src/locale/ms-my'
import localizedFormat from '../../src/plugin/localizedFormat'

dayjs.extend(localizedFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('Malay (ms-my) locale format', () => {
  const date = '2019-07-15T14:30:45'

  it('LT should use colon separator (HH:mm)', () => {
    const formatted = dayjs(date).locale('ms-my').format('LT')
    expect(formatted).toBe('14:30')
    expect(formatted).not.toContain('.')
  })

  it('LTS should use colon separator (HH:mm:ss)', () => {
    const formatted = dayjs(date).locale('ms-my').format('LTS')
    expect(formatted).toBe('14:30:45')
    expect(formatted).not.toContain('.')
  })

  it('L should format as DD/MM/YYYY', () => {
    expect(dayjs(date).locale('ms-my').format('L')).toBe('15/07/2019')
  })

  it('LL should format as D MMMM YYYY', () => {
    expect(dayjs(date).locale('ms-my').format('LL')).toBe('15 Julai 2019')
  })

  it('LLL should use colon separator with pukul', () => {
    const formatted = dayjs(date).locale('ms-my').format('LLL')
    expect(formatted).toBe('15 Julai 2019 pukul 14:30')
    expect(formatted).not.toContain('.')
  })

  it('LLLL should use colon separator with pukul', () => {
    const formatted = dayjs(date).locale('ms-my').format('LLLL')
    expect(formatted).toBe('Isnin, 15 Julai 2019 pukul 14:30')
    expect(formatted).not.toContain('.')
  })

  it('should format all localized tokens correctly', () => {
    const d = dayjs(date).locale('ms-my')
    const expected = {
      LT: '14:30',
      LTS: '14:30:45',
      L: '15/07/2019',
      LL: '15 Julai 2019',
      LLL: '15 Julai 2019 pukul 14:30',
      LLLL: 'Isnin, 15 Julai 2019 pukul 14:30'
    }
    Object.entries(expected).forEach(([token, value]) => {
      expect(d.format(token)).toBe(value)
    })
  })
})

