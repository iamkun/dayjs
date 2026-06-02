import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import localizedFormat from '../../src/plugin/localizedFormat'
import '../../src/locale/ja'

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Finnish locale relative time in past and future', () => {
  const cases = [
    [1, 'd', '1日後'],
    [-1, 'd', '1日前'],
    [2, 'd', '2日後'],
    [-2, 'd', '2日前'],
    [10, 'd', '10日後'],
    [-10, 'd', '10日前'],
    [6, 'm', '6分後'],
    [-6, 'm', '6分前'],
    [5, 'h', '5時間後'],
    [-5, 'h', '5時間前'],
    [3, 'M', '3ヶ月後'],
    [-3, 'M', '3ヶ月前'],
    [4, 'y', '4年後'],
    [-4, 'y', '4年前']
  ]
  cases.forEach((c) => {
    expect(dayjs().add(c[0], c[1]).locale('ja').fromNow())
      .toBe(c[2])
    expect(dayjs().add(c[0], c[1]).locale('ja').fromNow())
      .toBe(moment().add(c[0], c[1]).locale('ja').fromNow())
  })
  expect(dayjs().add(-10, 'd').locale('ja').fromNow(true))
    .toBe('10日')
  expect(dayjs().add(-10, 'd').locale('ja').fromNow(true))
    .toBe(moment().add(-10, 'd').locale('ja').fromNow(true))
})

it('Japanese locale date formats', () => {
  expect(dayjs('2019-02-01').locale('ja').format('L'))
    .toBe('2019/02/01')
  expect(dayjs('2019-02-01').locale('ja').format('l'))
    .toBe('2019/2/1')
})

