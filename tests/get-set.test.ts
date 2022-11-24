import moment from 'moment'
import { describe, expect, test } from 'vitest'
import dayjs from '../src'
import { expectSame } from './_util'

describe('Getter', () => {
  const date = new Date()

  test('Year', () => {
    expectSame((dayjs) => dayjs(date).get('y'))
    expectSame((dayjs) => dayjs(date).get('year'))
    expectSame((dayjs) => dayjs(date).year())
    expectSame((dayjs) => dayjs(date).year(0).valueOf())
    expectSame((dayjs) => dayjs(date).year(2000).valueOf())
  })

  test('Month', () => {
    expectSame((dayjs) => dayjs(date).get('month'))
    expectSame((dayjs) => dayjs(date).month())
    expectSame((dayjs) => dayjs(date).month(0).valueOf())
    expectSame((dayjs) => dayjs(date).month(1).valueOf())
  })

  test('Day of month', () => {
    expectSame((dayjs) => dayjs(date).get('D'))
    expectSame((dayjs) => dayjs(date).get('date'))
    expectSame((dayjs) => dayjs(date).date())
    expectSame((dayjs) => dayjs(date).date(0).valueOf())
    expectSame((dayjs) => dayjs(date).date(1).valueOf())
  })

  test('Day of Week', () => {
    expectSame((dayjs) => dayjs(date).get('d'))
    expectSame((dayjs) => dayjs(date).get('day'))
    expectSame((dayjs) => dayjs(date).day())
    expectSame((dayjs) => dayjs(date).day(0).format())
    expectSame((dayjs) => dayjs(date).day(1).format())
  })

  test('Hour', () => {
    expectSame((dayjs) => dayjs(date).get('h'))
    expectSame((dayjs) => dayjs(date).get('hour'))
    expectSame((dayjs) => dayjs(date).hour())
    expectSame((dayjs) => dayjs(date).hour(0).valueOf())
    expectSame((dayjs) => dayjs(date).hour(1).valueOf())
  })

  test('Minute', () => {
    expectSame((dayjs) => dayjs(date).get('m'))
    expectSame((dayjs) => dayjs(date).get('minute'))
    expectSame((dayjs) => dayjs(date).minute())
    expectSame((dayjs) => dayjs(date).minute(0).valueOf())
    expectSame((dayjs) => dayjs(date).minute(1).valueOf())
  })

  test('Second', () => {
    expectSame((dayjs) => dayjs(date).get('s'))
    expectSame((dayjs) => dayjs(date).get('second'))
    expectSame((dayjs) => dayjs(date).second())
    expectSame((dayjs) => dayjs(date).second(0).valueOf())
    expectSame((dayjs) => dayjs(date).second(1).valueOf())
  })

  test('Millisecond', () => {
    expectSame((dayjs) => dayjs(date).get('ms'))
    expectSame((dayjs) => dayjs(date).get('millisecond'))
    expectSame((dayjs) => dayjs(date).millisecond())
    expectSame((dayjs) => dayjs(date).millisecond(0).valueOf())
    expectSame((dayjs) => dayjs(date).millisecond(1).valueOf())
  })
})

describe('Setter', () => {
  const date = new Date()

  test('Set Year', () => {
    expectSame((dayjs) => dayjs(date).set('y', 2008).valueOf())
    expectSame((dayjs) => dayjs(date).set('year', 2008).valueOf())
  })

  test('Set Month', () => {
    expectSame((dayjs) => dayjs(date).set('M', 11).valueOf())
    expectSame((dayjs) => dayjs(date).set('month', 11).valueOf())
  })

  test('Set Day of month', () => {
    expectSame((dayjs) => dayjs(date).set('D', 30).valueOf())
    expectSame((dayjs) => dayjs(date).set('date', 30).valueOf())
  })

  test('Set Day of Week', () => {
    expectSame((dayjs) => dayjs(date).set('d', 0).valueOf())
    expectSame((dayjs) => dayjs(date).set('day', 0).valueOf())
  })

  test('Set Hour', () => {
    expectSame((dayjs) => dayjs(date).set('h', 6).valueOf())
    expectSame((dayjs) => dayjs(date).set('hour', 6).valueOf())
  })

  test('Set Minute', () => {
    expectSame((dayjs) => dayjs(date).set('m', 59).valueOf())
    expectSame((dayjs) => dayjs(date).set('minute', 59).valueOf())
  })

  test('Set Second', () => {
    expectSame((dayjs) => dayjs(date).set('s', 59).valueOf())
    expectSame((dayjs) => dayjs(date).set('second', 59).valueOf())
  })

  test('Set Millisecond', () => {
    expectSame((dayjs) => dayjs(date).set('ms', 999).valueOf())
    expectSame((dayjs) => dayjs(date).set('millisecond', 999).valueOf())
  })

  test('Set Month and Year in last day of month', () => {
    // 2011-07-31 -> 2011-02-28
    const origin = dayjs('2011-07-31T14:48:00.000Z')
    const setMonth = origin.set('month', 1)
    expect(setMonth.month()).toBe(1)
    expect(origin.date()).toBe(31)
    expect(setMonth.date()).toBe(28)
    // 2000-02-29 -> 2001-02-28
    const origin2 = dayjs('2000-02-29T14:48:00.000Z')
    const setYear = origin2.set('year', 2001)
    expect(setYear.month()).toBe(1)
    expect(origin2.date()).toBe(29)
    expect(setYear.date()).toBe(28)
  })

  test('Set Unknown String', () => {
    expectSame((dayjs) => {
      // @ts-expect-error
      const newDate = dayjs(date).set('Unknown String', 1)
      return newDate.valueOf()
    })
  })

  test('Immutable Set', () => {
    const dayjsA = dayjs(date)
    const dayjsB = dayjsA.set('year', 2011)
    const momentA = moment()
    const momentB = momentA.set('year', 2011)
    expect(dayjsA.valueOf()).not.toBe(dayjsB.valueOf())
    expect(momentA.valueOf()).toBe(momentB.valueOf())
  })
})
