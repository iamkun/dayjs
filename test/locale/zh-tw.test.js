import dayjs from '../../src'
import advancedFormat from '../../src/plugin/advancedFormat'
import weekOfYear from '../../src/plugin/weekOfYear'
import '../../src/locale/zh'
import '../../src/locale/zh-tw'

dayjs.extend(advancedFormat).extend(weekOfYear)

const zh = dayjs().locale('zh')
const zhTW = dayjs().locale('zh-tw')

test('ordinal', () => {
  expect(zh.format('wo')).toEqual(`${zh.format('w')}周`)
  expect(zhTW.format('wo')).toEqual(`${zhTW.format('w')}週`)
})

test('Meridiem', () => {
  for (let i = 0; i <= 24; i += 1) {
    expect(zh.add(i, 'hour').format('A')).toBe(zhTW.add(i, 'hour').format('A'))
  }
})
