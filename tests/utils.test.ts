import { describe, expect, it } from 'vitest'
import {
  cloneDate,
  isEmptyObject,
  mutable,
  padZoneStr,
  pick,
} from '../src/utils'

describe('utils', () => {
  it('mutable should work', () => {
    const obj = { a: 'b' }
    expect(mutable(obj)).toBe(obj)

    const bool = true
    expect(mutable(bool)).toBe(bool)
  })

  it('pick should work', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(pick(obj, ['a', 'b'])).toMatchInlineSnapshot(`
      {
        "a": 1,
        "b": 2,
      }
    `)

    // @ts-expect-error
    expect(pick(obj, ['no-exist-key'])).toMatchInlineSnapshot('{}')
    // @ts-expect-error
    expect(() => pick(obj, undefined)).toThrowError()
  })

  it('cloneDate should work', () => {
    const date = new Date()
    const newDate = cloneDate(date)

    expect(newDate).not.toBe(date)

    expect(newDate.toString()).toBe(date.toString())
    expect(newDate.toISOString()).toBe(date.toISOString())
    expect(newDate.valueOf()).toBe(date.valueOf())
  })

  it('isEmptyObject should work', () => {
    expect(isEmptyObject({})).toBe(true)
    expect(isEmptyObject({ [Symbol()]: true })).toBe(true)

    expect(isEmptyObject({ a: 'b' })).toBe(false)
    expect(isEmptyObject(Date)).toBe(false)
    expect(isEmptyObject('')).toBe(false)
    expect(isEmptyObject(null)).toBe(false)
  })

  it('padZoneStr should work', () => {
    expect(padZoneStr(10)).toMatchInlineSnapshot('"+00:10"')
    expect(padZoneStr(-1234)).toMatchInlineSnapshot('"-20:34"')
    expect(padZoneStr(-3601)).toMatchInlineSnapshot('"-60:01"')
  })
})
