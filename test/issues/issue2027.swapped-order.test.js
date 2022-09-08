import MockDate from 'mockdate'
import dayjs from '../../src'
import duration from '../../src/plugin/duration'
import objectSupport from '../../src/plugin/objectSupport'

dayjs.extend(duration)
dayjs.extend(objectSupport)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

// issue 2027
describe('issue 2027 - order objectSupport > Duration', () => {
  it('add Duration object returns correct date', () => {
    const baseDate = dayjs('2022-06-26T14:01:02.003')
    const durationToAdd = dayjs.duration(6, 'hours')
    const testDate = baseDate.add(durationToAdd)

    expect(testDate.format('YYYY-MM-DD HH:mm:ss.SSS')).toBe('2022-06-26 20:01:02.003')
  })

  it('subtract Duration object returns correct date', () => {
    const baseDate = dayjs('2022-06-26T14:01:02.003')
    const durationToAdd = dayjs.duration(6, 'hours')
    const testDate = baseDate.subtract(durationToAdd)

    expect(testDate.format('YYYY-MM-DD HH:mm:ss.SSS')).toBe('2022-06-26 08:01:02.003')
  })

  it('add number with unit returns correct date', () => {
    const baseDate = dayjs('2022-06-26T14:01:02.003')
    const testDate = baseDate.add(6, 'hours')

    expect(testDate.format('YYYY-MM-DD HH:mm:ss.SSS')).toBe('2022-06-26 20:01:02.003')
  })
  it('subtract number with unit returns correct date', () => {
    const baseDate = dayjs('2022-06-26T14:01:02.003')
    const testDate = baseDate.subtract(6, 'hours')

    expect(testDate.format('YYYY-MM-DD HH:mm:ss.SSS')).toBe('2022-06-26 08:01:02.003')
  })

  it('parse string returns correct date', () => {
    const testDate = dayjs('2022-06-26T14:01:02.003')

    expect(testDate.format('YYYY-MM-DD HH:mm:ss.SSS')).toBe('2022-06-26 14:01:02.003')
  })
  it('parse object returns correct date', () => {
    const testDate = dayjs({
      year: '2022',
      month: '05',
      day: '26',
      hour: '14',
      minute: '01',
      second: '02',
      millisecond: '003'
    })

    expect(testDate.format('YYYY-MM-DD HH:mm:ss.SSS')).toBe('2022-06-26 14:01:02.003')
  })

  it('set hour with number returns correct date', () => {
    const baseDate = dayjs('2022-06-26T14:01:02.003')
    const testDate = baseDate.hour(10)

    expect(testDate.format('YYYY-MM-DD HH:mm:ss.SSS')).toBe('2022-06-26 10:01:02.003')
  })
  it('set hour with object returns correct date', () => {
    const baseDate = dayjs('2022-06-26T14:01:02.003')
    const testDate = baseDate.set({ hour: '10' })

    expect(testDate.format('YYYY-MM-DD HH:mm:ss.SSS')).toBe('2022-06-26 10:01:02.003')
  })
})
