import { describe, expect, test } from 'vitest'
import { normalize, units, unitsLong, unitsShort } from '../src/units'

describe('units', () => {
  test('normalize should work', () => {
    // @ts-expect-error
    expect(normalize('Days')).toBe('day')
    expect(normalize('days')).toBe('day')
    expect(normalize('day')).toBe('day')
    expect(normalize('D')).toBe('date')
    expect(normalize('d')).toBe('day')
    expect(normalize('M')).toBe('month')
    expect(normalize('y')).toBe('year')
    expect(normalize('h')).toBe('hour')
    expect(normalize('m')).toBe('minute')
    expect(normalize('s')).toBe('second')
    expect(normalize('ms')).toBe('millisecond')
    // @ts-expect-error
    expect(normalize()).toBe('')
    // @ts-expect-error
    expect(normalize(null)).toMatchInlineSnapshot('""')
    // @ts-expect-error
    expect(normalize('error')).toMatchInlineSnapshot('"error"')
    // @ts-expect-error
    expect(() => normalize(false)).toThrowError()
  })

  test('units should be correct', () => {
    expect(units).is.a('object')
    expect(Object.keys(units).length).greaterThan(0)
    expect(unitsShort.length).toBe(Object.keys(units).length)
    expect(unitsShort.length).toBe(unitsLong.length)
  })
})
