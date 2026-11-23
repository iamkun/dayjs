import MockDate from 'mockdate'
import dayjs from '../../src'
import localizedFormat from '../../src/plugin/localizedFormat'
import '../../src/locale/ka'

dayjs.extend(localizedFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('Georgian (ka) locale formats', () => {
  const d = dayjs('2024-03-15 14:30:45').locale('ka')

  it('L format should be DD.MM.YYYY', () => {
    expect(d.format('L')).toBe('15.03.2024')
  })

  it('LL format should be D MMMM YYYY', () => {
    expect(d.format('LL')).toBe('15 მარტი 2024')
  })

  it('LT format should be h:mm A', () => {
    expect(d.format('LT')).toBe('2:30 PM')
  })

  it('LTS format should be h:mm:ss A', () => {
    expect(d.format('LTS')).toBe('2:30:45 PM')
  })

  it('LLL format should be D MMMM YYYY h:mm A', () => {
    expect(d.format('LLL')).toBe('15 მარტი 2024 2:30 PM')
  })

  it('LLLL format should be dddd, D MMMM YYYY h:mm A', () => {
    expect(d.format('LLLL')).toBe('პარასკევი, 15 მარტი 2024 2:30 PM')
  })

  it('L format for single-digit day', () => {
    const d2 = dayjs('2024-01-05').locale('ka')
    expect(d2.format('L')).toBe('05.01.2024')
  })
})

