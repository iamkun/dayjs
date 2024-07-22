import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import '../../src/locale/ru'
import uk from '../../src/locale/uk'
import '../../src/locale/zh-cn'
import customParseFormat from '../../src/plugin/customParseFormat'
import advancedFormat from '../../src/plugin/advancedFormat'
import localizedFormats from '../../src/plugin/localizedFormat'

dayjs.extend(customParseFormat)
dayjs.extend(localizedFormats)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('does not break the built-in parsing', () => {
  const input = '2018-05-02 01:02:03.004'
  expect(dayjs(input).valueOf()).toBe(moment(input).valueOf())
})

it('parse padded string', () => {
  const input = '2018-05-02 01:02:03.004 AM +01:00'
  const format = 'YYYY-MM-DD HH:mm:ss.SSS A Z'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse string for MMM month format', () => {
  const input = '4/Mar/2019:11:16:26 +0800'
  const format = 'D/MMM/YYYY:H:m:s zz'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
  const input2 = '21-Dec-18'
  const format2 = 'D-MMM-YY'
  expect(dayjs(input2, format2).valueOf()).toBe(moment(input2, format2).valueOf())
})

it('parse string January (getMonth() = 0)', () => {
  const input = '01/01/2019'
  const format = 'DD/MM/YYYY'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse unpadded string', () => {
  const input = '2.5.18 1:2:3.4 PM -0100'
  const format = 'D.M.YY H:m:s.S A ZZ'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse time zone abbreviation', () => {
  const input = '05/02/69 1:02:03.004 AM +01:00 (CET)'
  const format = 'MM/DD/YY h:mm:ss.SSS A Z (z)'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse time zone abbreviation2', () => {
  const input = '05/02/69 1:02:03.04 AM +01:00 (CET)'
  const format = 'MM/DD/YY h:mm:ss.SS A Z (z)'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('recognizes midnight in small letters', () => {
  const input = '2018-05-02 12:00 am'
  const format = 'YYYY-MM-DD hh:mm a'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('recognizes noon in small letters', () => {
  const input = '2018-05-02 12:00 pm'
  const format = 'YYYY-MM-DD hh:mm a'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

describe('parse localizedFormats', () => {
  ['zh-cn', 'ru', 'uk', 'en'].forEach((lo) => {
    it(`Locale: ${lo}`, () => {
      const input = '2018-05-02 01:02:03.004'
      dayjs.locale(lo)
      moment.locale(lo)
      const longDateFormats = ['LT', 'LTS', 'L', 'LL', 'l', 'll', 'lll', 'l LT', 'LL [l] LTS'] // TODO: fix LLL, LLLL and llll
      longDateFormats.forEach((f) => {
        const localizedInput = moment(input).format(f)
        expect(dayjs(localizedInput, f).valueOf()).toBe(moment(localizedInput, f).valueOf())
      })
    })
  })
})

it('leaves non-token parts of the format intact', () => {
  const input = '2018-05-02 12:00 +0000 S:/-.() SS h '
  const format = 'YYYY-MM-DD HH:mm ZZ [S]:/-.()[ SS h ]'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('timezone with no hour', () => {
  const input = '2018-05-02 +0000'
  const format = 'YYYY-MM-DD ZZ'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

describe('Timezone Offset', () => {
  it('timezone with 2-digit offset', () => {
    const input = '2020-12-01T20:00:00+09'
    const format = 'YYYY-MM-DD[T]HH:mm:ssZZ'
    const result = dayjs(input, format)
    expect(result.valueOf()).toBe(moment(input, format).valueOf())
    expect(result.valueOf()).toBe(1606820400000)
  })
  it('zulu', () => {
    const input = '2021-01-26T15:38:43.000Z'
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
    const result = dayjs(input, format)
    expect(result.valueOf()).toBe(moment(input, format).valueOf())
    expect(result.valueOf()).toBe(1611675523000)
  })
  it('no timezone format token should parse in local time', () => {
    const input = '2020-12-01T20:00:00+01:00'
    const format = 'YYYY-MM-DD[T]HH:mm:ss'
    const result = dayjs(input, format)
    expect(result.valueOf()).toBe(moment(input, format).valueOf())
  })
})

it('parse hh:mm', () => {
  const input = '12:00'
  const format = 'hh:mm'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse HH:mm:ss', () => {
  const input = '00:27:21'
  const format = 'HH:mm:ss'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse HH:mm:ss but only one digit', () => {
  const input = '0:0:1'
  const format = 'HH:mm:ss'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse HH:mm:ss.SSS', () => {
  const input = '00:27:21.123'
  const format = 'HH:mm:ss.SSS'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse HH:mm:ss.SS', () => {
  const input = '00:27:21.12'
  const format = 'HH:mm:ss.SS'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse HH:mm:ss.S', () => {
  const input = '00:27:21.1'
  const format = 'HH:mm:ss.S'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

describe('parse YYYY / YYYY-MM only', () => {
  it('YYYY', () => {
    const input = '2001 +08:00'
    const format = 'YYYY Z'
    expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
    const input2 = '2001'
    const format2 = 'YYYY'
    expect(dayjs(input2, format2).valueOf()).toBe(moment(input2, format2).valueOf())
  })
  it('YYYY-MM', () => {
    const input = '2001-01 +08:00'
    const format = 'YYYY-MM Z'
    expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
    const input2 = '2001-01'
    const format2 = 'YYYY-MM'
    expect(dayjs(input2, format2).valueOf()).toBe(moment(input2, format2).valueOf())
  })
})

it('parse hh:mm:ss but only one digit', () => {
  const input = '0:0:1'
  const format = 'hh:mm:ss'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('fails with an invalid format', () => {
  const input = '2018-05-02 12:00 PM'
  const format = 'C'
  expect(dayjs(input, format).format().toLowerCase())
    .toBe(moment(input, format).format().toLowerCase())
})

it('parse month from string', () => {
  const input = '2018 February 03'
  const format = 'YYYY MMMM DD'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
  const input2 = '21-December-18'
  const format2 = 'D-MMMM-YY'
  expect(dayjs(input2, format2).valueOf()).toBe(moment(input2, format2).valueOf())
})

it('parse month from short string', () => {
  const input = '2018 Feb 03'
  const format = 'YYYY MMM DD'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
})

it('parse month from string with locale in config', () => {
  const input = '2018 лютий 03'
  const format = 'YYYY MMMM DD'

  expect(dayjs(input, format, 'uk').valueOf()).toBe(moment(input, format, 'uk').valueOf())
})

it('parse month from short string with locale in config', () => {
  const input = '2018 трав 03'
  const format = 'YYYY MMM DD'
  expect(dayjs(input, format, 'uk').valueOf()).toBe(moment(input, format, 'uk').valueOf())
})

it('parse month from short string with locale in argument', () => {
  const input = '2018 трав 03'
  const format = 'YYYY MMM DD'
  expect(dayjs(input, format, 'uk').valueOf()).toBe(moment(input, format, 'uk').valueOf())
})

it('parse month from string with locale in argument', () => {
  const input = '2018 лютий 03'
  const format = 'YYYY MMMM DD'

  expect(dayjs(input, format, 'uk').valueOf()).toBe(moment(input, format, 'uk').valueOf())
})

it('return Invalid Date when parse corrupt string', () => {
  const input = '2018 Turnip 03'
  const format = 'YYYY MMMM DD'
  expect(dayjs(input, format).format()).toBe('Invalid Date')
})

it('return Invalid Date when parse corrupt short string', () => {
  const input = '2018 Dog 03'
  const format = 'YYYY MMM DD'
  expect(dayjs(input, format).format()).toBe('Invalid Date')
})

it('YYYY-MM set 1st day of the month', () => {
  expect(dayjs('2019-02', 'YYYY-MM').format('YYYY-MM-DD')).toBe('2019-02-01')
})

it('Valid Date', () => {
  expect(dayjs('2014/10/12', 'YYYY-MM-DD').format('MM-DD-YYYY')).toBe('10-12-2014')
})

it('correctly parse month from string after changing locale globally', () => {
  const input = '2018 лютий 03'
  const format = 'YYYY MMMM DD'

  const dayjsLocale = dayjs().$locale()
  const momentLocale = moment.locale()
  try {
    dayjs.locale(uk)
    moment.locale('uk')
    expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
  } finally {
    dayjs.locale(dayjsLocale)
    moment.locale(momentLocale)
  }
})

it('correctly parse ordinal', () => {
  const input = '7th March 2019'
  const input2 = '17th March 2019'
  const inputFalse = '7st March 2019'
  const inputZHCN = '7日 三月 2019'
  const format = 'Do MMMM YYYY'
  const displayFormatWithLocale = 'MMMM dddd'
  expect(dayjs(input, format).valueOf())
    .toBe(moment(input, format).valueOf())
  expect(dayjs(input2, format).valueOf())
    .toBe(moment(input2, format).valueOf())
  expect(dayjs(inputFalse, format).valueOf())
    .toBe(moment(inputFalse, format).valueOf())

  const dayjsCN = dayjs(inputZHCN, format, 'zh-cn')
  const momentCN = moment(inputZHCN, format, 'zh-cn')
  expect(dayjsCN.valueOf())
    .toBe(momentCN.valueOf())
  expect(dayjsCN.format(displayFormatWithLocale))
    .toBe(momentCN.format(displayFormatWithLocale))
  expect(dayjsCN.locale())
    .toBe(momentCN.locale())
})

describe('month function locale', () => {
  it('MMMM', () => {
    const input = '08 мая 2020'
    const input2 = '08 май 2020'
    const format = 'DD MMMM YYYY'
    expect(dayjs(input, format, 'ru').valueOf()).toBe(moment(input, format, 'ru').valueOf())
    expect(dayjs(input2, format, 'ru').valueOf()).toBe(moment(input2, format, 'ru').valueOf())
  })
  it('MMM', () => {
    const input = '08 февр. 2020'
    const format = 'DD MMM YYYY'
    expect(dayjs(input, format, 'ru').valueOf()).toBe(moment(input, format, 'ru').valueOf())
  })
})

describe('Strict mode', () => {
  it('Date with single digit day in strict mode', () => {
    const input = '30/1/2020'
    const format = 'DD/MM/YYYY'
    const resultDayjs = dayjs(input, format, true)
    const resultMoment = moment(input, format, true)
    expect(resultMoment.isValid()).toBe(false)
    expect(resultDayjs.isValid()).toBe(false)
    expect(resultDayjs.format('MM-DD-YYYY')).toBe('Invalid Date')
    expect(resultDayjs.valueOf()).toBe(resultMoment.valueOf())
  })
  it('Date not matching format in strict mode', () => {
    ['10/12/2014', '10-12-2014'].forEach((input) => {
      const format = 'YYYY-MM-DD'
      const resultDayjs = dayjs(input, format, true)
      const resultMoment = moment(input, format, true)
      expect(resultMoment.isValid()).toBe(false)
      expect(resultDayjs.isValid()).toBe(false)
      expect(resultDayjs.format('MM-DD-YYYY')).toBe('Invalid Date')
      expect(resultDayjs.valueOf()).toBe(resultMoment.valueOf())
    })
  })
  it('without locale and with meridiem', () => {
    const input = '30/1/2020 10:59 PM'
    const format = 'D/M/YYYY h:mm A'
    const resultDayjs = dayjs(input, format, true)
    const resultMoment = moment(input, format, true)
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultMoment.isValid()).toBe(true)
    expect(resultDayjs.format('MM-DD-YYYY HH:mm:ss')).toBe('01-30-2020 22:59:00')
    expect(resultDayjs.valueOf()).toBe(resultMoment.valueOf())
  })
})

describe('Array format support', () => {
  it('second ok', () => {
    const input = '2012-05-28'
    const format = ['YYYY', 'YYYY-MM-DD']
    expect(dayjs(input, format).isValid()).toBe(true)
    expect(dayjs(input, format, true).format('YYYY-MM-DD')).toBe('2012-05-28')
  })
  it('all invalid', () => {
    const input = '2012-05-28'
    const format = ['DD', 'MM-DD']
    expect(dayjs(input, format, true).isValid()).toBe(false)
  })
  it('with locale', () => {
    const input = '2018 三月 12'
    const format = ['YYYY', 'MM', 'YYYY MMMM DD']
    expect(dayjs(input, format, 'zh-cn', true).format('YYYY MMMM DD')).toBe(input)
  })
  it('with Z offset in strict mode', () => {
    const d = '2018-04-24 11:12Z'
    const format = ['YYYY-MM-DD HH:mmZ', 'YYYY-MM-DD']
    const resultDayjs = dayjs(d, format, true)
    const resultMoment = moment(d, format, true)
    expect(resultMoment.isValid()).toBe(true)
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.valueOf()).toBe(resultMoment.valueOf())
  })
})

describe('meridiem locale', () => {
  const format = 'YYYY年M月D日Ah点mm分ss秒'
  const format2 = 'YYYY-MM-DD HH:mm:ss'
  it('AM', () => {
    const input = '2018-05-02 01:02:03'
    const date = dayjs(input).locale('zh-cn').format(format)
    expect(dayjs(date, format, 'zh-cn').format(format2)).toBe(input)
  })
  it('PM', () => {
    const input = '2018-05-02 20:02:03'
    const date = dayjs(input).locale('zh-cn').format(format)
    expect(dayjs(date, format, 'zh-cn').format(format2)).toBe(input)
  })
})

it('parse a string for MMM month format with underscore delimiter', () => {
  const input = 'Jan_2021'
  const format = 'MMM_YYYY'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
  const input2 = '21_Jan_2021_123523'
  const format2 = 'DD_MMM_YYYY_hhmmss'
  expect(dayjs(input2, format2).valueOf()).toBe(moment(input2, format2).valueOf())
})

it('custom two-digit year parse function', () => {
  delete customParseFormat.$i // this allow plugin to be installed again
  dayjs.extend(customParseFormat, {
    parseTwoDigitYear: yearString => (+yearString) + 1800
  })
  const format = 'YY-MM-DD'
  const input = '00-05-02'
  expect(dayjs(input, format).year()).toBe(1800)
  const input2 = '50-05-02'
  expect(dayjs(input2, format).year()).toBe(1850)
  const input3 = '99-05-02'
  expect(dayjs(input3, format).year()).toBe(1899)
})

describe('Incompatibility with moment.js', () => {
  it('Date not matching format', () => {
    ['10/12/2014', '10-12-2014'].forEach((input) => {
      const format = 'YYYY-MM-DD'
      const resultDayjs = dayjs(input, format)
      const resultMoment = moment(input, format)
      expect(resultMoment.isValid()).toBe(true)
      expect(resultDayjs.isValid()).toBe(true)
      expect(resultDayjs.format('MM-DD-YYYY')).toBe('01-01-2014')
      expect(resultMoment.format('MM-DD-YYYY')).toBe('12-20-2010')
    })
  })
  it('Date not matching format in strict mode', () => {
    ['10/12/2014', '10-12-2014'].forEach((input) => {
      const format = 'YYYY-MM-DD'
      const resultDayjs = dayjs(input, format, true)
      const resultMoment = moment(input, format, true)
      expect(resultMoment.isValid()).toBe(false)
      expect(resultDayjs.isValid()).toBe(false)
      expect(resultDayjs.format('MM-DD-YYYY')).toBe('Invalid Date')
      expect(resultMoment.format('MM-DD-YYYY')).toBe('Invalid date')
    })
  })
  it('Incompatibility - invalid Date with overflow', () => {
    const input = '35/22/2010 99:88:77'
    const format = 'DD-MM-YYYY HH:mm:ss'
    const resultDayjs = dayjs(input, format)
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format(format)).toBe('08-11-2011 04:29:17')
    const resultMoment = moment(input, format)
    expect(resultMoment.isValid()).toBe(false)
    expect(resultMoment.format(format)).toBe('Invalid date')
  })
  it('Compatibility - invalid Date with overflow in strict mode', () => {
    const input = '35/22/2010 99:88:77'
    const format = 'DD-MM-YYYY HH:mm:ss'
    const resultDayjs = dayjs(input, format, true)
    expect(resultDayjs.isValid()).toBe(false)
    expect(resultDayjs.format(format)).toBe('Invalid Date')
    const resultMoment = moment(input, format, true)
    expect(resultMoment.isValid()).toBe(false)
    expect(resultMoment.format(format)).toBe('Invalid date')
  })
  it('Incompatibility - invalid Date (0 value) with overflow', () => {
    const input = '1970-00-00'
    const format = 'YYYY-MM-DD'
    const resultDayjs = dayjs(input, format)
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format('YYYY-MM-DD HH:mm:ss')).toBe('1970-01-01 00:00:00')
    const resultMoment = moment(input, format)
    expect(resultMoment.isValid()).toBe(false)
    expect(resultMoment.format('YYYY-MM-DD HH:mm:ss')).toBe('Invalid date')
  })
  it('Compatibility - invalid Date (0 value) with overflow in strict mode', () => {
    const input = '1970-00-00'
    const format = 'YYYY-MM-DD'
    const resultDayjs = dayjs(input, format, true)
    expect(resultDayjs.isValid()).toBe(false)
    expect(resultDayjs.format('YYYY-MM-DD HH:mm:ss')).toBe('Invalid Date')
    const resultMoment = moment(input, format, true)
    expect(resultMoment.isValid()).toBe(false)
    expect(resultMoment.format('YYYY-MM-DD HH:mm:ss')).toBe('Invalid date')
  })
  it('Incompatibility - invalid Date with overflow and locale', () => {
    const input = '2018 三月 99'
    const format = 'YYYY MMMM DD'
    const locale = 'zh-cn'
    const resultDayjs = dayjs(input, format, locale)
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format(format)).toBe('2018 六月 07')
    const resultMoment = moment(input, format, locale)
    expect(resultMoment.isValid()).toBe(false)
    expect(resultMoment.format(format)).toBe('Invalid date')
  })
  it('Compatibility - invalid Date with overflow and locale in strict mode', () => {
    const input = '2018 三月 99'
    const format = 'YYYY MMMM DD'
    const locale = 'zh-cn'
    const resultDayjs = dayjs(input, format, locale, true)
    expect(resultDayjs.isValid()).toBe(false)
    expect(resultDayjs.format(format)).toBe('Invalid Date')
    const resultMoment = moment(input, format, locale, true)
    expect(resultMoment.isValid()).toBe(false)
    expect(resultMoment.format(format)).toBe('Invalid date')
  })
  it('Incompatibility - first match vs. longest match', () => {
    const input = '2012-05-28 10:21:15'
    const format = ['YYYY', 'YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss']
    const resultDayjs = dayjs(input, format)
    const resultMoment = moment(input, format)
    expect(resultMoment.isValid()).toBe(true)
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format('YYYY-MM-DD HH:mm:ss')).toBe('2012-01-01 00:00:00')
    expect(resultMoment.format('YYYY-MM-DD HH:mm:ss')).toBe('2012-05-28 10:21:15')
  })
  it('Compatibility - first match vs. longest match in strict mode', () => {
    const input = '2012-05-28 10:21:15'
    const format = ['YYYY', 'YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss']
    const resultDayjs = dayjs(input, format, true)
    const resultMoment = moment(input, format, true)
    expect(resultMoment.isValid()).toBe(true)
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format('YYYY-MM-DD HH:mm:ss')).toBe('2012-05-28 10:21:15')
    expect(resultMoment.format('YYYY-MM-DD HH:mm:ss')).toBe('2012-05-28 10:21:15')
  })
  it('Incompatibility - time value "24:11:00"', () => {
    const input = '01-01-2010 24:11:00'
    const format = 'DD-MM-YYYY HH:mm:ss'
    const resultDayjs = dayjs(input, format)
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format(format)).toBe('02-01-2010 00:11:00')
    const resultMoment = moment(input, format)
    expect(resultMoment.isValid()).toBe(false)
    expect(resultMoment.format(format)).toBe('Invalid date')
  })
  it('Incompatibility - time value "24:00:22"', () => {
    const input = '01-01-2010 24:00:22'
    const format = 'DD-MM-YYYY HH:mm:ss'
    const resultDayjs = dayjs(input, format)
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format(format)).toBe('02-01-2010 00:00:22')
    const resultMoment = moment(input, format)
    expect(resultMoment.isValid()).toBe(false)
    expect(resultMoment.format(format)).toBe('Invalid date')
  })
  it('Incompatibility - time value "24:00:00.100"', () => {
    const input = '01-01-2010 24:00:00.100'
    const format = 'DD-MM-YYYY HH:mm:ss.SSS'
    const resultDayjs = dayjs(input, format)
    expect(resultDayjs.isValid()).toBe(true)
    expect(resultDayjs.format(format)).toBe('02-01-2010 00:00:00.100')
    const resultMoment = moment(input, format)
    expect(resultMoment.isValid()).toBe(false)
    expect(resultMoment.format(format)).toBe('Invalid date')
  })
})

it('parse X x', () => {
  const input = '1410715640.579'
  const format = 'X'
  expect(dayjs(input, format).valueOf()).toBe(moment(input, format).valueOf())
  const input2 = '1410715640579'
  const format2 = 'x'
  expect(dayjs(input2, format2).valueOf()).toBe(moment(input2, format2).valueOf())

  // x X starct parse requires advancedFormat plugin
  dayjs.extend(advancedFormat)
  expect(dayjs(input2, format2, true).valueOf()).toBe(moment(input2, format2, true).valueOf())
})
