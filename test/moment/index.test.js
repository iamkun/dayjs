/* eslint-disable no-console */
/* eslint-disable import/extensions */
import * as fc from 'fast-check/lib/cjs/fast-check.js'

import MockDate from 'mockdate'
import moment from 'moment-timezone'
import dayjs from '../../src'
import utc from '../../src/plugin/utc'
import tzn from '../../src/plugin/timezone'

import { timezoneArb, dateArb } from './utils'

dayjs.extend(utc)
dayjs.extend(tzn)

fc.configureGlobal({
  includeErrorInReport: true
})

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('dayjs vs moment', () => {
  test('getTime', () => {
    fc.assert(fc.property(dateArb, (date) => {
      const time = date.getTime()
      const d = dayjs(time)
      const m = moment(time)

      expect(d.utcOffset()).toBe(m.utcOffset())
      expect(d.toISOString()).toBe(m.toISOString())
      expect(d.valueOf()).toBe(m.valueOf())
      expect(d.toDate().getTime()).toBe(m.toDate().getTime())
      expect(d.format()).toBe(m.format())
    }))
  })

  test('utcOffset', () => {
    fc.assert(fc.property(
      dateArb,
      fc.noShrink(fc.integer({ min: -12, max: 14 })),
      fc.boolean(),
      (date, offset, keepLocalTime) => {
        const time = date.getTime()
        const d = dayjs(time).utcOffset(offset, keepLocalTime)
        const m = moment(time).utcOffset(offset, keepLocalTime)

        expect(d.utcOffset()).toBe(m.utcOffset())
        expect(d.toISOString()).toBe(m.toISOString())
        expect(d.valueOf()).toBe(m.valueOf())
        expect(d.toDate().getTime()).toBe(m.toDate().getTime())
        expect(d.format()).toBe(m.format())
      }
    ))
  })
})

describe('dayjs.tz vs moment.tz', () => {
  test('dayjs(date).tz(timezone, keepLocalTime))', () => {
    fc.assert(fc.property(
      dateArb,
      timezoneArb,
      fc.boolean(),
      (date, timezone, keepLocalTime) => {
        const d = dayjs(date.getTime()).tz(timezone, keepLocalTime)
        const m = moment(date.getTime()).tz(timezone, keepLocalTime)

        if (d.utcOffset() !== m.utcOffset()) {
          console.error(`Moment Timezone offset mismatch for ${timezone}`)
          return
        }
        expect(d.toISOString()).toBe(m.toISOString())
        expect(d.valueOf()).toBe(m.valueOf())
        expect(d.toDate().getTime()).toBe(m.toDate().getTime())
        expect(d.format()).toBe(m.format())
      }
    ))
  })

  test('dayjs.tz(date, timezone)', () => {
    fc.assert(fc.property(dateArb, timezoneArb, (date, timezone) => {
      const d = dayjs.tz(date.toISOString(), timezone)
      const m = moment.tz(date.toISOString(), timezone)

      if (d.utcOffset() !== m.utcOffset()) {
        console.error(`Moment Timezone offset mismatch for ${timezone}`)
        return
      }
      expect(d.toISOString()).toBe(m.toISOString())
      expect(d.valueOf()).toBe(m.valueOf())
      expect(d.toDate().getTime()).toBe(m.toDate().getTime())
      expect(d.format()).toBe(m.format())
    }))
  })
})
