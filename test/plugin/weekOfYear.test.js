import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import weekOfYear from '../../src/plugin/weekOfYear'
import '../../src/locale/en-gb'

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

  // Edges
  expect(dayjs('2018-12-30').week()).toBe(moment('2018-12-30').week())
  expect(dayjs('2019-12-29').week()).toBe(moment('2019-12-29').week())
})
