import { describe, expect, it } from 'vitest'
import dayjs from '../../src'

import isSameOrBefore from '../../src/plugin/isSameOrBefore'

dayjs.extend(isSameOrBefore)

describe('Plugin isSameOrBefore', () => {
  it('is same or before without units', () => {
    const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
    const mCopy = dayjs(m)
    expect(
      m.isSameOrBefore(dayjs(new Date(2012, 3, 2, 3, 5, 5, 10))),
      'year is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 3, 2, 3, 3, 5, 10))),
      'year is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 4, 2, 3, 4, 5, 10))),
      'month is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 2, 2, 3, 4, 5, 10))),
      'month is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 3, 3, 4, 5, 10))),
      'day is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 1, 3, 4, 5, 10))),
      'day is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 4, 4, 5, 10))),
      'hour is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 2, 4, 5, 10))),
      'hour is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 5, 5, 10))),
      'minute is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 3, 5, 10))),
      'minute is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 4, 6, 10))),
      'second is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 4, 4, 11))),
      'second is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))),
      'millisecond match'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 4, 5, 11))),
      'millisecond is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 4, 5, 9))),
      'millisecond is earlier'
    ).toBe(false)
    expect(m.isSameOrBefore(m), 'moments are the same as themselves').toBe(true)
    expect(+m, 'isSameOrBefore second should not change moment').toEqual(+mCopy)
  })

  it('is same or before year', () => {
    const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
    const mCopy = dayjs(m)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)), 'year'),
      'year match'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)), 'years'),
      'plural should work'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2012, 5, 6, 7, 8, 9, 10)), 'year'),
      'year is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 5, 6, 7, 8, 9, 10)), 'year'),
      'year is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 0, 1, 0, 0, 0, 0)), 'year'),
      'exact start of year'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 11, 31, 23, 59, 59, 999)), 'year'),
      'exact end of year'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2012, 0, 1, 0, 0, 0, 0)), 'year'),
      'start of next year'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 11, 31, 23, 59, 59, 999)), 'year'),
      'end of previous year'
    ).toBe(false)
    expect(
      m.isSameOrBefore(m, 'year'),
      'same moments are in the same year'
    ).toBe(true)
    expect(+m, 'isSameOrBefore year should not change moment').toEqual(+mCopy)
  })

  it('is same or before month', () => {
    const m = dayjs(new Date(2011, 2, 3, 4, 5, 6, 7))
    const mCopy = dayjs(m)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 2, 6, 7, 8, 9, 10)), 'month'),
      'month match'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 2, 6, 7, 8, 9, 10)), 'months'),
      'plural should work'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2012, 2, 6, 7, 8, 9, 10)), 'month'),
      'year is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 2, 6, 7, 8, 9, 10)), 'month'),
      'year is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)), 'month'),
      'month is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 6, 7, 8, 9, 10)), 'month'),
      'month is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 2, 1, 0, 0, 0, 0)), 'month'),
      'exact start of month'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 2, 31, 23, 59, 59, 999)), 'month'),
      'exact end of month'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 1, 0, 0, 0, 0)), 'month'),
      'start of next month'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 27, 23, 59, 59, 999)), 'month'),
      'end of previous month'
    ).toBe(false)
    expect(
      m.isSameOrBefore(m, 'month'),
      'same moments are in the same month'
    ).toBe(true)
    expect(+m, 'isSameOrBefore month should not change moment').toEqual(+mCopy)
  })

  it('is same or before day', () => {
    const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
    const mCopy = dayjs(m)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 7, 8, 9, 10)), 'day'),
      'day match'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 7, 8, 9, 10)), 'days'),
      'plural should work'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2012, 1, 2, 7, 8, 9, 10)), 'day'),
      'year is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 1, 2, 7, 8, 9, 10)), 'day'),
      'year is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 2, 2, 7, 8, 9, 10)), 'day'),
      'month is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 12, 2, 7, 8, 9, 10)), 'day'),
      'month is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 3, 7, 8, 9, 10)), 'day'),
      'day is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 1, 7, 8, 9, 10)), 'day'),
      'day is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 0, 0, 0, 0)), 'day'),
      'exact start of day'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 23, 59, 59, 999)), 'day'),
      'exact end of day'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 3, 0, 0, 0, 0)), 'day'),
      'start of next day'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 1, 23, 59, 59, 999)), 'day'),
      'end of previous day'
    ).toBe(false)
    expect(m.isSameOrBefore(m, 'day'), 'same moments are in the same day').toBe(
      true
    )
    expect(+m, 'isSameOrBefore day should not change moment').toEqual(+mCopy)
  })

  it('is same or before hour', () => {
    const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
    const mCopy = dayjs(m)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 8, 9, 10)), 'hour'),
      'hour match'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 8, 9, 10)), 'hours'),
      'plural should work'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2012, 1, 2, 3, 8, 9, 10)), 'hour'),
      'year is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 1, 2, 3, 8, 9, 10)), 'hour'),
      'year is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 2, 2, 3, 8, 9, 10)), 'hour'),
      'month is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 12, 2, 3, 8, 9, 10)), 'hour'),
      'month is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 3, 3, 8, 9, 10)), 'hour'),
      'day is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 1, 3, 8, 9, 10)), 'hour'),
      'day is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 4, 8, 9, 10)), 'hour'),
      'hour is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 2, 8, 9, 10)), 'hour'),
      'hour is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 0, 0, 0)), 'hour'),
      'exact start of hour'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 59, 59, 999)), 'hour'),
      'exact end of hour'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 4, 0, 0, 0)), 'hour'),
      'start of next hour'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 2, 59, 59, 999)), 'hour'),
      'end of previous hour'
    ).toBe(false)
    expect(
      m.isSameOrBefore(m, 'hour'),
      'same moments are in the same hour'
    ).toBe(true)
    expect(+m, 'isSameOrBefore hour should not change moment').toEqual(+mCopy)
  })

  it('is same or before minute', () => {
    const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
    const mCopy = dayjs(m)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 4, 9, 10)), 'minute'),
      'minute match'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 4, 9, 10)), 'minutes'),
      'plural should work'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2012, 1, 2, 3, 4, 9, 10)), 'minute'),
      'year is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 1, 2, 3, 4, 9, 10)), 'minute'),
      'year is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 2, 2, 3, 4, 9, 10)), 'minute'),
      'month is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 12, 2, 3, 4, 9, 10)), 'minute'),
      'month is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 3, 3, 4, 9, 10)), 'minute'),
      'day is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 1, 3, 4, 9, 10)), 'minute'),
      'day is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 4, 4, 9, 10)), 'minute'),
      'hour is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 2, 4, 9, 10)), 'minute'),
      'hour is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 5, 9, 10)), 'minute'),
      'minute is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 3, 9, 10)), 'minute'),
      'minute is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 4, 0, 0)), 'minute'),
      'exact start of minute'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 4, 59, 999)), 'minute'),
      'exact end of minute'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 5, 0, 0)), 'minute'),
      'start of next minute'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 3, 59, 999)), 'minute'),
      'end of previous minute'
    ).toBe(false)
    expect(
      m.isSameOrBefore(m, 'minute'),
      'same moments are in the same minute'
    ).toBe(true)
    expect(+m, 'isSameOrBefore minute should not change moment').toEqual(+mCopy)
  })

  it('is same or before second', () => {
    const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
    const mCopy = dayjs(m)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 4, 5, 10)), 'second'),
      'second match'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 4, 5, 10)), 'seconds'),
      'plural should work'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2012, 1, 2, 3, 4, 5, 10)), 'second'),
      'year is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 1, 2, 3, 4, 5, 10)), 'second'),
      'year is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 2, 2, 3, 4, 5, 10)), 'second'),
      'month is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 12, 2, 3, 4, 5, 10)), 'second'),
      'month is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 3, 3, 4, 5, 10)), 'second'),
      'day is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 1, 3, 4, 5, 10)), 'second'),
      'day is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 4, 4, 5, 10)), 'second'),
      'hour is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 2, 4, 5, 10)), 'second'),
      'hour is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 5, 5, 10)), 'second'),
      'minute is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 3, 5, 10)), 'second'),
      'minute is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 4, 6, 10)), 'second'),
      'second is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 4, 4, 10)), 'second'),
      'second is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 4, 5, 0)), 'second'),
      'exact start of second'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 4, 5, 999)), 'second'),
      'exact end of second'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 4, 6, 0)), 'second'),
      'start of next second'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 1, 2, 3, 4, 4, 999)), 'second'),
      'end of previous second'
    ).toBe(false)
    expect(
      m.isSameOrBefore(m, 'second'),
      'same moments are in the same second'
    ).toBe(true)
    expect(+m, 'isSameOrBefore second should not change moment').toEqual(+mCopy)
  })

  it('is same or before millisecond', () => {
    const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
    const mCopy = dayjs(m)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)), 'millisecond'),
      'millisecond match'
    ).toBe(true)
    expect(
      m.isSameOrBefore(
        dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)),
        'milliseconds'
      ),
      'plural should work'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)), 'millisecond'),
      'year is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)), 'millisecond'),
      'year is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 4, 2, 3, 4, 5, 10)), 'millisecond'),
      'month is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 2, 2, 3, 4, 5, 10)), 'millisecond'),
      'month is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 3, 3, 4, 5, 10)), 'millisecond'),
      'day is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 1, 1, 4, 5, 10)), 'millisecond'),
      'day is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 4, 4, 5, 10)), 'millisecond'),
      'hour is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 1, 4, 1, 5, 10)), 'millisecond'),
      'hour is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 5, 5, 10)), 'millisecond'),
      'minute is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 3, 5, 10)), 'millisecond'),
      'minute is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 4, 6, 10)), 'millisecond'),
      'second is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 4, 4, 5)), 'millisecond'),
      'second is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 4, 6, 11)), 'millisecond'),
      'millisecond is later'
    ).toBe(true)
    expect(
      m.isSameOrBefore(dayjs(new Date(2011, 3, 2, 3, 4, 4, 9)), 'millisecond'),
      'millisecond is earlier'
    ).toBe(false)
    expect(
      m.isSameOrBefore(m, 'millisecond'),
      'same moments are in the same millisecond'
    ).toBe(true)
    expect(+m, 'isSameOrBefore millisecond should not change moment').toEqual(
      +mCopy
    )
  })

  it('is same with invalid moments', () => {
    const m = dayjs()
    const invalid = dayjs(null)
    expect(
      invalid.isSameOrBefore(invalid),
      'invalid moments are not considered equal'
    ).toBe(false)
    expect(
      m.isSameOrBefore(invalid),
      'valid moment is not before invalid moment'
    ).toBe(false)
    expect(
      invalid.isSameOrBefore(m),
      'invalid moment is not before valid moment'
    ).toBe(false)
    expect(m.isSameOrBefore(invalid, 'year'), 'invalid moment year').toBe(false)
    expect(m.isSameOrBefore(invalid, 'month'), 'invalid moment month').toBe(
      false
    )
    expect(m.isSameOrBefore(invalid, 'day'), 'invalid moment day').toBe(false)
    expect(m.isSameOrBefore(invalid, 'hour'), 'invalid moment hour').toBe(false)
    expect(m.isSameOrBefore(invalid, 'minute'), 'invalid moment minute').toBe(
      false
    )
    expect(m.isSameOrBefore(invalid, 'second'), 'invalid moment second').toBe(
      false
    )
    expect(
      m.isSameOrBefore(invalid, 'milliseconds'),
      'invalid moment milliseconds'
    ).toBe(false)
  })
})
