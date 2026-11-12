import dayjs from '../../src'
import customParseFormat from '../../src/plugin/customParseFormat'

dayjs.extend(customParseFormat)

// Issue #1331: S and SS format tokens are not supported by the base format() function
// This means:
//   1. dayjs().format('S')  returns literal 'S'  instead of first digit of milliseconds
//   2. dayjs().format('SS') returns literal 'SS' instead of first two digits of milliseconds
//   3. customParseFormat strict mode fails with S/SS tokens

describe('S and SS format tokens', () => {
  describe('base format() support', () => {
    it('format S returns first digit of milliseconds (hundreds)', () => {
      expect(dayjs('2021-01-01T00:00:00.500').format('S')).toBe('5')
      expect(dayjs('2021-01-01T00:00:00.900').format('S')).toBe('9')
      expect(dayjs('2021-01-01T00:00:00.000').format('S')).toBe('0')
    })

    it('format SS returns first two digits of milliseconds', () => {
      expect(dayjs('2021-01-01T00:00:00.520').format('SS')).toBe('52')
      expect(dayjs('2021-01-01T00:00:00.050').format('SS')).toBe('05')
      expect(dayjs('2021-01-01T00:00:00.000').format('SS')).toBe('00')
    })

    it('format SSS still works (3 digits)', () => {
      expect(dayjs('2021-01-01T00:00:00.520').format('SSS')).toBe('520')
      expect(dayjs('2021-01-01T00:00:00.005').format('SSS')).toBe('005')
    })
  })

  describe('customParseFormat strict mode with S/SS tokens', () => {
    it('SS strict mode parses 2-digit fractional seconds correctly', () => {
      const result = dayjs(
        '2021-01-01T00:00:00.52',
        'YYYY-MM-DDTHH:mm:ss.SS',
        true
      )
      expect(result.isValid()).toBe(true)
      expect(result.millisecond()).toBe(520)
    })

    it('S strict mode parses 1-digit fractional seconds correctly', () => {
      const result = dayjs(
        '2021-01-01T00:00:00.5',
        'YYYY-MM-DDTHH:mm:ss.S',
        true
      )
      expect(result.isValid()).toBe(true)
      expect(result.millisecond()).toBe(500)
    })

    it('SSS strict mode still works', () => {
      const result = dayjs(
        '2021-01-01T00:00:00.520',
        'YYYY-MM-DDTHH:mm:ss.SSS',
        true
      )
      expect(result.isValid()).toBe(true)
      expect(result.millisecond()).toBe(520)
    })
  })
})
