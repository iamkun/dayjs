import { bench, describe } from 'vitest'
import dayjs from '../../src'
import businessDays from '../../src/plugin/businessDays'

dayjs.extend(businessDays)

describe('Plugin businessDays', () => {
  describe('isBusinessDay', () => {
    bench('should return true for business days', () => {
      dayjs(new Date(2023, 0, 9)).isBusinessDay()
      dayjs(new Date(2023, 0, 10)).isBusinessDay()
      dayjs(new Date(2023, 0, 11)).isBusinessDay()
      dayjs(new Date(2023, 0, 12)).isBusinessDay()
      dayjs(new Date(2023, 0, 13)).isBusinessDay()
    })

    bench('should return false for non-business days', () => {
      dayjs(new Date(2023, 0, 8)).isBusinessDay()
      dayjs(new Date(2023, 0, 14)).isBusinessDay()
    })
  })

  describe('Add / Subtract', () => {
    bench('should add days', () => {
      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(1)
        .isSame(dayjs(new Date(2023, 0, 10)))

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(2)
        .isSame(dayjs(new Date(2023, 0, 11)))

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(3)
        .isSame(dayjs(new Date(2023, 0, 12)))

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(4)
        .isSame(dayjs(new Date(2023, 0, 13)))

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(5)
        .isSame(dayjs(new Date(2023, 0, 16)))

      // Special case
      dayjs(new Date(2023, 0, 31))
        .addBusinessDay(1)
        .isSame(dayjs(new Date(2023, 1, 1)))

      dayjs(new Date(2022, 11, 31))
        .addBusinessDay(1)
        .isSame(dayjs(new Date(2023, 0, 2)))
    })

    bench('should subtract days', () => {
      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(1)
        .isSame(dayjs(new Date(2023, 0, 12)))

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(2)
        .isSame(dayjs(new Date(2023, 0, 11)))

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(3)
        .isSame(dayjs(new Date(2023, 0, 10)))

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(4)
        .isSame(dayjs(new Date(2023, 0, 9)))

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(5)
        .isSame(dayjs(new Date(2023, 0, 6)))

      // Special case
      dayjs(new Date(2023, 1, 1))
        .subtractBusinessDay(1)
        .isSame(dayjs(new Date(2023, 0, 31)))

      dayjs(new Date(2023, 0, 1))
        .subtractBusinessDay(1)
        .isSame(dayjs(new Date(2022, 11, 30)))
    })

    bench('should add weeks', () => {
      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(1, 'week')
        .isSame(dayjs(new Date(2023, 0, 16)))
      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(2, 'week')
        .isSame(dayjs(new Date(2023, 0, 23)))

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(3, 'week')
        .isSame(dayjs(new Date(2023, 0, 30)))

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(4, 'week')
        .isSame(dayjs(new Date(2023, 1, 6)))

      dayjs(new Date(2023, 0, 9))
        .addBusinessDay(5, 'week')
        .isSame(dayjs(new Date(2023, 1, 13)))
    })

    bench('should subtract weeks', () => {
      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(1, 'week')
        .isSame(dayjs(new Date(2023, 0, 6)))
      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(2, 'week')
        .isSame(dayjs(new Date(2022, 11, 30)))

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(3, 'week')
        .isSame(dayjs(new Date(2022, 11, 23)))

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(4, 'week')
        .isSame(dayjs(new Date(2022, 11, 16)))

      dayjs(new Date(2023, 0, 13))
        .subtractBusinessDay(5, 'week')
        .isSame(dayjs(new Date(2022, 11, 9)))
    })
  })
})
