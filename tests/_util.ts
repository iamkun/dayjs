import moment from 'moment'
import { expect } from 'vitest'
import { dayjs } from '../src'
import type { Dayjs, DayjsFn } from '../src'
import type { Moment } from 'moment'

export const expectSame = (
  fn: (instance: DayjsFn, kind: 'dayjs' | 'moment') => any
) => {
  const d = fn(dayjs, 'dayjs')
  const m = fn(moment as unknown as DayjsFn, 'moment')
  expect(d).toBe(m)
}

export const expectSameResult = (
  fn: (instance: DayjsFn, kind: 'dayjs' | 'moment') => Dayjs | Moment
) => {
  const d = fn(dayjs, 'dayjs')
  const m = fn(moment as unknown as DayjsFn, 'moment')
  expect(d.isValid()).toBe(m.isValid())
  if (d.isValid()) {
    expect(d.toISOString()).toBe(m.toISOString())
    expect(d.valueOf()).toBe(m.valueOf())
    expect(d.millisecond()).toBe(m.millisecond())
    expect(d.toDate()).toEqual(m.toDate())
    expect(d.toJSON()).toEqual(m.toJSON())
    expect(d.format()).toBe(m.format()) // not recommend
  } else {
    expect(d.toString().toLowerCase()).toMatchInlineSnapshot('"invalid date"')
  }
}
