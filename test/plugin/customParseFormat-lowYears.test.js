import dayjs from '../../src'
import customParseFormat from '../../src/plugin/customParseFormat'
import utc from '../../src/plugin/utc'

dayjs.extend(customParseFormat)
dayjs.extend(utc)

describe('customParseFormat years below 100', () => {
  ['0000', '0001', '0002', '0020', '0099', '0100'].forEach((year) => {
    [false, true].forEach((useUtc) => {
      it(`preserves ${year} in ${useUtc ? 'UTC' : 'local'} mode`, () => {
        const input = `01.08.${year} 12:34:56`
        const format = 'DD.MM.YYYY HH:mm:ss'
        const parsed = useUtc ? dayjs.utc(input, format, true) : dayjs(input, format, true)
        expect(parsed.isValid()).toBe(true)
        expect(parsed.year()).toBe(Number(year))
        expect(parsed.format(format)).toBe(input)
      })
    })
  })

  it('uses January 1 when only year zero is supplied', () => {
    expect(dayjs('0000', 'YYYY').format('YYYY-MM-DD')).toBe('0000-01-01')
    expect(dayjs.utc('0000', 'YYYY').format('YYYY-MM-DD')).toBe('0000-01-01')
  })

  it('preserves leap days in years zero and four', () => {
    ['0000-02-29', '0004-02-29'].forEach((input) => {
      expect(dayjs(input, 'YYYY-MM-DD', true).format('YYYY-MM-DD')).toBe(input)
      expect(dayjs.utc(input, 'YYYY-MM-DD', true).format('YYYY-MM-DD')).toBe(input)
    })
  })

  it('keeps the year rollover caused by an explicit timezone offset', () => {
    const format = 'YYYY-MM-DD HH:mm ZZ'
    expect(dayjs('0001-01-01 00:15 +0100', format).toISOString()).toBe('0000-12-31T23:15:00.000Z')
    expect(dayjs('0099-12-31 23:45 -0100', format).toISOString()).toBe('0100-01-01T00:45:00.000Z')
  })

  it('retains overflow normalization and the two-digit year convention', () => {
    expect(dayjs('0099-13-01', 'YYYY-MM-DD').format('YYYY-MM-DD')).toBe('0100-01-01')
    expect(dayjs('20-08-01', 'YY-MM-DD').year()).toBe(2020)
    expect(dayjs('69-08-01', 'YY-MM-DD').year()).toBe(1969)
  })
})
