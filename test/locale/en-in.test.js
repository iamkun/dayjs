import dayjs from '../../src'
import '../../src/locale/en-in'

it('English (India) week starts on Sunday', () => {
  const d = dayjs('2026-03-11').locale('en-in') // Wednesday
  expect(dayjs.Ls.'en-in'.weekStart).toBe(0)
  expect(d.startOf('week').day()).toBe(0)
  expect(d.endOf('week').day()).toBe(6)
})
