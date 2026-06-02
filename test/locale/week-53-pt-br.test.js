import dayjs from '../../src'
import weekOfYear from '../../src/plugin/weekOfYear'
import '../../src/locale/pt-br'

dayjs.extend(weekOfYear)

it('week 53 for pt-br on 2020-12-31', () => {
  dayjs.locale('pt-br')

  expect(dayjs('2020-12-31').week()).toBe(53)
})
