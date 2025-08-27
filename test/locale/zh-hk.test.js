import dayjs from '../../src'
import advancedFormat from '../../src/plugin/advancedFormat'
import weekOfYear from '../../src/plugin/weekOfYear'
import '../../src/locale/zh'
import '../../src/locale/zh-cn'
import '../../src/locale/zh-hk'
import '../../src/locale/zh-tw'

dayjs.extend(advancedFormat).extend(weekOfYear)

const zh = dayjs().locale('zh')
const zhCN = dayjs().locale('zh-cn')
const zhHK = dayjs().locale('zh-hk')
const zhTW = dayjs().locale('zh-tw')

test('ordinal', () => {
  expect(zh.format('wo')).toEqual(`${zh.format('w')}周`)
  expect(zhCN.format('wo')).toEqual(`${zhCN.format('w')}周`)
  expect(zhHK.format('wo')).toEqual(`${zhHK.format('w')}週`)
  expect(zhTW.format('wo')).toEqual(`${zhTW.format('w')}週`)
})

test('Meridiem', () => {
  for (let i = 0; i <= 24; i += 1) {
    expect(zh.add(i, 'hour').format('A')).toBe(zhCN.add(i, 'hour').format('A'))
  }
})

test('Meridiem', () => {
  expect(dayjs('2020-01-01 05:59:59').locale('zh-hk').format('A')).toEqual('凌晨')
  expect(dayjs('2020-01-01 08:59:59').locale('zh-hk').format('A')).toEqual('早上')
  expect(dayjs('2020-01-01 10:59:59').locale('zh-hk').format('A')).toEqual('上午')
  expect(dayjs('2020-01-01 11:00:00').locale('zh-hk').format('A')).toEqual('中午')
  expect(dayjs('2020-01-01 12:59:59').locale('zh-hk').format('A')).toEqual('中午')
  expect(dayjs('2020-01-01 13:00:00').locale('zh-hk').format('A')).toEqual('下午')
})

