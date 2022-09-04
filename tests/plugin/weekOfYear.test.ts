import { afterEach, beforeEach, describe, test, vi } from 'vitest'
import dayjs from '../../src'
import '../../src/locale/en-gb'
import { expectSame, expectSameResult } from '../_util'

import weekOfYear from '../../src/plugin/weekOfYear'

dayjs.extend(weekOfYear)

describe.each([{ locale: 'en' }, { locale: 'en-gb' }])(
  'Plugin WeekOfYear with locale "$locale"',
  ({ locale }) => {
    beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date())
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    test.each(['2022-07-14T14:59:09+08:00', '2022-12-31T10:59:09+08:00'])(
      'Gets week of year for date "%s"',
      (dateString) => {
        dayjs.locale(locale)
        expectSame((dayjs) => dayjs(dateString).week())
      }
    )

    test.each([1, 27, 51, 52, 55])(
      'Sets week of year for week "%n"',
      (weekNumber) => {
        dayjs.locale(locale)
        expectSameResult((dayjs) => dayjs().week(weekNumber))
        expectSameResult((dayjs) => dayjs().week(-1 * weekNumber))
      }
    )

    test.each([
      '2020-12-31',
      '2018-12-30',
      '2018-12-31',
      '2019-12-29',
      '2019-12-30',
      '2017-12-31',
      '2016-01-01',
      '2016-01-04',
    ])('Gets week of year for edge case "%s"', (dateString) => {
      dayjs.locale(locale)
      expectSame((dayjs) => dayjs(dateString).week())
    })
  }
)
