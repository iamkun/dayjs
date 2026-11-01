import dayjs from '../../src'
import '../../src/locale/gom-latn'

it('Konkani (Latin) week starts on Sunday', () => {
  const d = dayjs('2026-03-11').locale('gom-latn') // Wednesday
  expect(dayjs.Ls.'gom-latn'.weekStart).toBe(0)
  expect(d.startOf('week').day()).toBe(0)
  expect(d.endOf('week').day()).toBe(6)
})
