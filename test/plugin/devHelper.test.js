import MockDate from 'mockdate'
import dayjs from '../../src'
import customParseFormat from '../../src/plugin/customParseFormat'
import devHelper from '../../src/plugin/devHelper'
import localeData from '../../src/plugin/localeData'

dayjs.extend(devHelper)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

global.console.warn = jest.genMockFunction()


it('Warning: passing Year as a Number will be parsed as a Unix timestamp', () => {
  const consoleSpy = jest.spyOn(console, 'warn')
  dayjs(2020)
  expect(consoleSpy).toHaveBeenCalledWith('Guessing you may want to parse the Year 2020, you should pass it as a String 2020, not a Number. Otherwise, 2020 will be treated as a Unix timestamp')
})

it('Warning Passing Unix timestamp as a String not Number', () => {
  const consoleSpy = jest.spyOn(console, 'warn')
  dayjs('1231231231231')
  expect(consoleSpy).toHaveBeenCalledWith('To parse a Unix timestamp like 1231231231231, you should pass it as a Number. https://day.js.org/docs/en/parse/unix-timestamp-milliseconds')
})

it('Warning Enable customParseFormat plugin while passing the second format parameter', () => {
  const consoleSpy = jest.spyOn(console, 'warn')
  dayjs('2020', 'YYYY')
  expect(consoleSpy).toHaveBeenCalledWith('To parse a date-time string like 2020 using the given format, you should enable customParseFormat plugin first. https://day.js.org/docs/en/parse/string-format')
})

it('Warning: Setting locale before loading locale', () => {
  const consoleSpy = jest.spyOn(console, 'warn')
  dayjs.locale('zh-cn')
  expect(consoleSpy).toHaveBeenCalledWith('Guessing you may want to use locale zh-cn, you have to load it before using it. https://day.js.org/docs/en/i18n/loading-into-nodejs')
})

describe('dev-helper: diff() usage warnings', () => {
  const diffWarningMsg = 'Invalid usage: diff() requires a valid comparison date as the first argument. https://day.js.org/docs/en/display/difference'

  beforeAll(() => {
    dayjs.extend(customParseFormat)
    dayjs.extend(localeData)
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('warns when diff() is called with no comparison date', () => {
    const consoleSpy = jest.spyOn(console, 'warn')
    dayjs('2025-01-10').diff()
    expect(consoleSpy).toHaveBeenCalledWith(diffWarningMsg)
  })

  it('warns when diff() is called with just the unit', () => {
    const consoleSpy = jest.spyOn(console, 'warn')
    dayjs('2025-01-10').diff('days')
    expect(consoleSpy).toHaveBeenCalledWith(diffWarningMsg)
  })

  it('warns when diff() is called with an invalid comparison date (unparsable string)', () => {
    const consoleSpy = jest.spyOn(console, 'warn')
    dayjs('2025-01-10').diff('invalid-date', 'days')
    expect(consoleSpy).toHaveBeenCalledWith(diffWarningMsg)
  })

  it('does NOT warn when diff() is called with a valid string date', () => {
    const consoleSpy = jest.spyOn(console, 'warn')
    dayjs('2025-01-10').diff('2025-01-09', 'days')
    expect(consoleSpy).not.toHaveBeenCalledWith(diffWarningMsg)
  })

  it('does NOT warn when diff() is called with a valid Day.js instance', () => {
    const consoleSpy = jest.spyOn(console, 'warn')
    dayjs('2025-01-10').diff(dayjs(), 'days')
    expect(consoleSpy).not.toHaveBeenCalledWith(diffWarningMsg)
  })
})
