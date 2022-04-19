import moment from 'moment'
import { describe, expect, it } from 'vitest'
import dayjs from '../src'
import { expectSame } from './_util'

describe('Getter and setter', () => {
  const date = new Date()

  it('Year', () => {
    expectSame((dayjs) => dayjs(date).get('year'))
    expectSame((dayjs) => dayjs(date).year())
    expectSame((dayjs) => dayjs(date).year(0).valueOf())
    expectSame((dayjs) => dayjs(date).year(2000).valueOf())
  })

  it('Month', () => {
    expectSame((dayjs) => dayjs(date).get('month'))
    expectSame((dayjs) => dayjs(date).month())
    expectSame((dayjs) => dayjs(date).month(0).valueOf())
    expectSame((dayjs) => dayjs(date).month(1).valueOf())
  })

  it('Day of Week', () => {
    expectSame((dayjs) => dayjs(date).get('day'))
    expectSame((dayjs) => dayjs(date).day())
    expectSame((dayjs) => dayjs(date).day(0).format())
    expectSame((dayjs) => dayjs(date).day(1).format())
  })

  it('Date', () => {
    expectSame((dayjs) => dayjs(date).get('date'))
    expectSame((dayjs) => dayjs(date).date())
    expectSame((dayjs) => dayjs(date).date(0).valueOf())
    expectSame((dayjs) => dayjs(date).date(1).valueOf())
  })

  it('Hour', () => {
    expectSame((dayjs) => dayjs(date).get('hour'))
    expectSame((dayjs) => dayjs(date).hour())
    expectSame((dayjs) => dayjs(date).hour(0).valueOf())
    expectSame((dayjs) => dayjs(date).hour(1).valueOf())
  })

  it('Minute', () => {
    expectSame((dayjs) => dayjs(date).get('minute'))
    expectSame((dayjs) => dayjs(date).minute())
    expectSame((dayjs) => dayjs(date).minute(0).valueOf())
    expectSame((dayjs) => dayjs(date).minute(1).valueOf())
  })

  it('Second', () => {
    expectSame((dayjs) => dayjs(date).get('second'))
    expectSame((dayjs) => dayjs(date).second())
    expectSame((dayjs) => dayjs(date).second(0).valueOf())
    expectSame((dayjs) => dayjs(date).second(1).valueOf())
  })

  it('Millisecond', () => {
    expectSame((dayjs) => dayjs(date).get('millisecond'))
    expectSame((dayjs) => dayjs(date).millisecond())
    expectSame((dayjs) => dayjs(date).millisecond(0).valueOf())
    expectSame((dayjs) => dayjs(date).millisecond(1).valueOf())
  })

  it('Set Day', () => {
    expectSame((dayjs) => dayjs(date).set('date', 30).valueOf())
  })

  it('Set Day of Week', () => {
    expectSame((dayjs) => dayjs(date).set('day', 0).valueOf())
  })

  it('Set Month', () => {
    expectSame((dayjs) => dayjs(date).set('month', 11).valueOf())
  })

  it('Set Year', () => {
    expectSame((dayjs) => dayjs(date).set('year', 2008).valueOf())
  })

  it('Set Hour', () => {
    expectSame((dayjs) => dayjs(date).set('hour', 6).valueOf())
  })

  it('Set Minute', () => {
    expectSame((dayjs) => dayjs(date).set('minute', 59).valueOf())
  })

  it('Set Second', () => {
    expectSame((dayjs) => dayjs(date).set('second', 59).valueOf())
  })

  it('Set Millisecond', () => {
    expectSame((dayjs) => dayjs(date).set('millisecond', 999).valueOf())
  })

  it('Set Month and Year in last day of month', () => {
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

  it('Set Unknown String', () => {
    expectSame((dayjs) => {
      // @ts-expect-error
      const newDate = dayjs(date).set('Unknown String', 1)
      return newDate.valueOf()
    })
  })

  it('Immutable Set', () => {
    const dayjsA = dayjs(date)
    const dayjsB = dayjsA.set('year', 2011)
    const momentA = moment()
    const momentB = momentA.set('year', 2011)
    expect(dayjsA.valueOf()).not.toBe(dayjsB.valueOf())
    expect(momentA.valueOf()).toBe(momentB.valueOf())
  })
})
