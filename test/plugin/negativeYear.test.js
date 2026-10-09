import MockDate from 'mockdate'
import dayjs from 'dayjs'
import negativeYear from '../../src/plugin/negativeYear'
import utc from '../../src/plugin/utc'
import { REGEX_PARSE } from '../../src/constant'


dayjs.extend(negativeYear)
dayjs.extend(utc)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('negativeYear', () => {
  it('parses negative years', () => {
    expect(dayjs('-2020-01-01').year()).toBe(-2020)
    const date = '-2021/01/03'
    const date2 = '01/03/-2021'
    const date3 = '01-03--2021'
    const date4 = '-03-15'
    const d = date.match(REGEX_PARSE)
    expect(dayjs(date).format('YYYY-MM-DD')).toBe('-2021-01-03')
    expect(dayjs(date2).format('YYYY-MM-DD')).toBe('Invalid Date')
    expect(dayjs(date3).format()).toBe('Invalid Date')
    expect(dayjs(date4).format('YYYY-MM-DD')).toBe('2001-03-15')
    expect(d).toBe(null)
  })

  const negativeInputs = ['-0100-06-15', '-0200/06/15', '-0999-06-15', '-1000-06-15']
  const utcModes = [false, true]
  negativeInputs.forEach((input) => {
    utcModes.forEach((utcMode) => {
      it(`parses the zero-padded negative year in ${input} (UTC: ${utcMode})`, () => {
        const date = utcMode ? dayjs.utc(input) : dayjs(input)
        expect(date.year()).toBe(-Number(input.slice(1, 5)))
        expect(date.month()).toBe(5)
        expect(date.date()).toBe(15)
      })
    })
  })

  utcModes.forEach((utcMode) => {
    it(`preserves time in zero-padded negative years (UTC: ${utcMode})`, () => {
      const input = '-0100-06-15T12:34:56.789'
      const date = utcMode ? dayjs.utc(input) : dayjs(input)
      expect(date.year()).toBe(-100)
      expect(date.month()).toBe(5)
      expect(date.date()).toBe(15)
      expect(date.hour()).toBe(12)
      expect(date.minute()).toBe(34)
      expect(date.second()).toBe(56)
      expect(date.millisecond()).toBe(789)
    })

    it(`preserves native expanded ISO year parsing (UTC: ${utcMode})`, () => {
      const inputs = ['-000100-06-15', '-000100-06-15T12:34:56', '-000100-06-15T12:34:56Z']
      inputs.forEach((input) => {
        const native = new Date(input)
        const date = utcMode ? dayjs.utc(input) : dayjs(input)
        expect(date.valueOf()).toBe(native.valueOf())
        expect(date.utcOffset()).toBe(utcMode ? 0 : dayjs(native).utcOffset())
        expect(date.date()).toBe(utcMode ? native.getUTCDate() : native.getDate())
        expect(date.hour()).toBe(utcMode ? native.getUTCHours() : native.getHours())
        expect(date.minute()).toBe(utcMode ? native.getUTCMinutes() : native.getMinutes())
        expect(date.second()).toBe(utcMode ? native.getUTCSeconds() : native.getSeconds())
      })
    })

    it(`preserves non-negative small years (UTC: ${utcMode})`, () => {
      const inputs = ['0000-06-15', '0001-06-15', '0099-06-15']
      inputs.forEach((input) => {
        const date = utcMode ? dayjs.utc(input) : dayjs(input)
        expect(date.year()).toBe(Number(input.slice(0, 4)) + 1900)
        expect(date.month()).toBe(5)
        expect(date.date()).toBe(15)
      })
    })
  })

  it('does not parse non-negative years', () => {
    expect(dayjs('2020-01-01').year()).toBe(2020)
  })

  it('works with other plugins', () => {
    expect(dayjs.utc('-2020-01-01').year()).toBe(-2020)
  })

  it('Add and subtract with negative years', () => {
    expect(dayjs('-2006').add(1, 'y')).toEqual(dayjs('-2005'))
    expect(dayjs('-2006').subtract(1, 'y')).toEqual(dayjs('-2007'))
    expect(dayjs('-2006').add(1, 'y').format('YYYY')).toBe(dayjs('-2005').format('YYYY'))
    expect(dayjs('-2006').subtract(1, 'y').format('YYYY')).toBe(dayjs('-2007').format('YYYY'))
  })

  it('Compare date with negative years', () => {
    expect(dayjs('-2006').isAfter(dayjs('-2007'))).toBeTruthy()
    expect(dayjs('-2006').isBefore(dayjs('-2005'))).toBeTruthy()
    expect(dayjs('-2006').isSame('-2006')).toBeTruthy()
  })
})
