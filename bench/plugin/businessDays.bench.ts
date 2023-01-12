import { describe } from 'vitest'
import dayjs from '../../src'
import businessDays from '../../src/plugin/businessDays'
import { defaultBenchmark } from '../_utils'
import { UNIT_DAY } from '../../src/constants'

dayjs.extend(businessDays)

describe('Plugin businessDays', () => {
  describe('isBusinessDay', () => {
    defaultBenchmark('should return true for business days', () => {
      dayjs(new Date(2023, 0, 9)).isBusinessDay()
      dayjs(new Date(2023, 0, 10)).isBusinessDay()
      dayjs(new Date(2023, 0, 11)).isBusinessDay()
      dayjs(new Date(2023, 0, 12)).isBusinessDay()
      dayjs(new Date(2023, 0, 13)).isBusinessDay()
    })

    defaultBenchmark('should return false for non-business days', () => {
      dayjs(new Date(2023, 0, 8)).isBusinessDay()
      dayjs(new Date(2023, 0, 14)).isBusinessDay()
    })
  })

  describe('Add / Subtract', () => {
    defaultBenchmark('should add days', () => {
      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(1)
        .isSame(dayjs(new Date(2023, 0, 10)), UNIT_DAY)

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(2)
        .isSame(dayjs(new Date(2023, 0, 11)), UNIT_DAY)

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(3)
        .isSame(dayjs(new Date(2023, 0, 12)), UNIT_DAY)

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(4)
        .isSame(dayjs(new Date(2023, 0, 13)), UNIT_DAY)

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(5)
        .isSame(dayjs(new Date(2023, 0, 16)), UNIT_DAY)

      // Special case
      dayjs(new Date(2023, 0, 31))
        .addBusinessDay(1)
        .isSame(dayjs(new Date(2023, 1, 1)), UNIT_DAY)

      dayjs(new Date(2022, 11, 31))
        .addBusinessDay(1)
        .isSame(dayjs(new Date(2023, 0, 2)), UNIT_DAY)

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(10)
        .isSame(dayjs(new Date(2023, 0, 23)), UNIT_DAY)

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(20)
        .isSame(dayjs(new Date(2023, 1, 6)), UNIT_DAY)
    })

    defaultBenchmark('should subtract days', () => {
      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(1)
        .isSame(dayjs(new Date(2023, 0, 12)), UNIT_DAY)

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(2)
        .isSame(dayjs(new Date(2023, 0, 11)), UNIT_DAY)

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(3)
        .isSame(dayjs(new Date(2023, 0, 10)), UNIT_DAY)

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(4)
        .isSame(dayjs(new Date(2023, 0, 9)), UNIT_DAY)

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(5)
        .isSame(dayjs(new Date(2023, 0, 6)), UNIT_DAY)

      // Special case
      dayjs(new Date(2023, 1, 1))
        .subtractBusinessDay(1)
        .isSame(dayjs(new Date(2023, 0, 31)), UNIT_DAY)

      dayjs(new Date(2023, 0, 1))
        .subtractBusinessDay(1)
        .isSame(dayjs(new Date(2022, 11, 30)), UNIT_DAY)

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(10)
        .isSame(dayjs(new Date(2022, 11, 30)), UNIT_DAY)
      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(20)
        .isSame(dayjs(new Date(2022, 11, 16)), UNIT_DAY)
      dayjs(new Date(2023, 0, 9))
        .subtractBusinessDay(10)
        .isSame(dayjs(new Date(2022, 11, 26)), UNIT_DAY)
    })

    defaultBenchmark('should add weeks', () => {
      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(1, 'week')
        .isSame(dayjs(new Date(2023, 0, 16)), UNIT_DAY)
      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(2, 'week')
        .isSame(dayjs(new Date(2023, 0, 23)), UNIT_DAY)

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(3, 'week')
        .isSame(dayjs(new Date(2023, 0, 30)), UNIT_DAY)

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(4, 'week')
        .isSame(dayjs(new Date(2023, 1, 6)), UNIT_DAY)

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(5, 'week')
        .isSame(dayjs(new Date(2023, 1, 13)), UNIT_DAY)
    })

    defaultBenchmark('should subtract weeks', () => {
      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(1, 'week')
        .isSame(dayjs(new Date(2023, 0, 6)), UNIT_DAY)
      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(2, 'week')
        .isSame(dayjs(new Date(2022, 11, 30)), UNIT_DAY)

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(3, 'week')
        .isSame(dayjs(new Date(2022, 11, 23)), UNIT_DAY)

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(4, 'week')
        .isSame(dayjs(new Date(2022, 11, 16)), UNIT_DAY)

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(5, 'week')
        .isSame(dayjs(new Date(2022, 11, 9)), UNIT_DAY)
    })
  })

  describe('Next / Previous', () => {
    defaultBenchmark('should get next business day', () => {
      dayjs(new Date(2023, 0, 9))
        .nextBusinessDay()
        .isSame(dayjs(new Date(2023, 0, 10)), UNIT_DAY)
      dayjs(new Date(2023, 0, 9))
        .nextBusinessDay()
        .isSame(dayjs(new Date(2023, 0, 11)), UNIT_DAY)
    })

    defaultBenchmark('should get previous business day', () => {
      dayjs(new Date(2023, 0, 13))
        .previousBusinessDay()
        .isSame(dayjs(new Date(2023, 0, 12)), UNIT_DAY)
      dayjs(new Date(2023, 0, 13))
        .previousBusinessDay()
        .isSame(dayjs(new Date(2023, 0, 11)), UNIT_DAY)
    })
  })

  describe('First / Last', () => {
    defaultBenchmark('should get first business day of month', () => {
      dayjs(new Date(2023, 0, 9))
        .firstBusinessDayOf()
        .isSame(dayjs(new Date(2023, 0, 2)), UNIT_DAY)
      dayjs(new Date(2023, 0, 9))
        .firstBusinessDayOf()
        .isSame(dayjs(new Date(2023, 0, 1)), UNIT_DAY)
      dayjs(new Date(2023, 1, 9))
        .firstBusinessDayOf()
        .isSame(dayjs(new Date(2023, 1, 1)), UNIT_DAY)
    })

    defaultBenchmark('should get last business day of month', () => {
      dayjs(new Date(2023, 0, 13))
        .lastBusinessDayOf()
        .isSame(dayjs(new Date(2023, 0, 31)), UNIT_DAY)
      dayjs(new Date(2023, 0, 13))
        .lastBusinessDayOf()
        .isSame(dayjs(new Date(2023, 0, 29)), UNIT_DAY)
      dayjs(new Date(2023, 3, 9))
        .lastBusinessDayOf()
        .isSame(dayjs(new Date(2023, 3, 28)), UNIT_DAY)
    })
  })

  describe('business days in month', () => {
    defaultBenchmark('should get business days in month', () => {
      dayjs(new Date(2023, 0, 10, 3)).businessDaysInMonth()
    })
    defaultBenchmark('should get business days in month group by week', () => {
      dayjs(new Date(2023, 0, 10, 3)).businessDaysInMonthGroupByWeek()
    })
  })
})
