import MockDate from 'mockdate'
import dayjs from '../../src'
import preParsePostFormat from '../../src/plugin/preParsePostFormat'
import localeData from '../../src/plugin/localeData'
import duration from '../../src/plugin/duration'
import calendar from '../../src/plugin/calendar'
import objectSupport from '../../src/plugin/objectSupport'
import customParseFormat from '../../src/plugin/customParseFormat'
import relativeTime from '../../src/plugin/relativeTime'
import utc from '../../src/plugin/utc'
import arraySupport from '../../src/plugin/arraySupport'
import en from '../../src/locale/en'

dayjs.extend(utc)
dayjs.extend(localeData)
dayjs.extend(customParseFormat)
dayjs.extend(arraySupport)
dayjs.extend(objectSupport)
dayjs.extend(calendar)
dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.extend(preParsePostFormat)

const symbolMap = {
  1: '!',
  2: '@',
  3: '#',
  4: '$',
  5: '%',
  6: '^',
  7: '&',
  8: '*',
  9: '(',
  0: ')'
}
const numberMap = {
  '!': '1',
  '@': '2',
  '#': '3',
  $: '4',
  '%': '5',
  '^': '6',
  '&': '7',
  '*': '8',
  '(': '9',
  ')': '0'
}

const localeCustomizations = {
  ...en,
  preparse(string) {
    if (typeof string !== 'string') {
      throw new Error(`preparse - Expected string, got ${typeof string}`)
    }
    try {
      return string.replace(/[!@#$%^&*()]/g, match => numberMap[match])
    } catch (error) {
      throw new Error(`Unexpected error during preparse of '${string}' - ${error}`)
    }
  },
  postformat(string) {
    if (typeof string !== 'string') {
      throw new Error(`postformat - Expected string, got ${typeof string}`)
    }
    try {
      return string.replace(/\d/g, match => symbolMap[match])
    } catch (error) {
      throw new Error(`Unexpected error during postFormat of '${string}' - ${error}`)
    }
  }
}

beforeEach(() => {
  MockDate.set(new Date())
  dayjs.locale('symbol', localeCustomizations)
})

afterEach(() => {
  MockDate.reset()
  dayjs.locale('symbol', null)
})

describe('preparse and postformat', () => {
  describe('transform', () => {
    const TEST_DATE = '@)!@-)*-@&'
    const TEST_NUM = 1346025600
    it('preparse string + format', () =>
      expect(dayjs.utc(TEST_DATE, 'YYYY-MM-DD').unix()).toBe(TEST_NUM))
    it('preparse ISO8601 string', () =>
      expect(dayjs.utc(TEST_DATE).unix()).toBe(TEST_NUM))
    it('postformat', () =>
      expect(dayjs
        .unix(TEST_NUM)
        .utc()
        .format('YYYY-MM-DD'))
        .toBe(TEST_DATE))
  })

  describe('transform from', () => {
    dayjs.locale('symbol', localeCustomizations)
    const start = dayjs([2007, 1, 28])

    const t1 = dayjs([2007, 1, 28]).add({ s: 90 })
    it('postformat should work on dayjs.fn.from', () =>
      expect(start.from(t1, true)).toBe('@ minutes'))

    const t2 = dayjs().add(6, 'd')
    it('postformat should work on dayjs.fn.fromNow', () =>
      expect(t2.fromNow(true)).toBe('^ days'))

    it('postformat should work on dayjs.duration.fn.humanize', () =>
      expect(dayjs.duration(10, 'h').humanize()).toBe('!) hours'))
  })
})

describe('calendar day', () => {
  const a = dayjs()
    .hour(12)
    .minute(0)
    .second(0)

  it('today at the same time', () =>
    expect(dayjs(a).calendar()).toBe('Today at !@:)) PM'))

  it('Now plus 25 min', () =>
    expect(dayjs(a)
      .add({ m: 25 })
      .calendar())
      .toBe('Today at !@:@% PM'))

  it('Now plus 1 hour', () =>
    expect(dayjs(a)
      .add({ h: 1 })
      .calendar())
      .toBe('Today at !:)) PM'))

  it('tomorrow at the same time', () =>
    expect(dayjs(a)
      .add({ d: 1 })
      .calendar())
      .toBe('Tomorrow at !@:)) PM'))

  it('Now minus 1 hour', () =>
    expect(dayjs(a)
      .subtract({ h: 1 })
      .calendar())
      .toBe('Today at !!:)) AM'))

  it('yesterday at the same time', () =>
    expect(dayjs(a)
      .subtract({ d: 1 })
      .calendar())
      .toBe('Yesterday at !@:)) PM'))
})
