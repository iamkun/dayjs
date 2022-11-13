import { afterEach, beforeEach, describe, test, vi } from 'vitest'
import {
  UNIT_DATE,
  UNIT_DAY,
  UNIT_HOUR,
  UNIT_MINUTE,
  UNIT_MONTH,
  UNIT_SECOND,
  UNIT_WEEK,
  UNIT_YEAR,
} from '../src/constants'
import { expectSameResult } from './_util'

const unitsShort = [
  { unit: 'y' },
  { unit: 'M' },
  { unit: 'd' },
  { unit: 'h' },
  { unit: 'm' },
  { unit: 's' },
  { unit: 'ms' },
  { unit: 'w' },
] as const
const unitsLong = [
  { unit: 'year' },
  { unit: 'month' },
  { unit: 'day' },
  { unit: 'hour' },
  { unit: 'minute' },
  { unit: 'second' },
  { unit: 'millisecond' },
  { unit: 'week' },
] as const
const testValuesInteger = [1, 2, 5, 10] as const
const testValuesDecimal = [0, 0.25, 0.5, 0.75, 1] as const

describe('StartOf / EndOf', () => {
  const units = [
    UNIT_YEAR,
    UNIT_MONTH,
    UNIT_DAY,
    UNIT_DATE,
    UNIT_WEEK,
    UNIT_HOUR,
    UNIT_MINUTE,
    UNIT_SECOND,
  ] as const

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date())
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test.each(units)('get startOf "%s" for current date', (unit) => {
    expectSameResult((dayjs) => dayjs().startOf(unit))
  })

  test.each(units)('get sndOf "%s" for current date', (unit) => {
    expectSameResult((dayjs) => dayjs().endOf(unit))
  })
})

describe.each(unitsShort)(
  'Add values to date using short unit "$unit"',
  ({ unit }) => {
    beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date())
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    test.each(testValuesInteger)(
      'add "%i" (integer) to current date',
      (value) => {
        expectSameResult((dayjs) => dayjs().add(value, unit))
      }
    )

    test.each(testValuesInteger)(
      'add "%i" (integer) to date from number',
      (value) => {
        expectSameResult((dayjs) => dayjs(20111031).add(value, unit))
      }
    )

    test.each(testValuesDecimal)(
      'add "%i" (decimal) to current date',
      (value) => {
        expectSameResult((dayjs) => dayjs().add(value, unit))
      }
    )

    test.each(testValuesDecimal)(
      'add "%i" (decimal) to date from number',
      (value) => {
        expectSameResult((dayjs) => dayjs(20111031).add(value, unit))
      }
    )
  }
)

describe.each(unitsLong)(
  'Add values to date using long unit "$unit"',
  ({ unit }) => {
    beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date())
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    test.each(testValuesInteger)(
      'add "%i" (integer) to current date',
      (value) => {
        expectSameResult((dayjs) => dayjs().add(value, unit))
      }
    )

    test.each(testValuesInteger)(
      'add "%i" (integer) to date from number',
      (value) => {
        expectSameResult((dayjs) => dayjs(20111031).add(value, unit))
      }
    )

    test.each(testValuesDecimal)(
      'add "%i" (decimal) to current date',
      (value) => {
        expectSameResult((dayjs) => dayjs().add(value, unit))
      }
    )

    test.each(testValuesDecimal)(
      'add "%i" (decimal) to date from number',
      (value) => {
        expectSameResult((dayjs) => dayjs(20111031).add(value, unit))
      }
    )
  }
)

describe.each(unitsShort)(
  'subtract values from date using short unit "$unit"',
  ({ unit }) => {
    beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date())
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    test.each(testValuesInteger)(
      'subtract "%i" (integer) from current date',
      (value) => {
        expectSameResult((dayjs) => dayjs().subtract(value, unit))
      }
    )

    test.each(testValuesInteger)(
      'subtract "%i" (integer) from date from number',
      (value) => {
        expectSameResult((dayjs) => dayjs(20111031).subtract(value, unit))
      }
    )

    test.each(testValuesDecimal)(
      'subtract "%i" (decimal) from current date',
      (value) => {
        expectSameResult((dayjs) => dayjs().subtract(value, unit))
      }
    )

    test.each(testValuesDecimal)(
      'subtract "%i" (decimal) from date from number',
      (value) => {
        expectSameResult((dayjs) => dayjs(20111031).subtract(value, unit))
      }
    )
  }
)

describe.each(unitsLong)(
  'subtract values from date using long unit "$unit"',
  ({ unit }) => {
    beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date())
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    test.each(testValuesInteger)(
      'subtract "%i" (integer) from current date',
      (value) => {
        expectSameResult((dayjs) => dayjs().subtract(value, unit))
      }
    )

    test.each(testValuesInteger)(
      'subtract "%i" (integer) from date from number',
      (value) => {
        expectSameResult((dayjs) => dayjs(20111031).subtract(value, unit))
      }
    )

    test.each(testValuesDecimal)(
      'subtract "%i" (decimal) from current date',
      (value) => {
        expectSameResult((dayjs) => dayjs().subtract(value, unit))
      }
    )

    test.each(testValuesDecimal)(
      'subtract "%i" (decimal) from date from number',
      (value) => {
        expectSameResult((dayjs) => dayjs(20111031).subtract(value, unit))
      }
    )
  }
)
