import dayjs from '../../src'

describe('milliseconds padding bug (Issue #1331)', () => {
  it('parses 2-digit milliseconds correctly (.52 should be 520ms not 52ms)', () => {
    const timestamp = '2026-01-01T10:00:00.52'
    const expected = new Date(timestamp).getTime()
    const actual = dayjs(timestamp).valueOf()

    expect(actual).toBe(expected)
  })

  it('parses 1-digit milliseconds correctly (.3 should be 300ms not 3ms)', () => {
    const timestamp = '2026-01-01T10:00:00.3'
    const expected = new Date(timestamp).getTime()
    const actual = dayjs(timestamp).valueOf()

    expect(actual).toBe(expected)
  })

  it('parses 3-digit milliseconds correctly (existing behavior)', () => {
    const timestamp = '2026-01-01T10:00:00.620'
    const expected = new Date(timestamp).getTime()
    const actual = dayjs(timestamp).valueOf()

    expect(actual).toBe(expected)
  })

  it('handles missing milliseconds', () => {
    const timestamp = '2026-01-01T10:00:00'
    const expected = new Date(timestamp).getTime()
    const actual = dayjs(timestamp).valueOf()

    expect(actual).toBe(expected)
  })
})
