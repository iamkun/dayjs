import MockDate from 'mockdate'
import dayjs from '../../../src'
import duration from '../../../src/plugin/duration'

dayjs.extend(duration)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('Creating', () => {
  it('milliseconds', () => {
    expect(dayjs.duration(100).toISOString()).toBe('PT0.1S')
    expect(dayjs.duration(1000).toISOString()).toBe('PT1S')
  })
  it('two argument will bubble up to the next', () => {
    expect(dayjs.duration(59, 'seconds').toISOString()).toBe('PT59S')
    expect(dayjs.duration(60, 'seconds').toISOString()).toBe('P1M')
    expect(dayjs.duration(13213, 'seconds').toISOString()).toBe('PT3H40M13S')
  })
  it('object with float', () => {
    expect(dayjs.duration({
      seconds: 1,
      minutes: 2,
      hours: 3,
      days: 4,
      months: 6,
      years: 7
    }).toISOString()).toBe('P7Y6M4DT3H2M1S')
  })
  it('object with weeks and float', () => {
    expect(dayjs.duration({
      seconds: 1.1,
      minutes: 2,
      hours: 3,
      days: 4,
      weeks: 5,
      months: 6,
      years: 7
    }).toISOString()).toBe('P7Y6M39DT3H2M1.1S')
  })
})


describe('Parse ISO string', () => {
  it('Full ISO string', () => {
    expect(dayjs.duration('P7Y6M4DT3H2M1S').toISOString()).toBe('P7Y6M4DT3H2M1S')
  })
  it('Part ISO string', () => {
    expect(dayjs.duration('PT2777H46M40S').toISOString()).toBe('PT2777H46M40S')
  })
})

