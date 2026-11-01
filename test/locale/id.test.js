import dayjs from '../../src'
import '../../src/locale/id'

it('Indonesian week starts on Sunday', () => {
  const d = dayjs('2026-03-11').locale('id') // Wednesday
  expect(dayjs.Ls.id.weekStart).toBe(0)
  expect(d.startOf('week').day()).toBe(0)
  expect(d.endOf('week').day()).toBe(6)
})
