import MockDate from 'mockdate'
import dayjs from '../../src'
import '../../src/locale/ku'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format meridiem correctly', () => {
  for (let i = 0; i <= 23; i += 1) {
    const dayjsKu = dayjs()
      .startOf('day')
      .add(i, 'hour')
    expect(dayjsKu.locale('ku').format('h A')).toBe(`${i % 12 || 12} ${i < 12 ? 'پ.ن' : 'د.ن'}`)
  }
})
