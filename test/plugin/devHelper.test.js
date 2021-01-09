import MockDate from 'mockdate'
import dayjs from '../../src'
import devHelper from '../../src/plugin/devHelper'

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
