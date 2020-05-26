import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import calendar from '../../src/plugin/calendar'
import zhCn from '../../src/locale/zh-cn'

dayjs.extend(calendar)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('No argument && null && undefined', () => {
  expect(dayjs().calendar()).toEqual(moment().calendar())
  expect(dayjs().calendar(null)).toEqual(moment().calendar(null))
  expect(dayjs().calendar(undefined)).toEqual(moment().calendar(undefined))
})

it('ReferenceTime', () => {
  const now = '2015-01-15T14:21:22.000Z'
  const dates = [
    {
      name: 'nextDay',
      date: '2015-01-14T11:23:55.000Z',
      result: 'Tomorrow'
    },
    {
      name: 'sameDay',
      date: '2015-01-15T11:23:55.000Z',
      result: 'Today'
    },
    {
      name: 'nextWeek',
      date: '2015-01-09T11:23:55.000Z',
      result: 'Thursday'
    },
    {
      name: 'lastDay',
      date: '2015-01-16T11:23:55.000Z',
      result: 'Yesterday'
    },
    {
      name: 'lastWeek',
      date: '2015-01-21T11:23:55.000Z',
      result: 'Last'
    },
    {
      name: 'sameElse',
      date: '2015-01-01T11:23:55.000Z',
      result: '01/15/2015'
    },
    {
      name: 'sameElse',
      date: '2015-02-21T11:23:55.000Z',
      result: '01/15/2015'
    }
  ]
  dates.forEach((d) => {
    const dayjsResult = dayjs(now).calendar(d.date)
    const momentjsResult = moment(now).calendar(d.date)
    expect(dayjsResult)
      .toEqual(momentjsResult)
    expect(dayjsResult.indexOf(d.result) > -1)
      .toBe(true)
  })
})

it('Custom format', () => {
  const format = {
    sameDay: '[sameDay]',
    sameElse: '[sameElse]'
  }
  expect(dayjs().calendar(null, format)).toEqual(moment().calendar(null, format))
  const now = '2015-01-15T14:21:22.000Z'
  const nextDayWithoutFormat = '2015-01-14T11:23:55.000Z'
  expect(dayjs(now).calendar(nextDayWithoutFormat, format))
    .toEqual(moment(now).calendar(nextDayWithoutFormat, format))
})

it('Custom callback', () => {
  const callbacks = {
    sameDay: jest.fn(),
    sameElse: jest.fn()
  }
  const now = '2015-01-15T14:21:22.000Z'
  const nextDayWithoutFormat = '2015-01-14T11:23:55.000Z'
  expect(dayjs(now).calendar(nextDayWithoutFormat, callbacks))
    .toEqual(moment(now).calendar(nextDayWithoutFormat, callbacks))
})

it('Calls callback', () => {
  const callbacks = {
    sameDay: jest.fn(),
    sameElse: jest.fn()
  }
  dayjs().calendar(null, callbacks)
  expect(callbacks.sameElse).not.toBeCalled()
  expect(callbacks.sameDay).toBeCalled()
})

it('callback is a function with the scope of the current moment', () => {
  const callbacks = {
    sameDay: jest.fn()
  }
  expect(dayjs().calendar(null, callbacks)).toEqual(callbacks.sameDay())
  const callbacks2 = {
    sameDay: function cb() {
      return this
    }
  }
  const result = dayjs().calendar(null, callbacks2)
  expect(result.format).not.toBeUndefined()
  expect(dayjs.isDayjs(result)).toBeTruthy()
})

it('callback is a function and first argument a moment that depicts now', () => {
  const callbacks = {
    sameDay: jest.fn()
  }
  const now = dayjs()
  dayjs(now).calendar(now, callbacks)
  expect(callbacks.sameDay).toBeCalledWith(now)
})

it('set global calendar in locale file', () => {
  const now = '2019-04-03T14:21:22.000Z'
  zhCn.calendar = {
    sameDay: '[今天]HH:mm',
    nextDay: '[明天]HH:mm',
    nextWeek: '[下]ddddHH:mm',
    lastDay: '[昨天]HH:mm',
    lastWeek: '[上]ddddHH:mm',
    sameElse: 'YYYY/MM/DD'
  }
  dayjs.locale(zhCn)
  expect(dayjs(now).calendar())
    .toEqual(moment(now).locale('zh-cn').calendar())
})
