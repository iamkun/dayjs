import MockDate from 'mockdate'
import dayjs from '../../src'
import timeStartOrEnd from '../../src/plugin/timeStartOrEnd'

dayjs.extend(timeStartOrEnd)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('timeStartOrEnd', () => {
  // 当月第一天
  expect(dayjs('2018-09-10')
    .monthStart()
    .valueOf()).toEqual(dayjs('2018-09-01').valueOf())

  // 当月最后一天
  expect(dayjs('2018-09-10')
    .monthEnd()
    .valueOf()).toEqual(dayjs('2018-09-30').valueOf())

  // 当天第一毫秒
  expect(dayjs('2018-09-10 12:09:09')
    .dayStart()
    .valueOf()).toEqual(dayjs('2018-09-10 00:00:00').valueOf())

  // 当天最后一毫秒
  expect(dayjs('2018-09-10 12:09:09')
    .dayEnd()
    .valueOf()).toEqual(dayjs('2018-09-10 23:59:59:999').valueOf())

  // 当月第一天,最后毫秒
  expect(dayjs('2018-09-10 12:09:09')
    .monthStart()
    .dayEnd()
    .valueOf()).toEqual(dayjs('2018-09-01 23:59:59:999').valueOf())

  // 当月最后一天,最后毫秒
  expect(dayjs('2018-09-10 12:09:09')
    .monthEnd()
    .dayEnd()
    .valueOf()).toEqual(dayjs('2018-09-30 23:59:59:999').valueOf())

  // 当月第一天,第毫秒
  expect(dayjs('2018-09-10 12:09:09')
    .monthStart()
    .dayStart()
    .valueOf()).toEqual(dayjs('2018-09-01 00:00:00').valueOf())

  // 当月最后一天,第毫秒
  expect(dayjs('2018-09-10 12:09:09')
    .monthEnd()
    .dayStart()
    .valueOf()).toEqual(dayjs('2018-09-30 00:00:00').valueOf())
})
