import dayjs from '../../src'
import advancedFormat from '../../src/plugin/advancedFormat'
import weekOfYear from '../../src/plugin/weekOfYear'
import '../../src/locale/fr-ca'

dayjs.extend(advancedFormat).extend(weekOfYear)

test('ordinal', () => {
  const firstDayFirstWeek = dayjs('2022-01-01').locale('fr-ca')
  const secondDaySecondWeek = dayjs('2022-01-02').locale('fr-ca')

  expect(firstDayFirstWeek.format('Do')).toEqual('1er')
  expect(firstDayFirstWeek.format('wo')).toEqual('1re')
  expect(secondDaySecondWeek.format('Do')).toEqual('2')
  expect(secondDaySecondWeek.format('wo')).toEqual('2e')
})
