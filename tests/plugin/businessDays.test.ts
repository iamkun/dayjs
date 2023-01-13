import { describe, expect, it } from 'vitest'
import dayjs from '../../src'
import businessDays from '../../src/plugin/businessDays'
import { UNIT_DAY, UNIT_WEEK } from './../../src/constants'

dayjs.extend(businessDays)

describe('Plugin businessDays', () => {
  describe('is business day', () => {
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
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(-20)
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
      expect(
        dayjs(new Date(2023, 0, 9))
          .subtractBusinessDay(-10)
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

      // Special case
      expect(
        dayjs(new Date(2023, 0, 9))
          .addBusinessDay(-4, UNIT_WEEK)
          .isSame(dayjs(new Date(2023, 1, 6)), UNIT_DAY)
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

      // Special case
      expect(
        dayjs(new Date(2023, 0, 9))
          .subtractBusinessDay(-2, UNIT_WEEK)
          .isSame(dayjs(new Date(2022, 11, 26)), UNIT_DAY)
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

  describe('business days in month', () => {
    it('should get business days in month', () => {
      const data = [
        dayjs(new Date(2023, 0, 2, 3)),
        dayjs(new Date(2023, 0, 3, 3)),
        dayjs(new Date(2023, 0, 4, 3)),
        dayjs(new Date(2023, 0, 5, 3)),
        dayjs(new Date(2023, 0, 6, 3)),
        dayjs(new Date(2023, 0, 9, 3)),
        dayjs(new Date(2023, 0, 10, 3)),
        dayjs(new Date(2023, 0, 11, 3)),
        dayjs(new Date(2023, 0, 12, 3)),
        dayjs(new Date(2023, 0, 13, 3)),
        dayjs(new Date(2023, 0, 16, 3)),
        dayjs(new Date(2023, 0, 17, 3)),
        dayjs(new Date(2023, 0, 18, 3)),
        dayjs(new Date(2023, 0, 19, 3)),
        dayjs(new Date(2023, 0, 20, 3)),
        dayjs(new Date(2023, 0, 23, 3)),
        dayjs(new Date(2023, 0, 24, 3)),
        dayjs(new Date(2023, 0, 25, 3)),
        dayjs(new Date(2023, 0, 26, 3)),
        dayjs(new Date(2023, 0, 27, 3)),
        dayjs(new Date(2023, 0, 30, 3)),
        dayjs(new Date(2023, 0, 31, 3)),
      ]

      expect(dayjs(new Date(2023, 0, 10, 3)).businessDaysInMonth()).toEqual(
        data
      )
    })

    it('should get business days in month group by week', () => {
      const data = [
        [
          dayjs(new Date(2023, 2, 1, 3)),
          dayjs(new Date(2023, 2, 2, 3)),
          dayjs(new Date(2023, 2, 3, 3)),
        ],
        [
          dayjs(new Date(2023, 2, 6, 3)),
          dayjs(new Date(2023, 2, 7, 3)),
          dayjs(new Date(2023, 2, 8, 3)),
          dayjs(new Date(2023, 2, 9, 3)),
          dayjs(new Date(2023, 2, 10, 3)),
        ],
        [
          dayjs(new Date(2023, 2, 13, 3)),
          dayjs(new Date(2023, 2, 14, 3)),
          dayjs(new Date(2023, 2, 15, 3)),
          dayjs(new Date(2023, 2, 16, 3)),
          dayjs(new Date(2023, 2, 17, 3)),
        ],
        [
          dayjs(new Date(2023, 2, 20, 3)),
          dayjs(new Date(2023, 2, 21, 3)),
          dayjs(new Date(2023, 2, 22, 3)),
          dayjs(new Date(2023, 2, 23, 3)),
          dayjs(new Date(2023, 2, 24, 3)),
        ],
        [
          dayjs(new Date(2023, 2, 27, 3)),
          dayjs(new Date(2023, 2, 28, 3)),
          dayjs(new Date(2023, 2, 29, 3)),
          dayjs(new Date(2023, 2, 30, 3)),
          dayjs(new Date(2023, 2, 31, 3)),
        ],
      ]

      expect(
        dayjs(new Date(2023, 2, 10, 3)).businessDaysInMonthGroupByWeek()
      ).toEqual(data)
    })

    it('should get nothing', () => {
      expect(dayjs(null).businessDaysInMonth()).toEqual([])
    })
  })

  describe('holiday', () => {
    it('should get nothing', () => {
      expect(dayjs().getHolidays()).toEqual({})
      expect(dayjs(null).getHolidays()).toEqual({})
      dayjs.setHoliday(null)
      expect(dayjs().getHolidays()).toEqual({})
      dayjs.setHoliday([])
      expect(dayjs().getHolidays()).toEqual({})
    })

    it('should get holiday', () => {
      dayjs.setHoliday({
        date: dayjs(new Date(2023, 0, 1)),
        name: 'New Year',
      })
      expect(Object.keys(dayjs().getHolidays()).length).toEqual(1)
      dayjs.setHoliday([
        {
          date: dayjs(new Date(2022, 11, 31)),
          name: 'Before New Year',
        },
      ])
      expect(Object.keys(dayjs().getHolidays()).length).toEqual(2)
      dayjs.clearHoliday()
      expect(Object.keys(dayjs().getHolidays()).length).toEqual(0)

      dayjs.setHoliday({
        date: dayjs(new Date(2023, 0, 1)),
        name: 'New Year',
        repeat: 10,
      })
      expect(Object.keys(dayjs().getHolidays()).length).toEqual(10)
      dayjs.clearHoliday()

      dayjs.setHoliday([
        {
          date: dayjs(new Date(2023, 0, 1)),
          name: 'New Year',
          repeat: 10,
        },
      ])
      expect(Object.keys(dayjs().getHolidays()).length).toEqual(10)
      dayjs.clearHoliday()
    })

    it('is holiday', () => {
      expect(dayjs(new Date(2023, 0, 1)).isHoliday()).toBeFalsy()
      expect(dayjs(new Date(2023, 0, 2)).isHoliday()).toBeFalsy()

      dayjs.setHoliday([
        {
          date: dayjs(new Date(2023, 0, 1)),
          name: 'New Year',
        },
      ])

      expect(dayjs(new Date(2023, 0, 1)).isBusinessDay()).toBeFalsy()
      expect(dayjs(new Date(2023, 0, 1)).isHoliday()).toBeTruthy()
      expect(dayjs(new Date(2023, 0, 2)).isHoliday()).toBeFalsy()
      dayjs.clearHoliday()
      expect(dayjs(new Date(2023, 0, 1)).isBusinessDay()).toBeFalsy()
    })

    it('should get business days', () => {
      dayjs.setHoliday({
        date: dayjs(new Date(2023, 0, 13)),
        name: 'Why not',
      })

      expect(
        dayjs(new Date(2023, 0, 12))
          .addBusinessDay(1)
          .isSame(new Date(2023, 0, 16))
      ).toBeTruthy()
      expect(
        dayjs(new Date(2023, 0, 16))
          .subtractBusinessDay(1)
          .isSame(new Date(2023, 0, 12))
      ).toBeTruthy()

      dayjs.setHoliday({
        date: dayjs(new Date(2023, 0, 16)),
        name: 'Why not, again',
      })

      expect(
        dayjs(new Date(2023, 0, 12))
          .addBusinessDay(1)
          .isSame(new Date(2023, 0, 16))
      ).toBeFalsy()
      expect(
        dayjs(new Date(2023, 0, 16))
          .subtractBusinessDay(1)
          .isSame(new Date(2023, 0, 12))
      ).toBeTruthy()
      dayjs.clearHoliday()

      dayjs.setHoliday({
        date: dayjs(new Date(2023, 0, 16)),
        name: 'VACATION',
        repeat: 10,
        repeatUnit: UNIT_DAY,
      })
      expect(
        dayjs(new Date(2023, 0, 13))
          .addBusinessDay(1)
          .isSame(new Date(2023, 0, 30))
      ).toBeTruthy()
      dayjs.clearHoliday()

      dayjs.setHoliday([
        {
          date: dayjs(new Date(2023, 0, 16)),
          name: 'VACATION',
          repeat: 10,
          repeatUnit: UNIT_DAY,
        },
      ])
      expect(
        dayjs(new Date(2023, 0, 13))
          .addBusinessDay(1)
          .isSame(new Date(2023, 0, 30))
      ).toBeTruthy()
      dayjs.clearHoliday()
    })
  })
})
