// import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import '../../src/locale/zh-cn'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Meridiem', () => {
  // the '中午' is different to moment.js 11-13
  expect(dayjs('2020-01-01 10:59:59').locale('zh-cn').format('A')).toEqual('上午')
  expect(dayjs('2020-01-01 11:00:00').locale('zh-cn').format('A')).toEqual('中午')
  expect(dayjs('2020-01-01 12:59:59').locale('zh-cn').format('A')).toEqual('中午')
  expect(dayjs('2020-01-01 13:00:00').locale('zh-cn').format('A')).toEqual('下午')
})
