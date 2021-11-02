import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import weekOfYear from '../../src/plugin/weekOfYear'
import advancedFormat from '../../src/plugin/advancedFormat'
import '../../src/locale/en-gb'

dayjs.extend(advancedFormat)
dayjs.extend(weekOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Week of year', () => {
  dayjs.locale('en')

  const day = '2018-12-31T10:59:09+08:00'
  const week = 27
  expect(dayjs(day).week()).toBe(moment(day).week())
  expect(dayjs().week()).toBe(moment().week())
  expect(dayjs().week(week).week()).toBe(moment().week(week).week())
  expect(dayjs().weeks(week).week()).toBe(moment().weeks(week).week())
  expect(dayjs().weeks(-week).week()).toBe(moment().weeks(-week).week())
  expect(dayjs().weeks(55).week()).toBe(moment().weeks(55).week())
  expect(dayjs().weeks()).toBe(moment().weeks())
})

it('Week of year with locale', () => {
  dayjs.locale('en-gb')
  moment.locale('en-gb')
  const day = '2019-07-28'
  expect(dayjs(day).week()).toBe(moment(day).week())
})

describe('Week of year with locale edges', () => {
  const testCases = [
    '2018-12-30',
    '2018-12-31',
    '2019-12-29',
    '2019-12-30',
    '2016-01-01',
    '2016-01-04'
  ]
  testCases.forEach((t) => {
    it(`Edges ${t}`, () => {
      expect(dayjs(t).week())
        .toBe(moment(t).week())
    })
  })
})

it('Format w ww wo', () => {
  const day = '2019-07-28'
  const D = dayjs(day)
  const M = moment(day)
  expect(D.format('w ww wo')).toBe(M.format('w ww wo'))
})
