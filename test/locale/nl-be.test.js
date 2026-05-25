import MockDate from 'mockdate'
import dayjs from '../../src'
import localizedFormat from '../../src/plugin/localizedFormat'
import '../../src/locale/nl-be'

dayjs.extend(localizedFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('Dutch Belgium (nl-be) locale formats', () => {
  const d = dayjs('2024-03-15 14:30:45').locale('nl-be')

  it('L format should be D/MM/YYYY (no leading zero on day)', () => {
    expect(d.format('L')).toBe('15/03/2024')
  })

  it('L format single-digit day has no leading zero', () => {
    const d2 = dayjs('2024-01-05').locale('nl-be')
    expect(d2.format('L')).toBe('5/01/2024')
  })

  it('LL format should be D MMMM YYYY', () => {
    expect(d.format('LL')).toBe('15 maart 2024')
  })

  it('LT format should be HH:mm', () => {
    expect(d.format('LT')).toBe('14:30')
  })

  it('LTS format should be HH:mm:ss', () => {
    expect(d.format('LTS')).toBe('14:30:45')
  })

  it('LLL format should be D MMMM YYYY HH:mm', () => {
    expect(d.format('LLL')).toBe('15 maart 2024 14:30')
  })

  it('LLLL format should be dddd D MMMM YYYY HH:mm', () => {
    expect(d.format('LLLL')).toBe('vrijdag 15 maart 2024 14:30')
  })
})

