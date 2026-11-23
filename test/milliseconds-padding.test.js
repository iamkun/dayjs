import dayjs from '../src'

describe('Milliseconds padding bug (Issue #1331)', () => {
  it('parses 2-digit milliseconds correctly (.62 should be 620ms not 62ms)', () => {
    const timestamp = '2026-01-01T10:00:00.62'
    const expected = new Date(timestamp).getTime() // 620ms
    const actual = dayjs(timestamp).valueOf()

    expect(actual).toBe(expected)
  })

  it('parses 1-digit milliseconds correctly (.6 should be 600ms not 6ms)', () => {
    const timestamp = '2026-01-01T10:00:00.6'
    const expected = new Date(timestamp).getTime() // 600ms
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
