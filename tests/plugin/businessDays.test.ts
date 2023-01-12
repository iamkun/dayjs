import { describe, expect, it } from 'vitest'
import dayjs from '../../src'
import businessDays from '../../src/plugin/businessDays'
import { UNIT_DAY } from './../../src/constants'

dayjs.extend(businessDays)

describe('Plugin businessDays', () => {
  describe('isBusinessDay', () => {
    it('should return true for business days', () => {
      expect(dayjs(new Date(2023, 0, 9)).isBusinessDay()).toBeTruthy()
      expect(dayjs(new Date(2023, 0, 10)).isBusinessDay()).toBeTruthy()
      expect(dayjs(new Date(2023, 0, 11)).isBusinessDay()).toBeTruthy()
      expect(dayjs(new Date(2023, 0, 12)).isBusinessDay()).toBeTruthy()
      expect(dayjs(new Date(2023, 0, 13)).isBusinessDay()).toBeTruthy()
    })

    it('should return false for non-business days', () => {
      expect(dayjs(new Date(2023, 0, 8)).isBusinessDay()).toBeFalsy()
      expect(dayjs(new Date(2023, 0, 14)).isBusinessDay()).toBeFalsy()
    })
  })

  describe('Add / Subtract', () => {
    it('should add days', () => {
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(1)
          .isSame(dayjs(new Date(2023, 0, 10)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(2)
          .isSame(dayjs(new Date(2023, 0, 11)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(3)
          .isSame(dayjs(new Date(2023, 0, 12)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(4)
          .isSame(dayjs(new Date(2023, 0, 13)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(5)
          .isSame(dayjs(new Date(2023, 0, 16)), UNIT_DAY)
      ).toBeTruthy()

      // Special case
      expect(
        dayjs(new Date(2023, 0, 31))
          .addBusinessDay(1)
          .isSame(dayjs(new Date(2023, 1, 1)))
      ).toBeTruthy()
      expect(
        dayjs(new Date(2022, 11, 31))
          .addBusinessDay(1)
          .isSame(dayjs(new Date(2023, 0, 2)))
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(10)
          .isSame(dayjs(new Date(2023, 0, 23)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(20)
          .isSame(dayjs(new Date(2023, 1, 6)), UNIT_DAY)
      ).toBeTruthy()
    })

    it('should subtract days', () => {
      expect(
        dayjs(new Date(2023, 0, 13))
          .subtractBusinessDay(1)
          .isSame(dayjs(new Date(2023, 0, 12)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 13))
          .subtractBusinessDay(2)
          .isSame(dayjs(new Date(2023, 0, 11)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 13))
          .subtractBusinessDay(3)
          .isSame(dayjs(new Date(2023, 0, 10)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 13))
          .subtractBusinessDay(4)
          .isSame(dayjs(new Date(2023, 0, 9)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 13))
          .subtractBusinessDay(5)
          .isSame(dayjs(new Date(2023, 0, 6)), UNIT_DAY)
      ).toBeTruthy()

      // Special case
      expect(
        dayjs(new Date(2023, 1, 1))
          .subtractBusinessDay(1)
          .isSame(dayjs(new Date(2023, 0, 31)))
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 1))
          .subtractBusinessDay(1)
          .isSame(dayjs(new Date(2022, 11, 30)))
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 13))
          .subtractBusinessDay(10)
          .isSame(dayjs(new Date(2022, 11, 30)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 13))
          .subtractBusinessDay(20)
          .isSame(dayjs(new Date(2022, 11, 16)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .subtractBusinessDay(10)
          .isSame(dayjs(new Date(2022, 11, 26)), UNIT_DAY)
      ).toBeTruthy()
    })

    it('should add weeks', () => {
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(1, 'week')
          .isSame(dayjs(new Date(2023, 0, 16)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(2, 'week')
          .isSame(dayjs(new Date(2023, 0, 23)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(3, 'week')
          .isSame(dayjs(new Date(2023, 0, 30)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(4, 'week')
          .isSame(dayjs(new Date(2023, 1, 6)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(5, 'week')
          .isSame(dayjs(new Date(2023, 1, 13)), UNIT_DAY)
      ).toBeTruthy()
    })

    it('should subtract weeks', () => {
      expect(
        dayjs(new Date(2023, 0, 13))
          .subtractBusinessDay(1, 'week')
          .isSame(dayjs(new Date(2023, 0, 6)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 13))
          .subtractBusinessDay(2, 'week')
          .isSame(dayjs(new Date(2022, 11, 30)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 13))
          .subtractBusinessDay(3, 'week')
          .isSame(dayjs(new Date(2022, 11, 23)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 13))
          .subtractBusinessDay(4, 'week')
          .isSame(dayjs(new Date(2022, 11, 16)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 13))
          .subtractBusinessDay(5, 'week')
          .isSame(dayjs(new Date(2022, 11, 9)), UNIT_DAY)
      ).toBeTruthy()
    })

    it('should nothing change', () => {
      expect(dayjs().addBusinessDay().isSame(dayjs(), UNIT_DAY)).toBeTruthy()
      expect(
        dayjs().subtractBusinessDay().isSame(dayjs(), UNIT_DAY)
      ).toBeTruthy()

      expect(dayjs().addBusinessDay(0).isSame(dayjs(), UNIT_DAY)).toBeTruthy()
      expect(
        dayjs().subtractBusinessDay(0).isSame(dayjs(), UNIT_DAY)
      ).toBeTruthy()
    })
  })

  describe('Next / Previous', () => {
    it('should get next business day', () => {
      expect(
        dayjs(new Date(2023, 0, 9))
          .nextBusinessDay()
          .isSame(dayjs(new Date(2023, 0, 10)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .nextBusinessDay()
          .isSame(dayjs(new Date(2023, 0, 11)), UNIT_DAY)
      ).toBeFalsy()
    })

    it('should get previous business day', () => {
      expect(
        dayjs(new Date(2023, 0, 13))
          .previousBusinessDay()
          .isSame(dayjs(new Date(2023, 0, 12)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 13))
          .previousBusinessDay()
          .isSame(dayjs(new Date(2023, 0, 11)), UNIT_DAY)
      ).toBeFalsy()
    })
  })

  describe('First / Last', () => {
    it('should get first business day of month', () => {
      expect(
        dayjs(new Date(2023, 0, 9))
          .firstBusinessDayOf()
          .isSame(dayjs(new Date(2023, 0, 2)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 9))
          .firstBusinessDayOf()
          .isSame(dayjs(new Date(2023, 0, 1)), UNIT_DAY)
      ).toBeFalsy()
      expect(
        dayjs(new Date(2023, 1, 9))
          .firstBusinessDayOf()
          .isSame(dayjs(new Date(2023, 1, 1)), UNIT_DAY)
      ).toBeTruthy()
    })

    it('should get last business day of month', () => {
      expect(
        dayjs(new Date(2023, 0, 13))
          .lastBusinessDayOf()
          .isSame(dayjs(new Date(2023, 0, 31)), UNIT_DAY)
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 13))
          .lastBusinessDayOf()
          .isSame(dayjs(new Date(2023, 0, 29)), UNIT_DAY)
      ).toBeFalsy()
      expect(
        dayjs(new Date(2023, 3, 9))
          .lastBusinessDayOf()
          .isSame(dayjs(new Date(2023, 3, 28)), UNIT_DAY)
      ).toBeTruthy()
    })
  })
})
