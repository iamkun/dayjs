import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/hr'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format month with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    const dayjsUK = dayjs().locale('hr').add(i, 'day')
    const momentUK = moment().locale('hr').add(i, 'day')
    const testFormat1 = 'DD MMMM YYYY MMM'
    const testFormat2 = 'dddd, MMMM D YYYY'
    const testFormat3 = 'MMMM'
    const testFormat4 = 'MMM'
    expect(dayjsUK.format(testFormat1)).toEqual(momentUK.format(testFormat1))
    expect(dayjsUK.format(testFormat2)).toEqual(momentUK.format(testFormat2))
    expect(dayjsUK.format(testFormat3)).toEqual(momentUK.format(testFormat3))
    expect(dayjsUK.format(testFormat4)).toEqual(momentUK.format(testFormat4))
  }
})

describe('Croatian relativeTime static and callback branches', () => {
  // s: line 36 — static 'par sekundi'
  it('s returns "par sekundi" for a few seconds', () => {
    expect(dayjs().add(1, 's').locale('hr').fromNow(true)).toBe('par sekundi')
    expect(dayjs().add(30, 's').locale('hr').fromNow(true)).toBe('par sekundi')
  })

  // m: line 37 — static 'minuta'
  it('m returns "minuta" for 1 minute', () => {
    expect(dayjs().add(1, 'm').locale('hr').fromNow(true)).toBe('minuta')
  })

  // mm: line 38-40 — callback (1 → 'minuta', 2-4 → 'minute', 5+ → 'minuta')
  it('mm returns "minuta" for 1 minute (callback)', () => {
    const { mm } = dayjs().locale('hr').$locale().relativeTime
    expect(mm(1)).toBe('minuta')
  })

  it('mm returns "N minute" for 2-4 minutes', () => {
    expect(dayjs().add(2, 'm').locale('hr').fromNow(true)).toBe('2 minute')
    expect(dayjs().add(3, 'm').locale('hr').fromNow(true)).toBe('3 minute')
    expect(dayjs().add(4, 'm').locale('hr').fromNow(true)).toBe('4 minute')
  })

  it('mm returns "N minuta" for 5+ minutes', () => {
    expect(dayjs().add(5, 'm').locale('hr').fromNow(true)).toBe('5 minuta')
    expect(dayjs().add(10, 'm').locale('hr').fromNow(true)).toBe('10 minuta')
  })

  // h: line 41 — static 'sat'
  it('h returns "sat" for 1 hour', () => {
    expect(dayjs().add(1, 'h').locale('hr').fromNow(true)).toBe('sat')
  })

  // hh: line 43-45 — callback (1 → 'sat', 2-4 → 'sata', 5+ → 'sati')
  it('hh returns "sat" for 1 hour (callback)', () => {
    const { hh } = dayjs().locale('hr').$locale().relativeTime
    expect(hh(1)).toBe('sat')
  })

  it('hh returns "N sata" for 2-4 hours', () => {
    expect(dayjs().add(2, 'h').locale('hr').fromNow(true)).toBe('2 sata')
    expect(dayjs().add(3, 'h').locale('hr').fromNow(true)).toBe('3 sata')
    expect(dayjs().add(4, 'h').locale('hr').fromNow(true)).toBe('4 sata')
  })

  it('hh returns "N sati" for 5+ hours', () => {
    expect(dayjs().add(5, 'h').locale('hr').fromNow(true)).toBe('5 sati')
    expect(dayjs().add(10, 'h').locale('hr').fromNow(true)).toBe('10 sati')
  })

  // dd: line 50 (number === 1) and line 51 (number + ' dana')
  it('dd returns "dan" for 1 day', () => {
    expect(dayjs().add(1, 'd').locale('hr').fromNow(true)).toBe('dan')
  })

  it('dd returns "N dana" for 2+ days', () => {
    expect(dayjs().add(2, 'd').locale('hr').fromNow(true)).toBe('2 dana')
    expect(dayjs().add(3, 'd').locale('hr').fromNow(true)).toBe('3 dana')
    expect(dayjs().add(5, 'd').locale('hr').fromNow(true)).toBe('5 dana')
  })

  // MM: line 54 (number === 1 → 'mjesec') and line 55 (2-4 → 'mjeseca', 5+ → 'mjeseci')
  it('MM returns "mjesec" for 1 month', () => {
    expect(dayjs().add(1, 'M').locale('hr').fromNow(true)).toBe('mjesec')
  })

  it('MM returns "N mjeseca" for 2-4 months', () => {
    expect(dayjs().add(2, 'M').locale('hr').fromNow(true)).toBe('2 mjeseca')
    expect(dayjs().add(3, 'M').locale('hr').fromNow(true)).toBe('3 mjeseca')
    expect(dayjs().add(4, 'M').locale('hr').fromNow(true)).toBe('4 mjeseca')
  })

  it('MM returns "N mjeseci" for 5+ months', () => {
    expect(dayjs().add(5, 'M').locale('hr').fromNow(true)).toBe('5 mjeseci')
    expect(dayjs().add(10, 'M').locale('hr').fromNow(true)).toBe('10 mjeseci')
  })

  // yy: line 59 (number === 1 → 'godinu') and line 60 (2-4 → 'godine', 5+ → 'godina')
  it('yy returns "godinu" for 1 year', () => {
    expect(dayjs().add(1, 'y').locale('hr').fromNow(true)).toBe('godinu')
  })

  it('yy returns "N godine" for 2-4 years', () => {
    expect(dayjs().add(2, 'y').locale('hr').fromNow(true)).toBe('2 godine')
    expect(dayjs().add(3, 'y').locale('hr').fromNow(true)).toBe('3 godine')
    expect(dayjs().add(4, 'y').locale('hr').fromNow(true)).toBe('4 godine')
  })

  it('yy returns "N godina" for 5+ years', () => {
    expect(dayjs().add(5, 'y').locale('hr').fromNow(true)).toBe('5 godina')
    expect(dayjs().add(10, 'y').locale('hr').fromNow(true)).toBe('10 godina')
  })
})
